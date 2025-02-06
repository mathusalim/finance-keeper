import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { createClient } from '@supabase/supabase-js';
import './App.css';

const supabase = createClient(
  'https://thutlpgjyqgudkrqiatf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodXRscGdqeXFndWRrcnFpYXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDIyNjMsImV4cCI6MjA1NDQxODI2M30.01mZ9wOvusNiMegDAeFCEX8aHWwmkeYxMQePUyB3DAU'
);

export default () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from('Users').select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.id}>{instrument.email}</li>
      ))}
    </ul>
  );
};
