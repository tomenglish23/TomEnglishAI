import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import video from '../../Videos/Enterprise_Chatbots.mp4';

export default function AIChatbots() {

    const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Chatbots</h1>
            </header>            
            <main>
                <p>My AI Chatbot whitepaper will be uploaded, soon.</p>
                <center>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <table>
                        <tbody>
                            <tr><td><b><div style={{fontSize: '22px'}}>Tom English AI – Distributed Chatbot Platform Architecture</div></b></td></tr>
                            <tr><td><b>- Ingest, Process and Respond</b></td></tr>
                            <tr><td>November, 2025</td></tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                    <video width="500" height="372" controls style={videoStyle}>
                        <source src={video} type="video/mp4" />
                    </video>
                    
                </center>
            </main>
        </div>
    )
}
