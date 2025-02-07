import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import { AuthLayout } from './pages/Auth/AuthLayout.tsx';
import { Login } from './pages/Auth/Login.tsx';
import { Register } from './pages/Auth/Register.tsx';
import { initUserObservingFromSupabase } from './data/context/useUserContext.tsx';

initUserObservingFromSupabase();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
