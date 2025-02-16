import { createClient, SupabaseClient } from '@supabase/supabase-js';

const newClient = (): SupabaseClient => {
  const supabaseUrl = 'https://thutlpgjyqgudkrqiatf.supabase.co';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodXRscGdqeXFndWRrcnFpYXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDIyNjMsImV4cCI6MjA1NDQxODI2M30.01mZ9wOvusNiMegDAeFCEX8aHWwmkeYxMQePUyB3DAU';
  return createClient(supabaseUrl, supabaseKey);
};

let supaBaseClient = $state<SupabaseClient>(newClient());

export const useSupabase = () => {
  if (!supaBaseClient) {
    supaBaseClient = newClient();
  }

  return {
    client: () => supaBaseClient,
  };
};
