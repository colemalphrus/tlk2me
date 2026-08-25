import "server-only";
import { createClient } from "@supabase/supabase-js";
import { env } from "../env";

/**
 * Service-role client. Bypasses RLS entirely, so it must never be reachable
 * from the browser — the "server-only" import above makes that a build error.
 *
 * Reserved for work with no user session behind it: the telephony webhook
 * booking a trip mid-call, and Stripe invoicing at month end.
 */
export function createAdminClient() {
  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
