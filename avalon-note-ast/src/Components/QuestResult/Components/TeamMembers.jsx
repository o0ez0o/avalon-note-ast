import React from 'react';
import TeamLeader from './TeamLeader.jsx';
import TeamMember from './TeamMember.jsx';

const TeamMembers = () => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    position: 'relative',
    height: '80px',
    margin: '0 auto',
    marginTop: '16px',
    gap: '24px',
  };

  return (
    <div style={containerStyles}>
      <TeamLeader />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
};

export default TeamMembers;
