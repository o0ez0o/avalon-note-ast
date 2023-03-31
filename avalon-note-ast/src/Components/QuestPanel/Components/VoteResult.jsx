import React from 'react';
import VotedPlayers from './VotedPlayers.jsx';
import "../QuestPanel.css";


const VoteResult = () => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    position: 'relative',
    height: '34px',
    margin: '0 auto',
    marginBottom: '16px',
    marginLeft: '86px',
    gap: '24px',
  };

  return (
    <div style={containerStyles}>
      <p className={`votedPlayers`}>YES: </p> 
      <VotedPlayers />
      <VotedPlayers />
      <VotedPlayers />
      <VotedPlayers />
      <VotedPlayers />
      <VotedPlayers />
    </div>
  );
};

export default VoteResult;
