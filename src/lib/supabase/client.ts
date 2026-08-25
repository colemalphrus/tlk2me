import { createBrowserClient } from "@supabase/ssr";
import { env } from "../env";

/** Browser-side client. Anon key only — every read goes through RLS. */
export function createClient() {
  return createBrowserClient(env.supabaseUrl, env.supabaseAnonKey);
}
