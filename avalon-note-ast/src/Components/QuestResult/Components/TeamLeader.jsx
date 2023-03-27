import React, { useState } from 'react';

const TeamLeader = () => {
  const [status, setStatus] = useState('teamdefault');

  const handleClick = () => {
    if (status === 'teamdefault') {
      setStatus('teamgood');
    } else if (status === 'teamgood') {
      setStatus('teamevil');
    } else {
      setStatus('teamdefault');
    }
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '62px',
    height: '62px',
    left: '0px',
    top: '7.5px',
    borderRadius: '34px',
    background: status === 'teamdefault' ? '#252C34' : (status === 'teamgood' ? '#5078E7' : '#ED2828'),
  };

  const numberStyles = {
    
    width: 'wrap',
    height: '28px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '23px',
    lineHeight: '28px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  };

  return (
    <div style={styles} onClick={handleClick}>
      <span style={numberStyles}>1</span>
    </div>
  );
};

export default TeamLeader;
