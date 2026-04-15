import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AI() {

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI</h1>
                <p>As I learn, I add here ...</p>
            </header>            
            <main>
                
                <h2>Section 1</h2>
                <pre>
                    <p>Text-to-Speech (TTS):</p>
                    <p>&nbsp;</p>
                    <p>1. Google TTS API:<br />
                    &nbsp;&nbsp;&nbsp;....</p>
                    <p>&nbsp;</p>
                </pre>

            </main>
        </div>
    )
}