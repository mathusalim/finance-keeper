import { signal } from '@preact/signals-react';
import { useAuthChange } from '../supabase/useAuthorization';

const user = signal<{ userId: string | null }>({ userId: null });

export const useUserContext = () => {
  return user;
};

export const initUserObservingFromSupabase = () => {
  useAuthChange((uId) => (user.value = { ...user.value, userId: uId }));
};
