import React from 'react';
import GameModuleList from './Components/GameModuleList.jsx';
import LogoBig from './LogoBig.svg';


export function StartingPage(props) {
    return (
        <div style={{
               
                height: '70vh', 
                display: 'flex', 
                flexDirection: "row", 
                gap: '72px', 
                width: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
               
                
                    }}
        >
            <div class="container">
                <div class="header">
                    <h1 class="startingPageHeader">Avalon Note Ast.</h1>
                    <p class="startingPageDescription">Dedicated to all Avalon players, this website is created with 80% of its code generated by ChatGPT.</p>
                    <p class="startingPageNote">by 机智勇敢的一线曙光</p>
                </div>
                
                    
                <div className="logo">
                    <img src={LogoBig} alt="LogoBig"/>
                </div>
                
            </div>

            <GameModuleList
            />
        </div>
    )
}

export default StartingPage;