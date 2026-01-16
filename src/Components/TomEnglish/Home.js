// FILE: src/Pages/Home.js
import React from "react";
import TopBar from "../Menu/TopBar";
import "../CSS/styles.css";

export default function Home() {
  const videoStyle = { verticalAlign: "top", display: "block", margin: 0 };

  const btnStyle = {
    backgroundColor: "#e8ecff",
    color: "#1234c7",
    border: "1px solid #d0d8ff",
    padding: "6px 16px",
    borderRadius: "4px",
    marginTop: "10px",
    display: "inline-block",
    textDecoration: "none",
  };

  const sectionWidth = { width: "820px", textAlign: "left" };

  return (
    <div>
      <TopBar />

      <center>
        {/* TAGLINE */}
        <p style={{ fontSize: "22px", marginTop: "20px", color: "#1234c7" }}>
          <b>TEAI: Practical systems, modern AI</b>
        </p>

        {/* 2–3 line narrative (tight) */}
        <div style={sectionWidth}>
          <p style={{ fontSize: "16px", marginTop: "2px", color: "#1234c7" }}>
            I build deployable end-to-end systems: <b>RAG (Private AI)</b>, <b>.NET/Azure backends</b>,{" "}
            <b>CI/CD</b>, and <b>automation tooling</b>.
            <br />
            My focus: <b>traceability</b>, <b>repeatable delivery</b>, and <b>impactful products</b>.
          </p>

          {/* Proof ribbon (this is where badges belong: 1 line) */}
          <p style={{ marginTop: "8px", marginBottom: "0px", fontSize: "14px", opacity: 0.85 }}>
            <b>Proof:</b> Microsoft Learn (30 badges) • Azure • .NET • Python • RAG (LangChain/LangGraph/Chroma) • GitHub
            Actions CI/CD • Render (PaaS)
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div style={{ marginTop: "18px", marginBottom: "26px" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a
              className="libutton"
              style={btnStyle}
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=tomenglishai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on LinkedIn
            </a>

            <a className="libutton" style={btnStyle} href="mailto:jobsearch@tomenglishai.com">
              Email Me
            </a>
          </div>
        </div>

        {/* BUTTON HOVER STATES */}
        <style>
          {`
            .libutton { transition: background-color 0.15s ease-in-out; }
            .libutton:hover { background-color: #dfe6ff !important; }
          `}
        </style>

        {/* FEATURED PRODUCTS */}
        <p className="h1ahome">
          <b>Featured Products</b>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "90%",
            marginTop: "20px",
            marginBottom: "18px",
            flexWrap: "wrap",
          }}
        >
          {/* TEAIVideoMaker */}
          <div className="card" style={{ width: "320px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIVideoMaker</h3>
            <p>Automated demo video creation using PowerShell, OpenAI &amp; FFmpeg.</p>
            <p>Turns engineering work into clear 60–90 second proof (fast review for recruiters/HMs).</p>
            <a className="libutton" style={btnStyle} href="../AIVideos/TEAIVideoMaker">
              View TEAIVideoMaker
            </a>
          </div>

          {/* TEAIChatbot */}
          <div className="card" style={{ width: "320px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIChatbot</h3>
            <p>
              ChatGPT-style UI routed to <b>two Azure .NET backends</b> (App Service + Function App).
            </p>
            <p>Shows enterprise integration patterns, contracts, and deployment-ready architecture.</p>

            <a
              className="libutton"
              style={btnStyle}
              href="https://www.tomenglishai.com/TEAIChatbot/TEAIChatbot"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Chatbot Demo
            </a>

            <a className="libutton" style={btnStyle} href="/TEAIChatbot Distributed Platform Architecture Tom English AI 251123.pdf" download>
              Download Whitepaper (PDF)
            </a>
          </div>

          {/* TEAIRAG */}
          <div className="card" style={{ width: "320px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIRAG — PT Billing Assistant</h3>
            <p>Retrieval-Augmented Generation (RAG) for clinical + billing support.</p>
            <p>
              LangChain • LangGraph • ChromaDB • <b>Python</b> • deployed on <b>Render (PaaS)</b>
            </p>

            <a
              className="libutton"
              style={btnStyle}
              href="https://www.tomenglishai.com/RAG/TeaiRagPt"
              target="_blank"
              rel="noopener noreferrer"
            >
              View RAG Demo
            </a>
          </div>

          {/* NEW: Template Factory (RAG Auto-Generator) */}
          <div className="card" style={{ width: "320px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAI Template Factory — RAG Auto-Generator</h3>
            <p>
              A config-driven tool that generates new RAG projects fast: <b>markdown corpus → index → deploy → eval</b>.
            </p>
            <p>
              Designed so new “Private AI Systems” can be spun up quickly with consistent structure, citations, and
              repeatable deployment.
            </p>

            {/* These links assume you’ll add a page later; placeholders are still useful narrative */}
            <a className="libutton" style={btnStyle} href="/TEAI/Factory">
              View Factory (Spec / Demo)
            </a>

            <a className="libutton" style={btnStyle} href="/TEAI/Factory#roadmap">
              Today: Build Project #2 from Markdown
            </a>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div style={{ marginTop: "10px" }}>
          <video width="530" height="350" controls style={videoStyle}>
            <source src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"} type="video/mp4" />
          </video>
          <br />
          <span style={{ fontSize: "16px" }}>1-minute overview by&nbsp;</span>
          <a href="../AIVideos/TEAIVideoMaker">
            <span style={{ fontSize: "16px", color: "#1234c7" }}>TEAIVideoMaker</span>
          </a>
        </div>

        {/* THIS IS THE FIX: collapse the essay sections */}
        <div style={{ width: "70%", marginTop: "30px", textAlign: "left" }}>
          <details className="card" style={{ padding: "14px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 800, color: "#1234c7" }}>
              Why Hire Me / How I Work / What I’m Looking For (click)
            </summary>

            <div style={{ marginTop: "10px" }}>
              <h4 style={{ marginBottom: "6px" }}>Why Hire Me</h4>
              <p style={{ marginTop: 0 }}>
                I build deployable systems that are stable, testable, and cloud-ready. I bring enterprise CI/CD
                discipline, modern .NET engineering, and practical AI integration into every project.
              </p>

              <h4 style={{ marginBottom: "6px" }}>How I Work</h4>
              <p style={{ marginTop: 0 }}>
                I design around clear boundaries, predictable flows, and modular components. I deliver in small,
                functional increments so architecture, automation, and deployment stay aligned from day one.
              </p>

              <h4 style={{ marginBottom: "6px" }}>What I’m Looking For</h4>
              <p style={{ marginTop: 0 }}>
                A role where I can build cloud-ready systems and add AI features responsibly (Azure or AWS).
              </p>
            </div>
          </details>
        </div>
      </center>

      {/* TECH OVERVIEW: keep it, but collapse it */}
      <section className="tech-overview">
        <details className="section" open={false}>
          <summary style={{ cursor: "pointer", fontWeight: 800 }}>
            Architecture & Tech Stack (details)
          </summary>

          <div className="summary" style={{ marginTop: "10px" }}>
            <h2 style={{ marginTop: 0 }}>Architecture Overview</h2>

            <p>
              <strong>TEAIChatbot</strong> follows an <strong>event-driven, API-first</strong> pipeline:
            </p>
            <p>
              <em>Web UI → Ingress API → Orchestrator → Flow Engine → Adapter → Response Channel</em>
            </p>

            <p>
              <b>TEAIRAG</b> is a deployed Python RAG service (Render PaaS) with retrieval + citations, backed by ChromaDB.
            </p>

            <p className="muted">
              Each layer is isolated behind stable interfaces, enabling independent evolution, testing, and deployment.
            </p>

            <h2>Tech Stack</h2>

            <div className="card-indent">
              <h3>Skills Snapshot</h3>
              <div className="bullets">
                <div className="bullet">
                  <b>Cloud</b>: Azure App Service, Azure Functions, cost-aware patterns • Render (PaaS) for Python services
                </div>
                <div className="bullet">
                  <b>.NET Engineering</b>: C#, DI, routing, flow engines, adapters, modular architecture
                </div>
                <div className="bullet">
                  <b>Python / AI</b>: LangChain, LangGraph, ChromaDB, OpenAI, retrieval + citations + deterministic flows
                </div>
                <div className="bullet">
                  <b>CI/CD</b>: GitHub Actions; enterprise toolchain familiarity (Jenkins/Artifactory/Sonar/Checkmarx/etc.)
                </div>
                <div className="bullet">
                  <b>Automation</b>: PowerShell, FFmpeg, schema-driven workflows, video/TTS automation
                </div>
              </div>
            </div>

            <h2 id="roadmap">What I’m building next (today)</h2>
            <div className="card">
              <div className="bullets">
                <div className="bullet">
                  <b>TEAI Template Factory</b>: config → markdown corpus → ingest/index → deploy → eval report
                </div>
                <div className="bullet">
                  <b>Project #2</b>: generate a second Markdown-driven RAG system from the factory output
                </div>
                <div className="bullet">
                  <b>Homepage</b>: show “Factory-generated” badge on new projects + link to the generator
                </div>
              </div>
            </div>
          </div>
        </details>
      </section>

      <center>
        <div style={{ height: "1px" }} />

        <p className="h1ahome">
          <b>Contact</b>
        </p>
        <p className="h5home">
          <a href="https://www.tomenglishai.com">tomenglishai.com</a>
        </p>
        <p className="h5home">
          <a href="mailto:jobsearch@tomenglishai.com" target="blank" rel="noreferrer">
            jobsearch@tomenglishai.com
          </a>
        </p>
        <p className="h5home">
          <a href="https://www.linkedin.com/in/tomenglishai/" target="_blank" rel="noopener noreferrer">
            LinkedIn.com/in/tomenglishai
          </a>
        </p>

        <div style={{ height: "40px" }} />
        <p className="h2home">December 18, 2025</p>
        <div style={{ height: "40px" }} />
      </center>
    </div>
  );
}
