import type { User } from '@supabase/supabase-js';
import type { AuthPageName } from './auth/Auth.svelte';

export interface ApplicationState {
  authPageName: AuthPageName;
  user: User | null;
  isPasswordReset: boolean;
  ready: boolean;
}
