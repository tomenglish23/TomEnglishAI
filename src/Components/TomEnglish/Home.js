// FILE: src/Pages/Home.js
import React from "react";
import TopBar from "../Menu/TopBar";
import "../CSS/styles.css";
import badges1 from '../../Images/MSBadges1.jpg';
import badges2 from '../../Images/MSBadges2.jpg';

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
            <b>CI/CD</b> and <b>automation tooling</b>.
            My focus: <b>traceability</b>, <b>repeatable delivery</b> and <b>impactful products</b>.
          </p>

          <center>
          <p style={{ marginTop: "8px", marginBottom: "0px", fontSize: "16px", opacity: 0.85 }}>
            30 Microsoft Learn badges • Azure • .NET • GitHub Actions CI/CD<br />
            Python • RAG (LangChain / LangGraph / Chroma DB) • Render (PaaS)
          </p>
          </center>
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
            marginTop: "5px",
            marginBottom: "18px",
            flexWrap: "wrap",
          }}
        >
          {/* TEAIRAG */}

          <div className="card" style={{ width: "400px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIRAG Private AI Systems: <br />
            &nbsp; &nbsp; &nbsp;Software Interview Q&As <br />
            &nbsp; &nbsp; &nbsp;Healthcare Certifications <br />
            &nbsp; &nbsp; &nbsp;PT Billing Assistant</h3>
            <p>Retrieval-Augmented Generation</p>
            <p>
              LangChain • LangGraph • ChromaDB • <b>Python</b> • deployed on <b>Render (PaaS)</b>
            </p>

            <a
              className="libutton"
              style={btnStyle}
              href="https://www.tomenglishai.com/RAG/TEAIRag"
              target="_blank"
              rel="noopener noreferrer"
            >
              View RAG Demos
            </a>
          </div>

          {/* NEW: Template Factory (RAG Auto-Generator) */}
          <div className="card" style={{ width: "400px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIRAG Auto-Generator</h3>
            <p>
              Config-driven tool generates new RAG projects fast: <b>Collect data → markdown → index → deploy → eval</b>.
            </p>
            <p>
              Create new “Private AI Systems” quickly with consistent structure and
              repeatable deployment.
            </p>
          </div>

        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "90%",
            marginTop: "5px",
            marginBottom: "18px",
            flexWrap: "wrap",
          }}
        >

          {/* TEAIVideoMaker */}
          <div className="card" style={{ width: "400px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIVideoMaker</h3>
            <p>Automated demo video creation using PowerShell, OpenAI &amp; FFmpeg.</p>
            <p>Turns engineering work into clear 60–90 second proof. Fast review <br />for recruiters &amp; Hiring Managers.</p>
            <a className="libutton" style={btnStyle} href="../AIVideos/TEAIVideoMaker">
              View TEAIVideoMaker
            </a>
          </div>


          {/* TEAIChatbot */}
          <div className="card" style={{ width: "400px", minWidth: "260px", textAlign: "left" }}>
            <h3>TEAIChatbot</h3>
            <p>
              ChatGPT-style UI routed to <b><br />two Azure .NET backends</b><br />(App Service + Function App).
            </p>
            <p>Enterprise patterns, contracts and deployment-ready architecture.</p>

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
        <div style={{ width: "80%", marginTop: "30px", textAlign: "left" }}>
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
          <p className="h1ahome">
            Architecture & Tech Stack
          </p>
            <div className="summary" style={{ marginTop: "10px" }}>
              <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>Architecture Overview</summary>
                <p><strong>TEAIChatbot</strong> follows an <strong>event-driven, API-first</strong> pipeline:</p>
                <p><em>&nbsp;&nbsp;&nbsp;Web UI → Ingress API → Orchestrator → Flow Engine → Adapter → Response Channel</em></p>
                <p><b>TEAIRAG</b> is a deployed Python RAG service (Render PaaS) with retrieval, backed by ChromaDB.</p>
                <p className="muted">Each layer is isolated behind stable interfaces, enabling independent evolution, testing, and deployment.</p>
              </details><br />
              <h2>Tech Stack</h2>

              {/* <details className="section" open={false}> */}
                <div className="card-indent">
                  <h3>Skills Snapshot</h3>
                  <div className="bullets">
                    <div className="bullet">
                      <b>Cloud</b>: Azure App Service, Azure Functions, cost-aware patterns 
                    </div>
                    <div className="bullet">
                      <b>PaaS</b>: &nbsp;Render.com for Python services
                    </div>
                    <div className="bullet">
                      <b>.NET</b>: &nbsp;C#, DI, routing, flow engines, adapters, modular architecture
                    </div>
                    <div className="bullet">
                      <b><a href="../TomEnglish/NETEngineering">CI/CD</a></b>: GitHub Actions; enterprise toolchain familiarity <br /> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      (Jenkins / Artifactory / Sonar / Checkmarx / etc.)
                    </div>
                    <div className="bullet">
                      <b>AI</b>: &nbsp;&nbsp;&nbsp;Python, LangChain, LangGraph, ChromaDB, OpenAI,<br /> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      retrieval + citations + deterministic flows
                    </div>
                    <div className="bullet">
                      <b>Automation</b>: PowerShell, FFmpeg, schema-driven workflows, video/TTS automation
                    </div>
                  </div>
                </div>
              
                <div className="card-indent">
                  
                  <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>30 Microsoft Badges</summary>
                    <table>
                      <colgroup>
                      </colgroup>
                      <tbody>
                          <tr>
                              <td><img src={badges1} alt="Microsoft Badge 1" border="0" width="900" height="900" /></td>
                          </tr><tr>   
                              <td><img src={badges2} alt="Microsoft Badge 2" border="0" width="900" height="900" /></td>
                          </tr>
                      </tbody>
                    </table>  
                  </details>
                </div>
              
                <div className="card-indent">
                  <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>Frontend</summary>
                    <div className="bullets">
                      <div className="bullet">React component-based UI</div>
                      <div className="bullet">Event-based command dispatch</div>
                    </div>
                  </details>
                </div>

                <div className="card-indent">
                  <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>Backend (.NET)</summary>
                    <div className="bullets">
                      <div className="bullet"><strong>C# / .NET</strong> (modular solution architecture)</div>
                      <div className="bullet">Dependency Injection for orchestration, flow engines & adapters</div>
                      <div className="bullet"><strong>Separation of Concerns</strong>
                        <div className="bullets">
                          <div className="bullet">Ingress handling</div>
                          <div className="bullet">Conversation normalization</div>
                          <div className="bullet">Flow routing</div>
                          <div className="bullet">Response formatting</div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="card-indent">
                  <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>Azure Cloud</summary>
                    <div className="bullets">
                      <div className="bullet"><em><b>Dynamic api.tomenglishai.com access → <u>Azure App Service</u> or <u>Azure Function App</u></b></em></div>
                      <div className="bullet">HTTPS endpoints with JSON payload contracts</div>
                      <div className="bullet">Cloud-friendly configuration & deployment patterns</div>
                      <div className="bullet">Azure-ready path to Functions
                        <div className="bullets">
                          <div className="bullet">Azure Functions (HTTP-triggered, consumption-based)</div>
                          <div className="bullet">Event-driven scaling with minimal contract changes</div>
                        </div>
                      </div>
                    </div>

                    <p className="muted" style={{ margin: '5px 0px 0px 20px' }}>
                      The current Web App  enabled rapid iteration. <br />
                      The architecture is structured for a low-cost move to Azure.<br />
                      Functions as traffic & usage evolve.
                    </p>
                  </details>
                </div>

                <div className="card-indent">
                  <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>Applied AI & LLM Strategy</summary>
                    <p className="muted" style={{ margin: '0px 0px 5px 20px' }}>
                      The chatbot is designed around <strong>pluggable AI adapters</strong>, not a single framework dependency.
                    </p>
                    <div className="bullets">
                      <div className="bullet">Deterministic knowledge flows for predictable output</div>
                      <div className="bullet">Command-based routing for testability & debugging</div>
                      <div className="bullet">LangChain, LangGraph on Render.com</div>
                      <div className="bullet">Injected behind interfaces for safe swaps, experiments & rollback</div>
                    </div>
                  </details>
                </div>
                {/* </details><br /> */}

                <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>Testing & Extensibility</summary>
                  <div className="card">
                    <div className="bullets">
                      <div className="bullet">Deterministic commands act as living test vectors</div>
                      <div className="bullet">Clear contracts enable unit testing at orchestration boundaries</div>
                      <div className="bullet">Integration testing covers end-to-end flows</div>
                      <div className="bullet">Flow engines & adapters are independently testable</div>
                      <div className="bullet">Future support: /qa microservice, multi-channel ingress, event-driven scaling patterns</div>
                    </div>
                  </div>
                </details><br />
                
                <details className="section" open={false}><summary style={{color: '#0240d1', fontWeight: '600'}}>TEAI design paradigm</summary>
                  <div className="card">
                    <p className="muted" style={{ margin: '0px 0px 5px 20px' }}>
                      I demonstrate <strong>how I design systems</strong>, 
                      not just that I can call an LLM. 
                    </p>
                    <div className="bullets">
                      <div className="bullet">Long-term maintainability</div>
                      <div className="bullet">Cloud-conscious cost decisions</div>
                      <div className="bullet">Incremental delivery</div>
                      <div className="bullet">Realistic trade-offs between speed & architecture</div>
                    </div>
                  </div>
                </details><br />
                
           </div>
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
