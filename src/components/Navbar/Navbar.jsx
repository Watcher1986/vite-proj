import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';
import { authSelectors } from '../../store/auth';
import isObjectEmpty from '../../helpers/isObjectEmpty';
import ParamsIcon from '../../assets/img/settings.svg';
import UserPic from '../../assets/img/user.png';
import LogoutIcon from '../../assets/img/logout.svg';
import LoupeIcon from '../../assets/img/loupe.svg';
import './Navbar.scss';

export default function Navbar() {
  const navigate = useNavigate();
  const user = useSelector(authSelectors.getUser);
  const { logOut } = useActions();
  const onSettingsClickHandler = () => {
    navigate('/settings');
  };
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="navBar">
      <div className="inputWrapper">
        <img src={LoupeIcon} alt="search" />
        <input type="text" name="search" placeholder="Find information" className="navBar__input" />
      </div>
      <div className="navBar__paramsWrapper">
        <button type="button" onClick={onSettingsClickHandler}>
          <img src={ParamsIcon} alt="settings" />
        </button>
        <img src={UserPic} alt="userpic" />
        <div>
          <p>{!isObjectEmpty(user) ? user.login : 'infingame_user'}</p>
          <p>Access Level</p>
        </div>
        <button type="button" onClick={handleLogout}>
          Logout
          <img src={LogoutIcon} alt="logout" />
        </button>
      </div>
    </div>
  );
}
