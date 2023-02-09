import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="unknownPageWrapper">
      <h1>Oops... The page is not found!</h1>
      <NavLink to={'/home'} className="goHomeLink">
        Go to main page
      </NavLink>
    </div>
  );
}
