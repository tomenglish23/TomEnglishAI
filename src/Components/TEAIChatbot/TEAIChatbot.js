import React from "react";
import ChatbotPostDemo from "./ChatbotPostDemo";
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TEAIChatbot() {
  const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };
  return (
    <center>
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>TEAIChatbot</h1>
                <p></p>
            </header>            
            <main>

                <div style={{ height: '20px' }} />

                <p className='h1ahome'><b>Distributed Chatbot Platform Architecture</b></p>
                <p className='h5home'>Ingest • Process • Respond</p>

                <div style={{ height: '20px' }} />

                <a href="/TEAIChatbot Distributed Platform Architecture Tom English AI 251123.pdf" download>
                    <div style={{ fontSize: '22px', color: '#1234c7' }}>Download the PDF Whitepaper</div>
                </a>

                <div style={{ height: '20px' }} />

                <video width="630" height="400" controls style={videoStyle}>
                    <source src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"}
                            type="video/mp4" />
                </video>

                <p className='h2home'>
                    Video by&nbsp;
                    <a href="../AIVideos/AIVideoTEAIVideoMaker">
                    <span style={{ fontSize: '18px', color: '#1234c7' }}>TEAIVideoMaker</span>
                    </a>
                </p>

                <div style={{ height: '40px' }} />

<div style={{border:"3px solid red", padding:12}}>
  <div style={{fontSize:22}}>MARKER ABOVE DEMO</div>
  <ChatbotPostDemo />
  <div style={{fontSize:22}}>MARKER BELOW DEMO</div>
</div>
                {/* <ChatbotPostDemo /> */}
                {/* <div style={{ fontSize: 28 }}>CHATBOT DEMO HERE</div>
                <div style={{ height: '80px' }} /> */}
            </main>
        </div>
    </center>
  );
}
