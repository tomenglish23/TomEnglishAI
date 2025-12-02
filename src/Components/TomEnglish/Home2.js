import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/tom_english_ai_logo.jpeg';

export default function Home2() {
  const videoStyle = {
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ height: "20px" }} />

      {/* Hero */}
      <p className="h1home">Tom English AI</p>
      <p className="h5home">Senior .NET & Azure Engineer • AI Systems Builder</p>
      <p className="h5home">Building tools that automate, scale & deliver.</p>

      <div style={{ height: "20px" }} />

      {/* What I Build */}
      <p className="h1ahome">
        <b>What I Build</b>
      </p>
      <p className="h5home" style={{ width: "60%", margin: "0 auto" }}>
        I build automation systems & AI-driven tools end-to-end — using
        PowerShell, FFmpeg, OpenAI, C# & Azure — so ideas move from concept to
        production-ready workflows without friction.
      </p>
      <p className="h5home">
        <b>My approach is simple: build the automation first so every idea can scale.</b>
      </p>

      <div style={{ height: "20px" }} />

      {/* TEAI Tools */}
      <p className="h1ahome">
        <b>TEAI Tools</b>
      </p>
      <div style={{ width: "70%", margin: "0 auto", textAlign: "left" }}>
        <p className="h5home">
          <b>TEAIVideoMaker:</b> PowerShell + OpenAI + FFmpeg pipeline for rapid
          video creation
        </p>
        <p className="h5home">
          <b>TEAIMP3Maker:</b> Fast TTS production & duration-aligned audio for
          prototypes
        </p>
        <p className="h5home">
          <b>TEAIChatbot:</b> In-design flow-controlled automation architecture for
          turning social engagement into guided journeys (described in the
          whitepaper below).
        </p>
      </div>

      <div style={{ height: "30px" }} />

      {/* Whitepaper section */}
      <p style={{ fontSize: "28px", color: "darkcyan", fontWeight: "bold" }}>
        Distributed Chatbot Platform Architecture
      </p>
      <p style={{ fontSize: "18px", color: "darkcyan", fontWeight: "bold" }}>
        Ingest • Process • Respond
      </p>

      <div style={{ height: "30px" }} />

      <p>
        <a
          href="/TEAIChatbot Distributed Platform Architecture Tom English AI 251123.pdf"
          download
        >
          <span style={{ fontSize: "22px", color: "blue" }}>
            Download the PDF Whitepaper
          </span>
        </a>
      </p>

      {/* Video */}
      <video width="730" height="460" controls style={videoStyle}>
        <source
          src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"}
          type="video/mp4"
        />
      </video>

      <p style={{ height: "5px" }} />

      <p className="h2home">
        Video by{" "}
        <a href="../AIVideos/AIVideoTEAIVideoMaker">
          <span style={{ fontSize: "18px", color: "blue" }}>TEAIVideoMaker</span>
        </a>
      </p>

      <div style={{ height: "20px" }} />

      {/* Contact */}
      <p className="h5home">
        <b>Contact</b>
      </p>
      <p className="h5home">
        <a href="https://tomenglishai.com">tomenglishai.com</a>
      </p>
      <p className="h5home">
        <a href="mailto:jobsearch@tomenglishai.com">jobsearch@tomenglishai.com</a>
      </p>
      <p className="h5home">
        <a href="https://www.linkedin.com/in/tomenglishai">
          LinkedIn.com/in/tomenglishai
        </a>
      </p>

      <div style={{ height: "40px" }} />

      <p className="h2home">November 29, 2025</p>

      <div style={{ height: "40px" }} />
    </div>
  );
}
