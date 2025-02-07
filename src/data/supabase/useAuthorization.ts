import { AuthUserModel } from '../models/user-model';
import { useDatabase } from './useDatabase';

export const useAuthorization = () => {
  const { supabase } = useDatabase();
  const signup = async ({ email, password }: AuthUserModel) =>
    await supabase.auth.signUp({
      email,
      password,
    });
  const login = async ({ email, password }: AuthUserModel) =>
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  const logout = async () => await supabase.auth.signOut();
  return { signup, login, logout };
};

export const useAuthChange = (setUserId: (userId: string | null) => void) => {
  const { supabase } = useDatabase();
  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      setUserId(session.user.id);
    } else {
      setUserId(null);
    }
  });
};
