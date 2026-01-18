import { createClient } from '@supabase/supabase-js';

// ✅ Compatibilité avec l'ancien code
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mzeisxseqdcxwgyjpajm.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWlzeHNlcWRjeHdneWpwYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDkwOTAsImV4cCI6MjA3NTc4NTA5MH0._c59QJ0SlDBVZXCeNFrzDB-Y1rrEUjGYmv4p0xheJXM';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
