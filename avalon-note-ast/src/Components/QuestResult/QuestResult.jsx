import React from 'react';
import TeamMembers from './Components/TeamMembers.jsx';
import VoteResult from './Components/VoteResult.jsx';
import QuestIcon from './Components/QuestIcon.jsx';





export function QuestResult(props) {
 
  return (
    <div style={{display: 'flex', flexDirection: "column", gap: '24px'}}>
      <div style={{ display: "flex", flexDirection: "row", gap: '48px' }}>
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
          <QuestIcon status={"protected"} numberOfPlayer = {5} />
      </div>
      <div className='line_1'></div>
    </div>
  )
}
export default QuestResult;