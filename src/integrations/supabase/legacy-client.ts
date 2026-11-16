import { supabase as typedSupabase } from "@/integrations/supabase/client";

/**
 * Compatibility client for older portal/admin areas that reference database tables
 * absent from the current generated schema. Keep new features on the typed client.
 */
type LegacyClient = Omit<typeof typedSupabase, "from"> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  from: (relation: string) => any;
};

export const supabase = typedSupabase as LegacyClient;