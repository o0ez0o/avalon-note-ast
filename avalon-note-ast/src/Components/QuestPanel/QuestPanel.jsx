import React from 'react';
import QuestResult from './Components/QuestResult.jsx';
import './QuestPanel.css'; 

export function QuestPanel(props) {

    return (
        <div style={{display: 'flex', flexDirection: "column", gap: '36px', width: 'fill'}}>
            <div className='line_2'></div>
            <QuestResult/>
            <QuestResult/>
            <QuestResult/>
            <QuestResult/>
            <QuestResult/>
            
        </div>

    )
       
}

export default QuestPanel;