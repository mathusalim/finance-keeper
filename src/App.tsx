import { useEffect, useState } from 'react';
import './App.css';
import { useUsersDb } from './data/supabase/useUsers';
import { useUserContext } from './data/context/useUserContext';
import { useSignals } from '@preact/signals-react/runtime';
import { useNavigate } from 'react-router';
import { effect } from '@preact/signals-react';

export default () => {
  useSignals();
  const [instruments, setInstruments] = useState([]);
  const { selectAll } = useUsersDb();
  const user = useUserContext();

  const navigate = useNavigate();

  effect(() => {
    !user.value.userId && navigate('/register');
  });

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await selectAll();
    setInstruments(data);
  }

  return (
    <>
      {user.value.userId && <h1>{user.value.userId}</h1>}
      <ul>
        {instruments.map((instrument) => (
          <li key={instrument.id}>{instrument.email}</li>
        ))}
      </ul>
    </>
  );
};
