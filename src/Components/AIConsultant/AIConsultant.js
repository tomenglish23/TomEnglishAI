import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import AIConsultantDescription from './AIConsultantDescription';

export default function AIConsultant() {
       
    // const SP = "\u00A0"; // Non-breaking space
    // const SP2 = "\u00A0\u00A0"; // Non-breaking space
    // const SP3 = "\u00A0\u00A0\u00A0"; // Non-breaking space
    // const SP4 = "\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    // const SP5 = "\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    // const SP6 = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    // const SPC = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    // const SPD = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    // const SPE = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; // Non-breaking space
    // const COL1 = "\u0027"; // Column width for table 
     
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>Your AI Consultant &nbsp;-&nbsp; at Tom English AI</h1>
                <p></p>
            </header>            
            <main>

            <div>
                <AIConsultantDescription />
            </div>



            </main>
        </div>
    )
}
