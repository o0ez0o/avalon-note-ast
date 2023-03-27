import React from 'react';
import TeamMembers from './Components/TeamMembers.jsx'
import VoteResult from './Components/VoteResult.jsx';




export function QuestResult(props) {
 
  return (
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
  )
}
export default QuestResult;