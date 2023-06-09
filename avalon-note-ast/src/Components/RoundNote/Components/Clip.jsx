// import React, { useState } from 'react';

// function Clip(props) {
//   const { name } = props;

//   const [selected, setSelected] = useState(false);

//   const handleClick = () => {
//     setSelected(!selected);
//   };

//   const clipStyle = {
//     boxSizing: 'border-box',

//     /* Auto layout */
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '14px 20px',
//     width: 'wrap',
//     height: '49px',
//     background: selected ? '#C5D2F7' : '#FFFFFF', /* Primary/50 or Primary/500 */
//     border: '1px solid #1D4ED8',
//     borderRadius: '37px',
   

//     /* Inside auto layout */
//     flex: 'none',
//     order: selected ? 1 : 0,
//     flexGrow: 0,
//   };

//   const textStyle = {
//     /* P1 */
    
//     fontStyle: 'normal',
//     fontWeight: 600,
//     fontSize: '18px',
//     lineHeight: '21px',
//     /* identical to box height, or 117% */
//     color: '#1D4ED8', /* Primary/500 */

//     /* Inside auto layout */
//     flex: 'none',
//     order: 0,
//     flexGrow: 0,
//     width: 'wrap',
//     height: '21px',
//     paddingRight: '20px',
//     paddingLeft: '20px',

//   };

//   return (
//     <div style={clipStyle} onClick={handleClick}>
//       <span style={textStyle}>{name}</span>
//     </div>
//   );
// }

// export default Clip;

import React, { useState } from "react";
import "@fontsource/poppins";
import PropTypes from 'prop-types';
import "../RoundNote.css"; 

const Clip = ({ name, isSelected, onClick }) => {


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
     <div className={`clip ${status}`} onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
};

Clip.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Clip;
