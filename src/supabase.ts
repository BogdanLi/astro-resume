import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.SECRET_API_URL;
const key = import.meta.env.SECRET_ANON_KEY;

const supabaseClient = createClient(url, key);

export default supabaseClient;
