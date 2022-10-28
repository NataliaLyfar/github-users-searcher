import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from 'layout';

const HomePage = lazy(() => import('pages'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:login" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
