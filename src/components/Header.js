import React from 'react';
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Логотип." />
    </header>
  );
}

export default Header;