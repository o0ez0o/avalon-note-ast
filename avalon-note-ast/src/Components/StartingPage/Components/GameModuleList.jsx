import React from 'react';
import GameModule from './GameModule.jsx';
import '../StartingPage.css';
import '../../../App.css';

export function GameModuleList (props) {
    return (
        
        <div style={{display: 'flex', flexDirection: "column", gap: '24px', width: '600px'}}>
            <GameModule status={''}
                numberOfPlayers={10} 
                rolesText={(<p>Merlin · Percival · Servant  x4 <br/> Mordred · Assassin · Morgana · Oberon</p>)}
                roundsText={'3 · 4 · 4 · 5 · 5'}
            />
            <GameModule status={'unavailable'}
                numberOfPlayers={9} 
                rolesText={(<p>Merlin · Percival · Servant  x4 <br/> Mordred · Assassin · Morgana</p>)}
                roundsText={'3 · 4 · 4 · 5 · 5'}
            />
            <GameModule status={'unavailable'}
                numberOfPlayers={6} 
                rolesText={(<p>Merlin · Percival · Servant  x2 <br/> Assassin · Morgana</p>)}
                roundsText={'2 · 3 · 4 · 3 · 4'}
            />
            <p className="regular-paragraph">Other play modes are coming soon!</p> 
        </div>
    )
}
       

export default GameModuleList;