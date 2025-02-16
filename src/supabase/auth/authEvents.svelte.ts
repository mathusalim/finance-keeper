import { useSupabase } from '../client.svelte';
import type { Session } from '@supabase/supabase-js';

let authState = $state<null | Session>(null);

let recoveryState = $state<null | Session>(null);

export const useAuthEvents = () => {
  const { client } = useSupabase();
  client().auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      console.log('PASSWORD_RECOVERY', session);
      recoveryState = session;
      authState = null;
    } else if (event === 'SIGNED_IN') {
      authState = recoveryState ? null : session;
    } else if (event === 'SIGNED_OUT') {
      authState = null;
      recoveryState = null;
    } else if (event === 'USER_UPDATED') {
      recoveryState = null;
      authState = session;
    }
  });

  return {
    session: () => authState,
    recovery: () => recoveryState,
  };
};
