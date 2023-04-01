import React, { useState } from "react";
import "@fontsource/poppins";
import PropTypes from 'prop-types';
import "../RoundNote.css"; 

const Button = ({onClick }) => {


    const [status, setStatus] = useState("default"); // set initial state to ""
  
    const handleClick = () => {
      if (status === "default") {
        setStatus("isSelected");
      } else if (status === "isSelected") {
        setStatus("default");
      }
      onClick ();
    };

  return (
     <div className={`Button ${status}`} onClick={handleClick}>
      <p>Submit</p>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
