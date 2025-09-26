// config.js
import { createClient } from "@supabase/supabase-js";

// Ton URL et ta clé publique Supabase
const SUPABASE_URL = "https://hvlqupaphrfrgcajbkyn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bHF1cGFwaHJmcmdjYWpia3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4Nzg0MDIsImV4cCI6MjA3NDQ1NDQwMn0.twsCnIPppre-qf74vOieNEuXd0F-BLDfuMTfzQwmTmA";

// Initialisation du client Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true, // garde la session active
    persistSession: true,   // stocke la session dans localStorage
  },
});
