import React from 'react';
import LogoS from './LogoS.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={LogoS} alt="LogoS" className="header-logo" />
        <div className="header-text">Avalon Note Ast.</div>
      </div>
      <div className="header-right">
        <div className="header-link">Export Game</div>
        <div className="header-link">About</div>
        <div className="header-link" style={{color: '#F26969'}}>! Restart</div>
      </div>
    </div>
  );
};

export default Header;
