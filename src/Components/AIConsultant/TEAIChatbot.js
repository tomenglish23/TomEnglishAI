import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TEAIChatbot() {

    const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Chatbot – TEAIChatbot</h1>
            </header>            
            <main>
                <center>
                    <p>&nbsp;</p>
                    <p className='h1ahome'><b>Tom English AI</b></p>

                    <p className='h1ahome'><b>Distributed Chatbot Platform Architecture</b></p>
                    <p className='h5home'>Ingest • Process • Respond</p>

                    <div style={{ height: '20px' }} />

                    <a href="/TEAIChatbot Distributed Platform Architecture Tom English AI 251123.pdf" download>
                        <div style={{ fontSize: '22px', color: '#1234c7' }}>Download the PDF Whitepaper</div>
                    </a>

                    <div style={{ height: '20px' }} />

                    <video width="630" height="400" controls style={videoStyle}>
                        <source src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"} type="video/mp4" />
                    </video>

                    <div style={{ height: '20px' }} />
                    
                </center>
            </main>
        </div>
    )
}