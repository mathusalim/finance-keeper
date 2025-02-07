import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './supabase';
import { signal } from '@preact/signals-react';

const supabase = signal<SupabaseClient<Database>>(
  createClient<Database>(
    'https://thutlpgjyqgudkrqiatf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodXRscGdqeXFndWRrcnFpYXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDIyNjMsImV4cCI6MjA1NDQxODI2M30.01mZ9wOvusNiMegDAeFCEX8aHWwmkeYxMQePUyB3DAU'
  )
);

export const useDatabase = () => {
  return { supabase: supabase.value };
};
