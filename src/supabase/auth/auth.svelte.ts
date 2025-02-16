import { useSupabase } from '../client.svelte';

export const useAuth = () => {
  const { client } = useSupabase();
  const logout = async () => {
    await client().auth.signOut();
  };

  const signUp = async (email: string, password: string) => {
    return await client().auth.signUp({ email, password });
  };

  const login = async (email: string, password: string) => {
    return await client().auth.signInWithPassword({ email, password });
  };

  const updatePassword = async (password: string) => {
    return await client().auth.updateUser({ password });
  };

  const requestPasswordReset = async (email: string) => {
    const result = await client().auth.resetPasswordForEmail(email);
    return result;
  };
  return { logout, login, requestPasswordReset, updatePassword, signUp };
};
