import { createClient } from "@supabase/supabase-js";
import info from "@/constants/info";

if (!info.SUPABASE_URL || !info.SUPABASE_ANON_KEY) {
  console.error("Missing Supabase URL or Anon Key", info);
  throw new Error("Supabase URL and Anon Key are required.");
}

const supabase = createClient(info.SUPABASE_URL, info.SUPABASE_ANON_KEY);

export default supabase;
