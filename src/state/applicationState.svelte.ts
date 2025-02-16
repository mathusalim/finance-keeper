import type { User } from '@supabase/supabase-js';
import { useSupabase } from '../supabase/client.svelte';
import type { ApplicationState } from './ApplicationState';
import { type AuthPageName } from './auth/Auth.svelte';

// Single instance of the state
let applicationStateInstance = $state<ApplicationState>({
  authPageName: 'Login',
  user: null,
  isPasswordReset: false,
  ready: false,
});

const subscribeToAuthEvents = (
  setIsPasswordReset: (newIsPasswordReset: boolean) => void,
  setUser: (newUser: User | null) => void,
  setAuthPageName: (newAuthPageName: AuthPageName) => void
) => {
  const { client } = useSupabase();

  client().auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      debugger;
      setIsPasswordReset(true);
    } else if (event === 'SIGNED_IN') {
      console.log(session);
      setUser(session?.user || null);
    } else if (event === 'SIGNED_OUT') {
      setUser(null);
      setAuthPageName('Login');
    } else if (event === 'USER_UPDATED') {
      setUser(session?.user || null);
    }
  });
};

export const useApplicationState = () => {
  const setAuthPageName = (newPageName: AuthPageName) => {
    applicationStateInstance.authPageName = newPageName;
  };

  const setIsPasswordReset = (newIsPasswordReset: boolean) => {
    applicationStateInstance.isPasswordReset = newIsPasswordReset;
    applicationStateInstance.authPageName = 'updatePassword';
  };

  const setUser = (newUser: typeof applicationStateInstance.user) => {
    applicationStateInstance.user = newUser;
  };

  if (!applicationStateInstance.ready) {
    subscribeToAuthEvents(setIsPasswordReset, setUser, setAuthPageName);
    applicationStateInstance.ready = true;
  }

  return {
    get state() {
      return applicationStateInstance;
    },
    setAuthPageName,
    setIsPasswordReset,
    setUser,
  };
};
