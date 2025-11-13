import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function Telegram() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>Telegram</h1>
            </header>            
            <main>
                <p>Telegram can be used as an input node into AI Agent Workflows like N8N and Make.</p>
                <p>N8N diagram is coming.</p>
            </main>
        </div>
    )
}
