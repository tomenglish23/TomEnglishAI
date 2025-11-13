import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import AIConsultantDescr2 from './AIConsultantDescr2';

export default function AICustomGPTs() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Custom GPTs</h1>
                <p></p>
            </header>            
            <main>

            <div>
                <AIConsultantDescr2 />
            </div>
            </main>
        </div>
    )
}
