import { useUserContext } from '@/data/context/useUserContext';
import {  effect } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { Outlet, useNavigate } from 'react-router';

export const AuthLayout = () => {
  useSignals();
  const navigate = useNavigate();
  const user = useUserContext();

  effect(() => {
    user.value.userId && navigate('/');
  });
  return (
    <>
      <div className="flex flex-col items-center w-full gap-12 p-8">
        <p>Authentication</p>
        <Outlet />
      </div>
    </>
  );
};
