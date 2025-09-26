import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Informations de ton projet Supabase
const SUPABASE_URL = 'https://hvlqupaphrfrgcajbkyn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bHF1cGFwaHJmcmdjYWpia3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4Nzg0MDIsImV4cCI6MjA3NDQ1NDQwMn0.twsCnIPppre-qf74vOieNEuXd0F-BLDfuMTfzQwmTmA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
});
