import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewsPage.scss';

export default function NewsPage() {
  return (
    <div className="newsWrapper">
      <h1>Under construction. News page will be there!</h1>
      <NavLink to={'/home'}>Go to home page</NavLink>
    </div>
  );
}
