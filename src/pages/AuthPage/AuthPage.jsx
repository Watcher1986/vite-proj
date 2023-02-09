import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from '../../store/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import CredsRecovery from '../../components/CredsRecovery';
import './AuthPage.scss';

export default function AuthPage() {
  const navigate = useNavigate();
  const isPasswordForgotten = useSelector(authSelectors.getIsPasswordForgotten);
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    if (!isUserLoggedIn) {
      return;
    } else {
      navigate('/home');
    }
  }, [isUserLoggedIn]);
  return (
    <div className="authContainer">
      <Header />
      {isPasswordForgotten ? <CredsRecovery /> : <LoginForm />}
      <Footer />
    </div>
  );
}
