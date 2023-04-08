import React, { useState } from "react";
import PopUpFrame from "./Components/PopUpFrame.jsx";
import "./PopUp.css";

const PopUp = ({children, title, titleClass, inCardTitle, disabled=false}) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  
 

  const handlePopUpClose = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div>
      <div className={titleClass} onClick={() => setIsPopUpOpen(true)}>{title}</div>
      {!disabled && isPopUpOpen && (
        <PopUpFrame inCardTitle={inCardTitle}onClose={handlePopUpClose}>
          {children}
        </PopUpFrame>
      )}
    </div>
  );
};

export default PopUp;
