
import {createClient} from '@supabase/supabase-js'
// import {createClient} from '@supabase/supabase-js';
const supabaseUrl = 'https://oiqgujxdnfpzcpxpfstd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcWd1anhkbmZwemNweHBmc3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2MDkwMDQsImV4cCI6MjAyNjE4NTAwNH0.ajU77BlV4lNv0DPMZvcxe14mpRJIwKQk_JE4XK0Lb8w';

export const supabase = createClient(supabaseUrl, supabaseKey);

