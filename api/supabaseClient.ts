import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://upphsnzcvkocxjycdaxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcGhzbnpjdmtvY3hqeWNkYXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMTU0NDYsImV4cCI6MjAwMzY5MTQ0Nn0.rr8fbIjP0-oDuhZya3ecRq_OaBcE1Qx-9fkiSJEU1b8';

export const supabase = createClient(supabaseUrl, supabaseKey)