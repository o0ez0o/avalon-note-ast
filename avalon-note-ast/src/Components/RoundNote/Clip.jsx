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


import React from 'react';
import "@fontsource/poppins";

const Clip = ({ name, isSelected, onClick }) => {
  const clipStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px 20px',
    width: 'auto',
    minWidth: '80px',
    height: '49px',
    background: isSelected ? '#EDEFF3' : '#FFFFFF',
    outline: isSelected ? '5px solid #252C34' : '1px solid #252C34',
    borderRadius: '37px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    cursor: 'pointer',
  };

  const textStyle = {
    fontFamily: 'Poppins',
    width: 'wrap',
    height: '21px',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#252C34',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    paddingRight: '20px',
    paddingLeft: '20px',
  };

  return (
    <div style={clipStyle} onClick={onClick}>
      <p style={textStyle}>{name}</p>
    </div>
  );
};

export default Clip;
