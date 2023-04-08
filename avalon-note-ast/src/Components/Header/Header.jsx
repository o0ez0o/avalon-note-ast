import React from 'react';
import LogoS from './LogoS.svg';
import './Header.css';
import PopUp from '../PopUp/PopUp';

const Header = () => {
  const RestartContent = () => {
    return (
      <div class="confirmation-dialog">
        <p>You will quit the current game and <br/><span class="not-saved">this game will not be saved</span>.</p>
        <p class="confirm-question">Are you sure about to restart?</p>
        <button class="button-1st" onClick={()=>{window.location.href = "/";}}>Restart</button>
      </div>  
    )
  };
  const AboutContent = () => {
    
        
  };
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={LogoS} alt="LogoS" className="header-logo" />
        <div className="header-text">Avalon Note Ast.</div>
      </div>
      <div className="header-right">
        <div className="header-link">Export Game</div>
        <PopUp title='About' titleClass={"header-link"} inCardTitle={"About"}>
          {AboutContent()}
        </PopUp>
        <PopUp title='! Restart' titleClass={"header-link red"} inCardTitle={"Restart Game"}>
          {RestartContent()}
        </PopUp>
      </div>
    </div>
  );
};

export default Header;
