-- Run this once in the Supabase SQL Editor for the PageFix project.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null default '',
  service text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx
  on public.enquiries (created_at desc);

-- The website writes through its server endpoint with the service role key.
-- Keep Row Level Security enabled and do not add a public insert policy.
alter table public.enquiries enable row level security;
