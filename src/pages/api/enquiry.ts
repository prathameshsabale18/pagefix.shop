import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({message:'The enquiry form sent an unreadable request. Please try again.'}), {status:400, headers:{'Content-Type':'application/json'}});
  }

  try {
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const company = String(body.company || '').trim();
    const service = String(body.service || '').trim();
    const message = String(body.message || '').trim();
    if (!name || !email || !service || !message) return new Response(JSON.stringify({message:'Please complete the required fields.'}), {status:400, headers:{'Content-Type':'application/json'}});
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const serviceKey = import.meta.env.SUPABASE_SECRET_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey) return new Response(JSON.stringify({message:'Enquiry storage is not configured yet.'}), {status:503, headers:{'Content-Type':'application/json'}});
    if (serviceKey.startsWith('sb_publishable_')) return new Response(JSON.stringify({message:'Supabase is using a publishable key for server-side storage. Set SUPABASE_SECRET_KEY to your Supabase secret key.'}), {status:503, headers:{'Content-Type':'application/json'}});
    const headers = new Headers({
      apikey: serviceKey,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    });
    if (!serviceKey.startsWith('sb_secret_')) headers.set('Authorization', `Bearer ${serviceKey}`);
    const insert = await fetch(`${supabaseUrl}/rest/v1/enquiries`, {method:'POST', headers, body:JSON.stringify({name,email,company,service,message,status:'new'})});
    if (!insert.ok) return new Response(JSON.stringify({message:'Could not save your enquiry. Please try again.'}), {status:502, headers:{'Content-Type':'application/json'}});
    const resendKey = import.meta.env.RESEND_API_KEY;
    const to = import.meta.env.PAGEFIX_ENQUIRY_TO;
    const from = import.meta.env.PAGEFIX_FROM_EMAIL;
    if (resendKey && to && from) {
      await fetch('https://api.resend.com/emails', {method:'POST', headers:{Authorization:`Bearer ${resendKey}`, 'Content-Type':'application/json'}, body:JSON.stringify({from,to,reply_to:email,subject:`New PageFix enquiry — ${name}`,text:`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\n${message}`})});
    }
    return new Response(JSON.stringify({ok:true}), {status:200, headers:{'Content-Type':'application/json'}});
  } catch (error) {
    console.error('Enquiry submission failed:', error);
    return new Response(JSON.stringify({message:'The enquiry could not reach storage. Check the server Supabase configuration and try again.'}), {status:502, headers:{'Content-Type':'application/json'}});
  }
};
