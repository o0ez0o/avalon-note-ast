import React from 'react';
import TeamMembers from './TeamMembers.jsx';
import VoteResult from './VoteResult.jsx';
import QuestIcon from './QuestIcon.jsx';





export function QuestResult(props) {
 
  return (
    <div style={{display: 'flex', flexDirection: "column", gap: '24px', justifyContent: 'space-between'}}>
      <div style={{ flexWrap: 'wrap', display: "flex", gap: '48px', justifyContent: 'space-between' }}>
        <QuestIcon status={"protected"} numberOfPlayer = {5} />
        <div>
          
          <div>
            <TeamMembers/>
            <VoteResult style = {{
            }
            }></VoteResult>
          </div>
          <div>
            <TeamMembers/>
            <VoteResult style = {{
            }
            }></VoteResult>
          </div>
          <div>
            <TeamMembers/>
            <VoteResult style = {{
            }
            }></VoteResult>
          </div>
          <div>
            <TeamMembers/>
            <VoteResult style = {{
            }
            }></VoteResult>
          </div>
          <div>
            <TeamMembers/>
            <VoteResult style = {{
            }
            }></VoteResult>
          </div>
        </div>
        
      </div>
      <div className='line_1'></div>
    </div>
  )
}
export default QuestResult;