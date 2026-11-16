import { supabase as typedSupabase } from "@/integrations/supabase/client";

/**
 * Compatibility client for older portal/admin areas that reference database tables
 * absent from the current generated schema. Keep new features on the typed client.
 */
type LegacyClient = Omit<typeof typedSupabase, "from" | "rpc"> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  from: (relation: string) => any;
  // Legacy portal RPCs are not part of the current generated schema.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rpc: (fn: string, args?: Record<string, unknown>) => Promise<any>;
};

export const supabase = typedSupabase as unknown as LegacyClient;