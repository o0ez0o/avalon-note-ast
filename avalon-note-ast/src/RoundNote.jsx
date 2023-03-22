import React, { useState } from 'react';
import ClipBar from './ClipBar';
import "@fontsource/poppins";

const RoundNote = ({onSubmit}) => {
  const [selected, setSelected] = useState([]);
  const [agreed, setAgreed] = useState([]);
  const [questStatus, setQuestStatus] = useState([]);
  const handleButtonClick = () => {
    onSubmit ({selectedPlayerID: selected, agreedPlayerID: agreed, questResult: questStatus})
  }

  const handleSelect = (clipName) => {
    setSelected((prevState) => {
      const index = prevState.indexOf(clipName);
      if (index === -1) {
        return [...prevState, clipName];
      } else {
        const newState = [...prevState];
        newState.splice(index, 1);
        return newState;
      }
    });
  };

  const handleAgree = (clipName) => {
    setAgreed((prevState) => {
      const index = prevState.indexOf(clipName);
      if (index === -1) {
        return [...prevState, clipName];
      } else {
        const newState = [...prevState];
        newState.splice(index, 1);
        return newState;
      }
    });
  };

  const handleQuestStatus = (clipName) => {
    setQuestStatus((prevState) => {
      const index = prevState.indexOf(clipName);
      if (index === -1) {
        return [clipName];
      } else {
        const newState = [];
        // newState.splice(index, 1);
        return newState;
      }
    });
  };

  const buttonTextStyle = {
      width: 'wrap',
      height: '21px',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '21px',
      color: '#FFFFFF',
      flex: 'none',
      order: '0',
      flexGrow: '0',
      paddingRight: '20px',
      paddingLeft: '20px',
    };

  return (
    <div>
      <div style={{
        width: "wrap",
        height: "28px",
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "23px",
        lineHeight: "19px",
        color: "#252C34",
        marginBottom: "16px"
      }}>
        Round Notes
      </div>
      <ClipBar
        clipbarName="Selected"
        clipNames={['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10']}
        selected={selected}
        handleClipClick={handleSelect}
        style={{ 
          display: 'block'
          }}
      />
      <ClipBar
        clipbarName="Agreed"
        clipNames={['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10']}
        selected={agreed}
        handleClipClick={handleAgree}
        style={{ display: 'block' }}
      />
      {agreed.length >= 5 && (
        <ClipBar
          clipbarName="Quest Status"
          clipNames={['FAILED', 'SUCCEED', 'FAILED x2', 'FAILED x3', 'FAILED x4']}
          selected={questStatus}
          handleClipClick={handleQuestStatus}
          style={{ display: 'block' }}
        />
      )}
        <div style = {{
            alignItems: "center",
            display: "flex",
            justifyContent: "center"
        }}> 
          <button
            onClick={handleButtonClick}
            style={{
              marginTop: "16px",
              fontFamily: 'Poppins',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              align: 'center',
              padding: '14px 20px',
              gap: '8px',
              width: '240px',
              height: '64px',
              background: '#252C34',
              borderRadius: '30px',
              flex: 'none',
              order: 4,
              flexGrow: 0,
              disable: "ture"
            }}
          > 
        <p style = {buttonTextStyle}> Submit </p>
      </button>
      </div>
    </div>
    
  );
};

export default RoundNote;
