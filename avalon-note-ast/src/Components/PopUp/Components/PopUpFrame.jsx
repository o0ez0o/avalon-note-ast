import React from "react";
import "../PopUp.css";
import close from '../close.svg';

const PopUpFrame = ({ inCardTitle, onClose, children }) => {
    return (
      <div className="overlay">
        <div className="PopUpFrame">
          <h1>{inCardTitle}</h1>
          <img src={close} alt="close" onClick={onClose} className='PopUpFrame-close'/>
          {children}
        </div>
      </div>
    );
  };

export default PopUpFrame;
