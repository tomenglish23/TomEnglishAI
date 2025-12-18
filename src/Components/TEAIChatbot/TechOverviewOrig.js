// TechOverview.js
import React from "react";
import "./TechOverview.css";

export default function TechOverviewOrig() {
  return (
    <section className="tech-overview">

      <div className="section">
        <h2>Architecture Overview</h2>
        <div className="summary">
          <p>
            The <strong>TEAIChatbot</strong> system follows an <strong>event-driven, API-first</strong> pipeline:
            <br />
            <em>Web UI → Ingress API → Orchestrator → Flow Engine → Adapter → Response Channel</em>
          </p>
          <p className="muted">
            xxxxxx Each layer is isolated behind stable interfaces, enabling independent evolution, testing & deployment.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Tech Stack</h2>
        <div className="grid">

          <div className="card">
            <h3>Frontend</h3>
            <ul>
              <li><strong>React</strong> (component-based UI)</li>
              <li>Event-based command dispatch</li>
              <li>Deterministic test vectors for repeatable demos</li>
            </ul>
          </div>

          <div className="card">
            <h3>Backend (.NET)</h3>
            <ul>
              <li><strong>C# / .NET</strong> (modular solution architecture)</li>
              <li>Dependency Injection for orchestration, flow engines & adapters</li>
              <li>
                <strong>Separation of Concerns</strong>
                <ul>
                  <li>Ingress handling</li>
                  <li>Conversation normalization</li>
                  <li>Flow routing</li>
                  <li>Response formatting</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Azure Cloud</h3>
            <ul>
              <li><strong>Azure App Service</strong> (current hosting for API & web ingress)</li>
              <li>HTTPS endpoints with JSON payload contracts</li>
              <li>Cloud-friendly configuration & deployment patterns</li>
              <li>
                Azure-ready path to Functions
                <ul>
                  <li>Azure Functions (HTTP-triggered, consumption-based)</li>
                  <li>Event-driven scaling with minimal contract changes</li>
                </ul>
              </li>
            </ul>
            <p className="muted">
              The current Web App  enabled rapid iteration. The architecture is structured for a low-cost move to Azure
              Functions as traffic & usage evolve.
            </p>
          </div>

          <div className="card">
            <h3>Applied AI & LLM Strategy</h3>
            <p className="muted">
              The chatbot is designed around <strong>pluggable AI adapters</strong>, not a single framework dependency.
            </p>
            <ul>
              <li>Current: deterministic knowledge flows for predictable output</li>
              <li>Current: command-based routing for testability & debugging</li>
              <li>Planned: LangChain, LangGraph, LlamaIndex</li>
              <li>Injected behind interfaces for safe swaps, experiments & rollback</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="section">
        <h2>Conversation Entry Points (Demo Flows)</h2>
        <div className="card">
          <ul>
            <li><strong>Knowledge Flows</strong> – deterministic responses used to validate formatting, structure & routing</li>
            <li><strong>Round-Trip Sanity Flow</strong> – verifies full request/response lifecycle</li>
            <li><strong>Content Retrieval Flow</strong> – returns structured sections from the TEAIChatbot architecture whitepaper</li>
          </ul>
          <p className="muted">
            These flows support debugging, regression testing, recruiter demos & technical walkthroughs.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Testing & Extensibility Signals</h2>
        <div className="card">
          <ul>
            <li>Deterministic commands act as living test vectors</li>
            <li>Clear contracts enable unit testing at orchestration boundaries</li>
            <li>Integration testing covers end-to-end flows</li>
            <li>Flow engines & adapters are independently testable</li>
            <li>Future support: /qa microservice, multi-channel ingress, event-driven scaling patterns</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Why This Exists</h2>
        <div className="card">
          <p className="muted">
            This project demonstrates <strong>how I design systems</strong>, not just that I can call an LLM. It reflects:
          </p>
          <ul>
            <li>Long-term maintainability</li>
            <li>Cloud-conscious cost decisions</li>
            <li>Incremental delivery</li>
            <li>Realistic trade-offs between speed & architecture</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
