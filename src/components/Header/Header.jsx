import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/auth';
import useActions from '../../hooks/useActions';
import logo from './logo.png';
import './Header.scss';

export default function Header() {
  const isPasswordForgotten = useSelector(authSelectors.getIsPasswordForgotten);
  const { switchRestoreFlag } = useActions();

  const handleLoginClick = () => {
    switchRestoreFlag(!isPasswordForgotten);
  };

  return (
    <header className="pageHeader">
      <img src={logo} alt="logotype" className="headerLogo" />
      <button
        type="button"
        className="headerLoginBtn"
        onClick={handleLoginClick}
        disabled={!isPasswordForgotten}
      >
        LOGIN
      </button>
    </header>
  );
}
