import React from 'react';
import TeamMembers from './Components/TeamMembers.jsx'
import VoteResult from './Components/VoteResult.jsx';



export function QuestResult(props) {
 
  return (
    <div>
      <TeamMembers/>
      <VoteResult style = {{
        marginLeft: '80px',

      }
      }></VoteResult>

    </div>
  )
}
export default QuestResult;