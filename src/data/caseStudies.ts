export type CaseStudy = {
  slug: string;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  snapshot: { label: string; value: string }[];
  product: { title: string; body: string; bullets: string[] };
  problem: { title: string; body: string; points: string[] };
  approach: { title: string; body: string; steps: string[] };
  flow: { title: string; body: string; steps: { number: string; label: string; detail: string }[] };
  decisions: { number: string; title: string; body: string }[];
  system: { title: string; body: string; layers: { label: string; detail: string }[] };
  outcome: { title: string; body: string; facts: string[] };
};

export const caseStudies: Record<string, CaseStudy> = {
  autobon: {
    slug: 'autobon',
    heroLabel: '01 / DIGITAL PLATFORM / CANADA',
    heroTitle: 'AUTOBON.',
    heroDescription:
      'A complete digital platform for a Canadian premium vehicle-rental company, designed across discovery, booking, account experiences and administration.',
    snapshot: [
      { label: 'Role', value: 'UI / UX & Product Designer' },
      { label: 'Scope', value: 'Digital platform' },
      { label: 'Booking', value: '12+ steps' },
      { label: 'Account', value: '15+ pages' },
      { label: 'Systems', value: 'Admin + backend' },
      { label: 'Period', value: '2026' }
    ],
    product: {
      title: 'A rental platform, not just a website.',
      body:
        'The project covered the customer-facing sales experience and the product surfaces needed around it. The documented scope included a sales website, a 12+ step booking flow, 15+ account and user-input pages, login and sign-up, an admin dashboard and backend development.',
      bullets: [
        'Sales website',
        '12+ step booking flow',
        '15+ account and user-input pages',
        'Login and sign-up',
        'Admin dashboard',
        'Backend development'
      ]
    },
    problem: {
      title: 'The complexity was in the journey.',
      body:
        'A vehicle-rental experience has several connected moments: discovering the offer, selecting a vehicle, progressing through booking information, creating or accessing an account, and supporting the operation behind the customer experience.',
      points: [
        'Turn a long booking journey into clear, understandable steps.',
        'Keep account and input-heavy screens consistent with the main experience.',
        'Design customer-facing and administrative surfaces as one connected product.',
        'Maintain responsive hierarchy across a broad set of interfaces.'
      ]
    },
    approach: {
      title: 'Structure the experience before styling it.',
      body:
        'The work was approached as a product-design problem: understand the journey, define the information structure, establish the flow, then translate it into a consistent interface system.',
      steps: [
        'Understand the business and customer journey',
        'Map the information architecture',
        'Break the booking experience into explicit steps',
        'Design reusable interface patterns',
        'Build responsive screens around the system',
        'Work with development requirements and constraints'
      ]
    },
    flow: {
      title: '12+ steps. One continuous journey.',
      body:
        'The booking flow was treated as a sequence rather than a collection of unrelated forms. Each step had to preserve context while moving the customer toward completion.',
      steps: [
        { number: '01', label: 'DISCOVER', detail: 'Understand the rental offer and available vehicles.' },
        { number: '02', label: 'SELECT', detail: 'Choose the relevant vehicle and booking direction.' },
        { number: '03', label: 'BOOK', detail: 'Move through the required booking inputs in sequence.' },
        { number: '04', label: 'DETAILS', detail: 'Capture customer and account information without breaking context.' },
        { number: '05', label: 'REVIEW', detail: 'Bring the entered information together before completion.' },
        { number: '06+', label: 'COMPLETE', detail: 'Continue through the remaining booking and confirmation states.' }
      ]
    },
    decisions: [
      {
        number: '01',
        title: 'Break complexity into visible steps.',
        body: 'A 12+ step journey becomes easier to reason about when progress and context are visible. The interface should make the next action obvious rather than presenting the customer with one overwhelming form.'
      },
      {
        number: '02',
        title: 'Reuse patterns across account screens.',
        body: 'With 15+ account and user-input pages, consistency becomes a product requirement. Shared hierarchy, form patterns and interaction behavior reduce the cognitive cost of moving between screens.'
      },
      {
        number: '03',
        title: 'Design the operation behind the experience.',
        body: 'The platform scope included an admin dashboard and backend development, so the customer journey could not be designed independently from the operational system supporting it.'
      }
    ],
    system: {
      title: 'Customer experience connected to an operating system.',
      body:
        'The project extended beyond the public-facing website. The documented scope connected customer journeys with authentication, account surfaces and an administrative environment.',
      layers: [
        { label: 'CUSTOMER', detail: 'Sales website / vehicle discovery / booking journey' },
        { label: 'ACCOUNT', detail: 'Login / sign-up / user-input and account pages' },
        { label: 'OPERATIONS', detail: 'Admin dashboard for the internal side of the platform' },
        { label: 'BACKEND', detail: 'Implementation work supporting the broader digital platform' }
      ]
    },
    outcome: {
      title: 'A connected digital platform.',
      body:
        'The delivered scope brought the customer-facing and operational sides of the product into one digital experience. The project covered the sales website, booking flow, account surfaces, authentication, administration and backend development.',
      facts: [
        '12+ step booking flow',
        '15+ account and user-input pages',
        'Sales website',
        'Login and sign-up',
        'Admin dashboard',
        'Backend development'
      ]
    }
  },

  canvasbill: {
    slug: 'canvasbill',
    heroLabel: '02 / BUSINESS SOFTWARE / CANVAS CREATION',
    heroTitle: 'CANVASBILL.',
    heroDescription:
      'A billing and invoice management system built around invoice creation, tax calculations, operational records and filtered business reporting.',
    snapshot: [
      { label: 'Role', value: 'Product Designer / Developer' },
      { label: 'Product', value: 'Billing system' },
      { label: 'Data', value: 'Invoices + clients' },
      { label: 'Documents', value: 'PDF reports' },
      { label: 'Reporting', value: 'Search / filter / sort' },
      { label: 'Backend', value: 'Supabase' }
    ],
    product: {
      title: 'A billing workspace for daily operations.',
      body:
        'CanvasBILL brings the operational pieces of billing into one workspace: invoice records, client information, item calculations, GST handling, payment status, dashboard metrics and report generation.',
      bullets: [
        'Invoice creation and management',
        'Client and GST information',
        'Assessable value and tax calculations',
        'Paid / pending status tracking',
        'Dashboard metrics and invoice activity',
        'Filtered PDF billing reports'
      ]
    },
    problem: {
      title: 'Billing becomes difficult when information is fragmented.',
      body:
        'The system needed to handle both individual invoices and the larger picture: how many bills exist, what they are worth, how tax is calculated, which records are paid or pending, and how a selected set of records becomes a usable report.',
      points: [
        'Keep invoice data structured enough for calculations and reporting.',
        'Make the daily billing register searchable and operationally useful.',
        'Keep tax and grand-total calculations consistent between invoice and report views.',
        'Allow the visible, filtered billing set to become a report instead of exporting unrelated records.'
      ]
    },
    approach: {
      title: 'Design the workflow around the data.',
      body:
        'CanvasBILL was treated as an operational product rather than a collection of forms. The interface, calculations and reporting behavior were designed around the same underlying invoice records.',
      steps: [
        'Model the invoice and client information the workflow depends on',
        'Create a dashboard that summarizes billing activity',
        'Structure invoice creation around reusable calculations',
        'Make the billing register searchable and filterable',
        'Generate reports from the relevant invoice set',
        'Support historical invoice records without renumbering them'
      ]
    },
    flow: {
      title: 'From invoice data to business report.',
      body:
        'The core product loop connects a single invoice to the larger reporting system. The same data can be viewed individually, summarized on the dashboard and turned into a filtered PDF report.',
      steps: [
        { number: '01', label: 'INPUT', detail: 'Capture client, invoice, item and date information.' },
        { number: '02', label: 'CALCULATE', detail: 'Derive subtotal, freight, assessable value and applicable GST values.' },
        { number: '03', label: 'TRACK', detail: 'Store invoice status and surface billing activity.' },
        { number: '04', label: 'FILTER', detail: 'Search and narrow the billing records that matter.' },
        { number: '05', label: 'REPORT', detail: 'Generate a PDF using the selected records and totals.' },
        { number: '06', label: 'REVIEW', detail: 'Use the resulting report as a structured business record.' }
      ]
    },
    decisions: [
      {
        number: '01',
        title: 'One calculation model across views.',
        body: 'Invoice totals are derived from item amounts, subtotal and freight, with GST values calculated from the client GST information. Reusing the same calculation logic keeps dashboard and report numbers aligned.'
      },
      {
        number: '02',
        title: 'The report follows the current data set.',
        body: 'The report generator can use the records currently displayed in the billing table, preserving search, filters and sorting instead of exporting an unrelated full data set.'
      },
      {
        number: '03',
        title: 'Historical records remain historical.',
        body: 'Historical invoice imports preserve existing invoice numbers and skip records that already exist, allowing older billing data to enter the system without silently renumbering current records.'
      }
    ],
    system: {
      title: 'A small system with several connected layers.',
      body:
        'The product connects a persistent data layer, calculation logic, dashboard presentation and document generation. That connection is what turns the interface into a usable business tool.',
      layers: [
        { label: 'DATA', detail: 'Invoices, clients, items, dates, GST information and status records.' },
        { label: 'LOGIC', detail: 'Invoice item amounts, assessable value, CGST, SGST and grand-total calculations.' },
        { label: 'WORKSPACE', detail: 'Dashboard metrics, invoice activity and billing records.' },
        { label: 'REPORTING', detail: 'Filtered invoice selection and generated PDF billing reports.' }
      ]
    },
    outcome: {
      title: 'Billing data became a usable operating layer.',
      body:
        'The implemented product connects invoice creation and management with dashboard visibility and report generation. A supplied CanvasBILL report demonstrates 70 invoices with invoice number, date, client, GST number, assessed value, CGST, SGST, grand total and status fields, followed by a report summary.',
      facts: [
        'Invoice records with client and GST data',
        'Calculated CGST / SGST and grand totals',
        'Paid / pending status tracking',
        'Dashboard billing metrics',
        'Search / filter / sort-aware reporting',
        'PDF invoice billing reports'
      ]
    }
  },
  gajsai: {
    slug: 'gajsai',
    heroLabel: '03 / BRAND SYSTEM / IDENTITY + DIGITAL PRESENCE',
    heroTitle: 'GAJSAI.',
    heroDescription:
      'A visual identity and digital presence for Gajsai Ventures, designed to bring the brand together across its website, print materials and physical signage.',
    snapshot: [
      { label: 'Role', value: 'Brand identity' },
      { label: 'Scope', value: 'Identity + website' },
      { label: 'Print', value: 'Visiting cards' },
      { label: 'Space', value: 'Exterior signage' },
      { label: 'System', value: 'Brand collateral' },
      { label: 'Focus', value: 'Consistency' }
    ],
    product: {
      title: 'A recognizable identity across touchpoints.',
      body:
        'The project established a visual language for Gajsai Ventures and applied it across the company’s digital and physical presence. The documented scope includes a logo, brand identity, corporate website, visiting cards, exterior signage and supporting collateral.',
      bullets: [
        'Logo and core visual identity',
        'Corporate website',
        'Visiting cards',
        'Exterior signage',
        'Brand collateral',
        'Consistent use across business touchpoints'
      ]
    },
    problem: {
      title: 'One business, many first impressions.',
      body:
        'A company is experienced in more places than its logo. The identity needed to read clearly online, in print and in the physical environment, while keeping each application recognizably part of the same brand.',
      points: [
        'Create a clear identity that works at different sizes and distances.',
        'Carry the same visual cues from the website to printed materials.',
        'Make signage legible and aligned with the wider brand.',
        'Keep new collateral consistent as the business grows.'
      ]
    },
    approach: {
      title: 'Build the identity as a usable system.',
      body:
        'The work connected the foundational identity to its real applications, considering how the brand would be seen on screen, in hand and in a physical setting.',
      steps: [
        'Understand the business and the contexts where the brand appears',
        'Define the logo and visual direction',
        'Establish a repeatable identity system',
        'Apply the system to the corporate website',
        'Adapt the identity for cards and signage',
        'Prepare supporting brand collateral'
      ]
    },
    flow: {
      title: 'From identity to everyday use.',
      body:
        'The identity was carried through a set of practical applications so the brand could stay coherent wherever a customer encountered it.',
      steps: [
        { number: '01', label: 'DISCOVER', detail: 'Understand the business and its existing touchpoints.' },
        { number: '02', label: 'DEFINE', detail: 'Set the core logo and visual direction.' },
        { number: '03', label: 'SYSTEMIZE', detail: 'Create visual rules that can be applied consistently.' },
        { number: '04', label: 'DIGITAL', detail: 'Bring the identity into the corporate website.' },
        { number: '05', label: 'PHYSICAL', detail: 'Apply it to cards and exterior signage.' },
        { number: '06', label: 'EXTEND', detail: 'Carry the system into supporting collateral.' }
      ]
    },
    decisions: [
      {
        number: '01',
        title: 'Design for more than a screen.',
        body: 'The identity needed to hold up across both digital and physical formats, so legibility and consistency mattered as much as the initial visual impression.'
      },
      {
        number: '02',
        title: 'Keep the applications connected.',
        body: 'The website, visiting cards, signage and collateral were treated as parts of one brand experience rather than unrelated design tasks.'
      },
      {
        number: '03',
        title: 'Make the system practical to extend.',
        body: 'A repeatable visual direction gives future communications a consistent starting point and helps the brand remain recognizable.'
      }
    ],
    system: {
      title: 'A brand system across digital and physical settings.',
      body:
        'The project connected a core visual identity to the materials people encounter in everyday business interactions.',
      layers: [
        { label: 'IDENTITY', detail: 'Logo and visual direction for Gajsai Ventures.' },
        { label: 'DIGITAL', detail: 'Corporate website and online brand presence.' },
        { label: 'PRINT', detail: 'Visiting cards and supporting brand collateral.' },
        { label: 'ENVIRONMENT', detail: 'Exterior signage aligned with the identity.' }
      ]
    },
    outcome: {
      title: 'A coherent identity, ready to be used.',
      body:
        'The documented project scope brought the logo and visual identity into the website, visiting cards, exterior signage and brand collateral. No measured business-performance results were supplied for this project.',
      facts: [
        'Logo design',
        'Brand identity',
        'Corporate website',
        'Visiting cards',
        'Exterior signage',
        'Brand collateral'
      ]
    }
  }
};
