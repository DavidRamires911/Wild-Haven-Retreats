
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jgcngksgqnbtxtbbrgra.supabase.co'
///this supabaseKey is public , but we actviated the Row Level Security to prevent unauthorized access to the data
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnY25na3NncW5idHh0YmJyZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODgxMjQsImV4cCI6MjAyMzA2NDEyNH0.4VJ9FxzKn_OHaA_8MewK1gea_TZ-thDBYJDtli9M-qI"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase