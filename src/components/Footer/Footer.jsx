import React from 'react';
import logo from '../Header/logo.png';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <footer className="pageFooter">
        <img src={logo} alt="logotype" className="footerLogo" />
        <p className="footerText">
          Infingame: Copyright © 2011-2021. All rights reserved. Infingame Privacy policy & Terms of
          service
        </p>
      </footer>
    </>
  );
}
