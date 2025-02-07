import { useDatabase } from './useDatabase';

export const useUsersDb = () => {
  const { supabase } = useDatabase();
  const selectAll = async () =>
    await supabase.from('Users').select(`*, Sessions(*)`);
  return { selectAll };
};
