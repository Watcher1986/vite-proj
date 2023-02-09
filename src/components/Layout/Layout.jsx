import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Layout.scss';

export default function Layout() {
  return (
    <>
      <div className="layoutWrapper">
        <Sidebar />
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
