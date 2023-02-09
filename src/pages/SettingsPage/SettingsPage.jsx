import React from 'react';
import { NavLink } from 'react-router-dom';
import './SettingsPage.scss';

export default function SettingsPage() {
  return (
    <div className="settingsWrapper">
      <h1>Under construction! The settings page will be there</h1>
      <NavLink to={'/home'}>Go to home page</NavLink>
    </div>
  );
}
