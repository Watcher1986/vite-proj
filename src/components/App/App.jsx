import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/auth';
import useActions from '../../hooks/useActions';
import Loader from '../Loader';
import Container from '../Container';
import Layout from '../Layout';
import AuthPage from '../../pages/AuthPage';
import PrivateRoute from '../PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';

// lazy-loading bundles:
const HomePage = lazy(() => import('../../pages/HomePage'));
const ClientAreaPage = lazy(() => import('../../pages/ClientAreaPage'));
const SettingsPage = lazy(() => import('../../pages/SettingsPage'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));
const MaintenancePage = lazy(() => import('../../pages/MaintenancePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export default function App() {
  const { fetchCurrentUser } = useActions();
  const isFetchingUser = useSelector(authSelectors.getFetchingUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (isLoggedIn) {
        return;
      } else {
        fetchCurrentUser();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      {isFetchingUser && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute redirectPath="/auth">
                <Layout />
              </PrivateRoute>
            }
          >
            <Route
              path="home"
              element={
                <PrivateRoute redirectPath="/home">
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="client-area"
              element={
                <PrivateRoute redirectPath="/client-area">
                  <ClientAreaPage />
                </PrivateRoute>
              }
            />
            <Route
              path="settings"
              element={
                <PrivateRoute redirectPath="/settings">
                  <SettingsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="news"
              element={
                <PrivateRoute redirectPath="/news">
                  <NewsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="maintenance"
              element={
                <PrivateRoute redirectPath="/maintenance">
                  <MaintenancePage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer draggable pauseOnHover />
    </Container>
  );
}
