DROP POLICY IF EXISTS "public can submit" ON public.quote_requests;
CREATE POLICY "public can submit" ON public.quote_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 1 AND 200
    AND email ~* '^[A-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$'
    AND status = 'new'
    AND is_read = false
  );

DROP POLICY IF EXISTS "public can submit" ON public.leads;
CREATE POLICY "public can submit" ON public.leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 1 AND 200
    AND email ~* '^[A-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$'
    AND stage = 'new'
    AND priority = 'medium'
  );

DROP POLICY IF EXISTS "public can submit" ON public.newsletter_subscribers;
CREATE POLICY "public can submit" ON public.newsletter_subscribers
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    email ~* '^[A-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$'
    AND status = 'active'
  );

DROP POLICY IF EXISTS "public can submit" ON public.site_audits;
CREATE POLICY "public can submit" ON public.site_audits
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(url)) BETWEEN 1 AND 2048
    AND url !~ '[[:space:]]'
    AND status IN ('completed', 'pending')
  );

DROP POLICY IF EXISTS "public can submit" ON public.contact_messages;
CREATE POLICY "public can submit" ON public.contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 1 AND 200
    AND email ~* '^[A-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$'
    AND length(btrim(message)) BETWEEN 1 AND 10000
    AND is_read = false
  );