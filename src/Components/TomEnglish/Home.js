import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function Home() {

    const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };

    return (
        <div>
<TopBar/>

<center>

  {/* TAGLINE */}
  <p style={{ fontSize: '22px', marginTop: '20px', color: '#1234c7' }}>
    TEAI: Practical systems, modern AI.
  </p>
            {/* CONTACT SECTION */}
            <div style={{ marginTop: '20px', marginBottom: '30px' }}>
              <div style={{ display:'flex', justifyContent:'center', gap:'20px' }}>

                {/* LinkedIn */}
                <a className="libutton"
                  style={{
                    backgroundColor:'#e8ecff',
                    color:'#1234c7',
                    border:'1px solid #d0d8ff',
                    padding:'6px 16px',
                    borderRadius:'4px'
                  }}
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=tomenglishai"
                  target="_blank">
                  Follow on LinkedIn
                </a>

                {/* Email */}
                <a className="libutton"
                  style={{
                    backgroundColor:'#e8ecff',
                    color:'#1234c7',
                    border:'1px solid #d0d8ff',
                    padding:'6px 16px',
                    borderRadius:'4px'
                  }}
                  href="mailto:jobsearch@tomenglishai.com">
                  Email Me
                </a>

              </div>
            </div>

            {/* BUTTON HOVER STATES */}
            <style>
            {`
              .libutton {
                transition: background-color 0.15s ease-in-out;
              }
              .libutton:hover {
                background-color: #dfe6ff !important;
              }
            `}
            </style>

            {/* FEATURED PRODUCTS */}
            <p className='h1ahome'><b>Featured Products</b></p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              width: '90%',
              marginTop: '20px',
              marginBottom: '30px',
              flexWrap: 'nowrap'
            }}>

              {/* TEAIVideoMaker */}
              <div className="card" style={{ width: '30%', minWidth: '260px', textAlign:'left' }}>
                <h3>TEAIVideoMaker</h3>
                <p>Automated video creation using PowerShell, OpenAI & FFmpeg.</p>
                <p>Azure‑ready automation pipeline built for reproducible creative workflows.</p>
              </div>

              {/* TEAIChatbot */}
              <div className="card" style={{ width: '30%', minWidth: '260px', textAlign:'left' }}>
                <h3>TEAIChatbot</h3>
                <p>Event‑driven, API‑first automation architecture for guided user journeys.</p>
                <p>Designed for Azure App Service & Azure Functions deployment.</p>

                <a className="libutton"
                  style={{
                    backgroundColor:'#e8ecff',
                    color:'#1234c7',
                    border:'1px solid #d0d8ff',
                    padding:'6px 16px',
                    borderRadius:'4px',
                    marginTop:'10px',
                    display:'inline-block'
                  }}
                  href="/TEAIChatbot Distributed Platform Architecture Tom English AI 251123.pdf"
                  download>
                  Download the PDF Whitepaper
                </a>
              </div>

              {/* PT Billing Assistant (RAG System) */}
              <div className="card" style={{ width: '30%', minWidth: '260px', textAlign:'left' }}>
                <h3>PT Billing Assistant (RAG)</h3>
                <p>AI‑powered clinical & billing guidance for physical therapists.</p>
                <p>LangChain • LangGraph • ChromaDB • Python • serverless architecture.</p>

                <a className="libutton"
                  style={{
                    backgroundColor:'#e8ecff',
                    color:'#1234c7',
                    border:'1px solid #d0d8ff',
                    padding:'6px 16px',
                    borderRadius:'4px',
                    marginTop:'10px',
                    display:'inline-block'
                  }}
                  href="https://www.tomenglishai.com/RAG/TeaiRagPt"
                  target="_blank">
                  View RAG Demo
                </a>
              </div>

            </div>

            {/* VIDEO SECTION */}
            <div style={{ marginTop: '20px' }}>
              <video width="530" height="350" controls style={{ verticalAlign: 'top', display: 'block', margin: 0 }}>
                <source src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"} type="video/mp4" />
              </video>
              <br />
              <span style={{ fontSize: '18px' }}>Video by&nbsp;</span>
              <a href="../AIVideos/TEAIVideoMaker">
                <span style={{ fontSize: '18px', color: '#1234c7' }}>TEAIVideoMaker</span>
              </a>
            </div>

            {/* WHY HIRE ME */}
            <p className='h1ahome' style={{ marginTop:'40px' }}><b>Why Hire Me</b></p>
            <div className="card" style={{ width:'70%', margin:'0 auto', textAlign:'left' }}>
              <p>I build production systems that are stable, testable and ready for cloud deployment. My work focuses on clean interfaces, deterministic flows and modular orchestration so each component can evolve without breaking the system. I bring enterprise CI/CD discipline, modern .NET engineering and practical AI integration into every project.</p>
            </div>

            {/* SKILLS SNAPSHOT */}
            <p className='h1ahome' style={{ marginTop:'40px' }}><b>Skills Snapshot</b></p>
            <div className="card" style={{ width:'70%', margin:'0 auto', textAlign:'left' }}>
              <p><b>Azure Cloud Architecture</b> — App Service, Functions, HTTPS JSON contracts, event‑driven scaling, cost‑aware design.</p>
              <p><b>.NET Engineering</b> — C#, DI, routing, flow engines, adapters, normalization, modular architecture.</p>
              <p><b>CI/CD Toolchains</b> — GitHub → Jenkins → Artifactory → PCF; SonarQube, Checkmarx, Black Duck, TruffleHog.</p>
              <p><b>AI Systems Engineering</b> — LangChain, LangGraph, ChromaDB, OpenAI, deterministic flows, adapter‑based design.</p>
              <p><b>Automation</b> — PowerShell, FFmpeg, schema‑driven workflows, video/TTS automation.</p>
            </div>

            {/* HOW I WORK */}
            <p className='h1ahome' style={{ marginTop:'40px' }}><b>How I Work</b></p>
            <div className="card" style={{ width:'70%', margin:'0 auto', textAlign:'left' }}>
              <p>I design systems around clarity and stability. Every project starts with well‑defined boundaries, predictable flows and components that can be tested in isolation. I deliver in small, functional increments so architecture, automation and deployment paths stay aligned from the start. My goal is always the same: build systems that are clear to follow, easy to extend and stable over time.</p>
            </div>

            {/* WHAT I'M LOOKING FOR */}
            <p className='h1ahome' style={{ marginTop:'40px' }}><b>What I’m Looking For</b></p>
            <div className="card" style={{ width:'70%', margin:'0 auto', textAlign:'left' }}>
              <p>I’m looking for a role where I can design and build cloud‑ready systems using Azure or AWS. My strongest experience is in Azure, but I’m fully comfortable working in AWS environments and can ramp quickly when needed. I prefer to stay focused within one cloud ecosystem for deeper growth, but I’m equally ready to switch to AWS if that’s where the team is building. I’m available for remote work with the ability to transition to hybrid or on‑site for the right long‑term opportunity.</p>
            </div>

          </center>

          <section className="tech-overview">

            <div className="section">
              <h2>Architecture Overview</h2>
              <div className="summary">
                <p>The <strong>TEAIChatbot</strong> system follows an <strong>event-driven, API-first</strong> pipeline:</p>
                <p>&nbsp;&nbsp;&nbsp;<em>Web UI → Ingress API → Orchestrator → Flow Engine → Adapter → Response Channel</em></p>
                
                <p><b>We build automation systems & AI-driven tools end-to-end</b> using <b>PowerShell</b>, <b>FFmpeg</b>, <b>OpenAI</b>, <b>C#</b> & <b>Azure</b> so ideas move from concept to production-ready workflows without friction.</p>
                <p className="muted">
                  Each layer is isolated behind stable interfaces, enabling independent evolution, testing & deployment.
                </p>

                <p><b>Our simple approach: Build the automation first so every idea can scale.</b></p>

              </div>
            </div>

              <h2>Tech Stack</h2>
              <div className="card">
                <h3>Frontend</h3>
                <div className="bullets">
                  <div className="bullet">React component-based UI</div>
                  <div className="bullet">Event-based command dispatch</div>
                </div>
              </div>

              <div className="card">
                <h3>Backend (.NET)</h3>
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
              </div>

              <div className="card">
                <h3>Azure Cloud</h3>
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
              </div>

              <div className="card">
                <h3>Applied AI & LLM Strategy</h3>
                <p className="muted" style={{ margin: '0px 0px 5px 20px' }}>
                  The chatbot is designed around <strong>pluggable AI adapters</strong>, not a single framework dependency.
                </p>
                <div className="bullets">
                  <div className="bullet">Current: deterministic knowledge flows for predictable output</div>
                  <div className="bullet">Current: command-based routing for testability & debugging</div>
                  <div className="bullet">Planned: LangChain, LangGraph, LlamaIndex</div>
                  <div className="bullet">Injected behind interfaces for safe swaps, experiments & rollback</div>
                </div>
              </div>

              <h2>Conversation Entry Points (Demo Flows)</h2>
              <div className="card">
                <div className="bullets">
                  <div className="bullet"><strong>Knowledge Flows</strong> – deterministic responses used to validate formatting, structure & routing</div>
                  <div className="bullet"><strong>Round-Trip Sanity Flow</strong> – verifies full request/response lifecycle</div>
                  <div className="bullet"><strong>Content Retrieval Flow</strong> – returns structured sections from the TEAIChatbot architecture whitepaper</div>
                </div>
                <p className="muted" style={{ margin: '5px 0px 0px 20px' }}>
                  These flows support debugging, regression testing, recruiter demos & technical walkthroughs.</p>
              </div>

              <h2>Testing & Extensibility Signals</h2>
              <div className="card">
                <div className="bullets">
                  <div className="bullet">Deterministic commands act as living test vectors</div>
                  <div className="bullet">Clear contracts enable unit testing at orchestration boundaries</div>
                  <div className="bullet">Integration testing covers end-to-end flows</div>
                  <div className="bullet">Flow engines & adapters are independently testable</div>
                  <div className="bullet">Future support: /qa microservice, multi-channel ingress, event-driven scaling patterns</div>
                </div>
              </div>

              <h2>TEAI design paradigm</h2>
              <div className="card">
                <p className="muted" style={{ margin: '0px 0px 5px 20px' }}>
                  This project demonstrates <strong>how I design systems</strong>, 
                  not just that I can call an LLM. <br />
                  It reflects:
                </p>
                <div className="bullets">
                  <div className="bullet">Long-term maintainability</div>
                  <div className="bullet">Cloud-conscious cost decisions</div>
                  <div className="bullet">Incremental delivery</div>
                  <div className="bullet">Realistic trade-offs between speed & architecture</div>
                </div>
              </div>

          </section>

          <center>
            <div style={{ height: '1px' }} />

            <p className='h1ahome'><b>Contact</b></p>
            <p className='h5home'><a href="https://www.tomenglishai.com">tomenglishai.com</a></p>
            <p className='h5home'><a href="mailto:jobsearch@tomenglishai.com" target="blank">jobsearch@tomenglishai.com</a></p>
            <p className='h5home'><a href="https://www.linkedin.com/in/tomenglishai/" target="_blank" rel="noopener noreferrer">LinkedIn.com/in/tomenglishai</a></p>

            <div style={{ height: '40px' }} />

            <p className='h2home'>December 18, 2025</p>

            <div style={{ height: '40px' }} />
          </center>

        </div>
    )
}
