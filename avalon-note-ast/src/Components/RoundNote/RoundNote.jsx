import React, { useState } from 'react';
import ClipBar from './Components/ClipBar';
import "@fontsource/poppins";
import "./RoundNote.css";

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
      color: '#252C34',
      flex: 'none',
      order: '0',
      flexGrow: '0',
      paddingRight: '20px',
      paddingLeft: '20px',
    };

    return (
      <div className='roundNotePanel'>
        <div className="roundNoteTitle">
          Round Notes
        </div>
        <ClipBar
          clipbarName="Selected Players"
          clipNames={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          selected={selected}
          handleClipClick={handleSelect}
          className="clipbarContainer"
        />
        <ClipBar
          clipbarName="Agreed Players"
          clipNames={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        selected={agreed}
        handleClipClick={handleAgree}
        style={{ display: 'block' }}
        />
        {agreed.length >= 5 && (
        <ClipBar
          clipbarName="Quest Status"
          clipNames={['FAIL', 'SUCC', 'Fx2', 'Fx3', 'Fx4']}
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
              background: '#ffffff',
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
