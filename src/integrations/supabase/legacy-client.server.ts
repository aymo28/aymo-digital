import { supabaseAdmin as typedSupabaseAdmin } from "@/integrations/supabase/client.server";

/** Compatibility bridge for server-only modules querying older tables not in generated types. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabaseAdmin: any = typedSupabaseAdmin;
