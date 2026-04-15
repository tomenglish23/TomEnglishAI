/* 
C:\B\React\TomEnglishAI\src\Components\AI\AIRAGObservability.js

npm start:                         http://localhost:3000/AI/AIRAGObservability
Navigate to AI\AIRAGObservability: http://localhost:3000/AI/AIRAGObservability
Expand/Collapse Chapter 4:         http://localhost:3000/AI/AIRAGObservability#ch4

*/

import React, { useState } from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles1.css';

// ── Collapsible Wrapper ──────────────────────────────────────────────────────

function Collapsible({ id, header, blue = false, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section id={id} style={{ marginBottom: '24px' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: 'pointer',
          borderBottom: '3px solid #2E75B6',
          paddingBottom: '4px',
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          userSelect: 'none',
          ...(blue ? { borderTop: '2px solid #4a90e2', marginTop: '10px', paddingTop: '0px' } : {}),
        }}
      >
        <div style={{ flex: 1 }}>{header}</div>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '1.1rem',
          color: '#2E75B6',
          marginLeft: '12px',
          marginRight: '6px',
          padding: '0 6px',
          flexShrink: 0,
          lineHeight: 1,
        }}>
          {open ? '−' : '+'}
        </span>
      </div>
      {open && <div style={{ marginTop: '12px' }}>{children}</div>}
    </section>
  );
}

// ── Reusable sub-components ──────────────────────────────────────────────────

function PartBlock({ label, title }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1F4E79, #2E75B6)',
      borderRadius: '6px', color: 'white', textAlign: 'center',
      padding: '5px', margin: '26px 0 2px 0'
    }}>
      <div>
        <span style={{ fontFamily: 'monospace', fontSize: '0.95rem', letterSpacing: '2px', opacity: 0.8, textTransform: 'uppercase' }}>{label}&nbsp;&nbsp;</span>
        <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1.3rem' }}>{title}</span>
      </div>
    </div>
  );
}

function Callout({ type = 'blue', icon, children }) {
  const themes = {
    blue:  { icon: '#2E75B6', body: '#dbeafe' },
    teal:  { icon: '#0E6655', body: '#d5f5e3' },
    amber: { icon: '#7E5109', body: '#fdebd0' },
  };
  const t = themes[type];
  return (
    <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '4px', margin: '14px 0', overflow: 'hidden' }}>
      <div style={{
        width: '34px', flexShrink: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem',
        color: 'white', background: t.icon
      }}>{icon}</div>
      <div style={{
        padding: '10px 14px', fontFamily: 'monospace', fontSize: '14px',
        fontStyle: 'italic', lineHeight: 1.55, background: t.body
      }}>{children}</div>
    </div>
  );
}

function DefBox({ term, children }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '225px 1fr',
      border: '1px solid #ccc', borderRadius: '4px',
      margin: '10px 0 12px 0', overflow: 'hidden'
    }}>
      <div style={{
        background: '#1F4E79', color: 'white', fontFamily: 'monospace',
        fontSize: '14px', fontWeight: 'bold', padding: '8px 10px',
        display: 'flex', alignItems: 'center'
      }}>{term}</div>
      <div style={{
        background: '#e8f1fb', fontFamily: 'monospace',
        fontSize: '14px', padding: '8px 12px', lineHeight: 1.55
      }}>{children}</div>
    </div>
  );
}

function CompTable({ headers, rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '12px 0 16px 0', fontFamily: 'monospace', fontSize: '1.0rem' }}>
      <thead>
        <tr>{headers.map((h, i) => (
          <th key={i} style={{ background: '#154360', color: 'white', padding: '7px 10px', textAlign: 'left' }}>{h}</th>
        ))}</tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci} style={{
                padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top',
                fontFamily: 'monospace', fontSize: '1.0rem',
                background: ri % 2 === 1 ? '#f4f6f8' : 'white'
              }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StatusBadge({ type }) {
  const styles = {
    done:    { background: '#d5f5e3', color: '#0E6655', border: '1px solid #0E6655' },
    wip:     { background: '#fdebd0', color: '#7E5109', border: '1px solid #7E5109' },
    planned: { background: '#e8f1fb', color: '#1F4E79', border: '1px solid #2E75B6' },
  };
  const labels = { done: 'DONE', wip: 'IN PROGRESS', planned: 'PLANNED' };
  return (
    <span style={{
      ...styles[type], borderRadius: '3px', fontFamily: 'monospace',
      fontSize: '0.72rem', padding: '1px 6px', fontWeight: 'bold', whiteSpace: 'nowrap'
    }}>{labels[type]}</span>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function ObsDissertation() {
  return (
    <div style={{ opacity: 1.0 }}>
      <TopBar />

      {/* === Top nav === */}
      <div style={{
        background: '#4a90e2', color: 'white', padding: '8px 20px',
        fontFamily: 'monospace', fontSize: '1.0rem',
        display: 'flex', gap: '18px', flexWrap: 'wrap', textAlign: 'center', justifyContent: 'center'
      }}>
        <a href="#foreward"  style={{ color: 'white', textDecoration: 'none', paddingRight: '14px' }}>Foreward</a>
        <a href="#part1"     style={{ color: 'white', textDecoration: 'none', paddingRight: '14px' }}>Part I — Problem</a>
        <a href="#part2"     style={{ color: 'white', textDecoration: 'none', paddingRight: '14px' }}>Part II — Design</a>
        <a href="#part3"     style={{ color: 'white', textDecoration: 'none', paddingRight: '14px' }}>Part III — Plan</a>
        <a href="#part4"     style={{ color: 'white', textDecoration: 'none', paddingRight: '14px' }}>Part IV — Principles</a>
        <a href="#glossary"  style={{ color: 'white', textDecoration: 'none' }}>Glossary</a>
      <header style={{ margin: '8px 0 8px 0', padding: '0', textAlign: 'center' }}>
        <h1s className="h1homec">Observability Engineering for RAG Systems</h1s>
        <p className="h2homec" style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
          A Development Journal</p>
        <p className="hhomec" style={{ fontSize: '1.0rem' }}>
          Logging Architecture · Call Flow Tracing · Cost Monitoring · Remote Aggregation<br />
          Render.com Free Tier · OpenAI Token Tracking · Developing in Public</p>
      </header>
      </div>

      <main>
        <div style={{ display: 'flex', gap: '28px', maxWidth: '1080px', margin: '0 auto', alignItems: 'flex-start' }}>

          {/* ── TOC Sidebar ── */}
          {/* <nav className="highlight-box" style={{ position: 'sticky', top: '20px', width: '210px', flexShrink: 0, fontFamily: 'monospace', fontSize: 'small' }}>
            <strong style={{ fontFamily: 'monospace', fontSize: 'small', color: '#1F4E79' }}>Contents</strong>
            <ul style={{ listStyle: 'none', margin: '8px 0 0 0', padding: 0 }}>
              <li style={{ marginBottom: '4px' }}><a href="#foreword" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>Foreword</a></li>
              <li style={{ fontWeight: 'bold', color: '#4a90e2', marginTop: '8px', fontSize: '0.8rem' }}>Part I — The Problem</li>
              <li style={{ marginBottom: '4px' }}><a href="#ch1" style={{  textDecoration: 'none', fontSize: '0.78rem' }}>1. Without Observability</a></li>
              <li style={{ fontWeight: 'bold', color: '#4a90e2', marginTop: '8px', fontSize: '0.8rem' }}>Part II — The Design</li>
              <li style={{ marginBottom: '4px' }}><a href="#ch2" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>2. Design Philosophy</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#ch3" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>3. The Call Flow Tracer</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#ch4" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>4. HTTP Log Handler</a></li>
              <li style={{ fontWeight: 'bold', color: '#4a90e2', marginTop: '8px', fontSize: '0.8rem' }}>Part III — The Plan</li>
              <li style={{ marginBottom: '4px' }}><a href="#ch5" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>5. Cost Tracking</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#ch6" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>6. Log Receiver &amp; Dashboard</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#ch7" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>7. Vector Store Observability</a></li>
              <li style={{ fontWeight: 'bold', color: '#4a90e2', marginTop: '8px', fontSize: '0.8rem' }}>Part IV — Principles</li>
              <li style={{ marginBottom: '4px' }}><a href="#ch8" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>8. Design Principles</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#ch9" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>9. State &amp; Roadmap</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#conclusion" style={{ textDecoration: 'none', fontSize: '0.78rem' }}>Conclusion</a></li>
              <li style={{ marginBottom: '4px' }}><a href="#glossary"   style={{ textDecoration: 'none', fontSize: '0.78rem' }}>Glossary</a></li>
            </ul>
          </nav> */}

          {/* ── Doc body ── */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* ── FOREWORD ── */}
            <Collapsible id="foreword" defaultOpen={true} blue header={<h1s>Foreword: Why I Am Building This in Public</h1s>}>
              <div style={{ borderLeft: '4px solid #4a90e2', background: '#f0f6ff', padding: '14px 18px', margin: '10px 0 18px 0', fontFamily: 'monospace', fontSize: 'small', lineHeight: 1.6 }}>
                <p>Here, I describe an <b>observability system</b> I am designing and implementing in my TEAI RAG Systems project. <br />
                It is not a finished architecture. <br />
                It is a working design — some parts are complete, some are in progress and some are still being thought through.<br />
                I am publishing it in this state deliberately.</p>
                <p>The practice of developing in public means showing not just the polished final product<br />
                but the reasoning behind design decisions, the problems encountered along the way and the iterative path from a rough idea to a working system.<br />
                Hiring managers and technical evaluators who see only finished work cannot assess how an engineer thinks. <br /> is intended to make that thinking visible.</p>
                <p>The specific problem being solved here is one that every production AI system must eventually confront:<br />
                you cannot improve what you cannot see. <br />
                A RAG system that appears to work may, in fact, be retrieving irrelevant content, generating hallucinated answers<br />
                or silently consuming API budget faster than expected. <br />
                Without instrumentation built into the system from the start, these problems are discovered after the fact <br />
                — through user complaints, unexpected invoices, or mysterious degradation in answer quality.</p>
              </div>
              <Callout type="blue" icon="i">
                This is a living document. The architecture described here is ahead of the current implementation in some areas. <br />
                That gap is intentional — writing the design before completing the code is how experienced engineers avoid building themselves into corners.
              </Callout>
            </Collapsible>

            {/* ══ PART I ══ */}
            <div id="part1"><PartBlock label="Part I" title="The Problem: Visibility in AI Systems" /></div>

            <Collapsible id="ch1" header={<h1s>Chapter 1: What Goes Wrong Without Observability</h1s>}>
              <h2s>1.1 &nbsp;The Silent Failure Problem</h2s>
              <p>Conventional software fails loudly. An HTTP 500 error, an unhandled exception, a database connection timeout <br />
              — these failures announce themselves. Monitoring systems catch them. Alerts fire. Engineers investigate.</p>
              <p>AI systems, and RAG systems in particular, can fail silently. <br />
              The application runs. Requests complete. HTTP 200 responses are returned. <br />
              And yet the system is producing answers that are subtly wrong, drawing on irrelevant documents, <br />
              ignoring retrieved context in favor of the model's parametric memory, <br />
              or confidently stating facts that appear in no document in the knowledge base.</p>
              <p>These are not errors in the conventional sense. <br />
              They are quality failures — and quality failures are invisible to standard monitoring. <br />
              You cannot catch them by watching CPU utilization, memory consumption, or response time percentiles. <br />
              You can only catch them by instrumenting the behavior of the pipeline itself: <br />
              what was retrieved, how relevant it was, what went into the prompt, what came back from the model, and whether the answer is grounded in the retrieved evidence.</p>

              <h2s>1.2 &nbsp;The Cost Visibility Problem</h2s>
              <p>Operating a RAG system on a budget introduces a specific class of problem that does not exist in conventional software: <br />
              the cost of every request is variable and not immediately obvious. <br />
              A single user query may involve an embedding API call, a vector store search, and a language model call whose cost scales directly with the number of tokens in the prompt <br />
              — and that token count depends on how many documents were retrieved and how long they are.</p>
              <p>The TEAI system currently uses OpenAI's <code>gpt-4o-mini</code> for generation and <code>text-embedding-3-small</code> for embedding. <br />
              Both are among the most cost-efficient options available, <br />
              but cost efficiency at the individual call level does not guarantee cost efficiency at the system level <br />
              if the number of tokens per prompt is not monitored and controlled. <br />
              Without per-query cost tracking built into the logging system, that difference is discovered too late.</p>

              <h2s>1.3 &nbsp;The Multi-Service Coordination Problem</h2s>
              <p>A production RAG deployment is not a single service. <br />
              It is a composition of services <br />
              — a document ingestion worker, a retrieval API, a generation endpoint, a client interface, a vector store and a logging receiver. <br />
              Each of these services runs independently, produces its own logs, and has its own failure modes.</p>
              <p>When a user receives an incorrect answer, the cause might be in any layer of the stack. <br />
              Without a centralized, correlated log stream connected by a common query identifier, diagnosing these problems requires <br />
              manually correlating timestamps across multiple log sources <br />
              — a slow, error-prone process that is not practical during active development.</p>
            </Collapsible>

            {/* ══ PART II ══ */}
            <div id="part2"><PartBlock label="Part II" title="The Design: A Three-Layer Observability Architecture" /></div>

            <Collapsible id="ch2" header={<h1s>Chapter 2: Design Philosophy</h1s>}>
              <h2s>2.1 &nbsp;Separation of Concerns in Logging</h2s>
              <p>The central design decision in this observability system is the separation of log events into distinct semantic layers, each serving a different analytical purpose. Most logging systems treat all log output as a single stream, differentiated only by severity level. This is adequate for operational monitoring but inadequate for understanding the behavior of an AI pipeline.</p>
              <p>The TEAI observability architecture defines three distinct layers of log output, each with its own level designation, routing configuration, and analytical purpose.</p>
              <CompTable
                headers={['Layer', 'Log Level', 'Purpose', 'Audience']}
                rows={[
                  ['Operational',  <code>INFO / WARNING / ERROR</code>, 'Service health, errors, startup events, configuration', 'Monitoring dashboards, alerting systems'],
                  ['Flow',         <code>FLOW (level 25)</code>,        'Call entry/exit tracing, pipeline stage sequencing, timing', 'Developer debugging, architecture validation'],
                  ['Behavioral',   'FLOW + structured fields',          'Retrieval scores, prompt token counts, LLM costs, answer confidence', 'System tuning, cost analysis, quality evaluation'],
                ]}
              />

              <h2s>2.2 &nbsp;The FLOW Level</h2s>
              <p>Python's standard logging module defines five severity levels: DEBUG (10), INFO (20), WARNING (30), ERROR (40), and CRITICAL (50). These levels were designed for operational monitoring of conventional software and do not map cleanly onto the observability needs of an AI pipeline.</p>
              <p>The TEAI system introduces a custom <code>FLOW</code> level at numeric value <strong>25</strong>, positioned between INFO and WARNING. FLOW events are more significant than verbose DEBUG output — they represent meaningful pipeline transitions — but they are less urgent than INFO events that represent operational state changes.</p>
              <Callout type="teal" icon="i">
                The choice of numeric value 25 for FLOW is not arbitrary. A logging configuration set to level WARNING (30) will suppress both FLOW and INFO output, yielding a clean operational-only log stream. A configuration set to FLOW (25) will emit FLOW events plus all higher-severity events. This gives operators a clean toggle between production monitoring mode and development visibility mode — without any code changes.
              </Callout>

              <h2s>2.3 &nbsp;Designing for Budget Constraints</h2s>
              <p>A significant constraint on this system's design is that it must operate on Render.com's free tier with a limited OpenAI API budget. This constraint is not a temporary limitation to be engineered around — it is a design requirement that shapes the architecture in ways that turn out to be broadly applicable.</p>
              <p>Designing for budget constraints forces precision. Every API call must be accountable. Every token that enters a prompt must be justified. The specific cost tracking targets for the TEAI system are: embedding API calls (model, token count, estimated cost per call), chat completion calls (model, input tokens, output tokens, estimated cost per call), and cumulative cost per session and per day. These metrics are captured as structured fields in FLOW-level log events, making them available for aggregation in the monitoring dashboard without requiring a separate cost tracking service.</p>

              <h2s>2.4 &nbsp;The Instance Name Pattern</h2s>
              <p>The TEAI project consists of multiple RAG application instances — currently <strong>PT Billing Assistant</strong>, <strong>Interview Q&amp;A</strong>, and <strong>Healthcare Certifications</strong> — all sharing the same underlying infrastructure. The instance name pattern addresses this by injecting a short application identifier — <code>ptbill</code>, <code>intvqa</code>, <code>hccerts</code> — into every log record at the formatter level. Log streams from all instances can be aggregated into a single receiver and filtered by instance name without any change to the logging calls at the application level.</p>
            </Collapsible>

            <Collapsible id="ch3" header={<h1s>Chapter 3: The Call Flow Tracer</h1s>}>
              <h2s>3.1 &nbsp;What the Tracer Does</h2s>
              <p>The call flow tracer is a decorator-based instrumentation system that automatically logs the entry and exit of decorated functions, their execution timing, and optionally their arguments and return values. Its primary purpose is to make the sequence of operations within the RAG pipeline visible without requiring the developer to manually insert logging statements at every function boundary.</p>
              <p>In a system as compositional as a RAG pipeline — where a single user query triggers a sequence of calls through query analysis, document retrieval, relevance grading, prompt construction, and answer generation — understanding the exact sequence and timing of function calls is essential for diagnosing performance bottlenecks and logic errors.</p>

              <h2s>3.2 &nbsp;The Decorator Pattern</h2s>
              <p>The tracer is implemented as a class whose primary interface is a decorator factory method. When applied to a function, the decorator wraps the original function without modifying its signature, behavior, or return value. The indentation of FLOW log entries reflects the call depth — deeper calls produce more indented entries, creating a visual representation of the call tree. This is achieved through <strong>thread-local storage</strong> of a call stack, ensuring that concurrent requests in a multi-threaded Flask server do not corrupt each other's call stacks.</p>

              <h2s>3.3 &nbsp;What the Tracer Reveals</h2s>
              <p>The most immediately useful insight the tracer provides is timing. Common surprising discoveries in RAG pipeline timing analysis include: the embedding model API call for query embedding taking longer than the vector store search it enables; the prompt construction logic consuming a non-trivial fraction of total request time when the retrieved context is large; the LLM generation time varying by an order of magnitude between simple factual queries and complex synthesis questions.</p>
              <p>The tracer also reveals sequencing issues. In the LangGraph-based workflow, FLOW-level tracing of each node function makes the actual execution order visible in the log, which is particularly useful when conditional edges — such as the <code>should_use_fb</code> decision point routing between the <code>generate</code> and <code>fallback</code> nodes — are not behaving as expected.</p>
              <Callout type="amber" icon="!">
                The tracer is a development and debugging tool, not a production monitoring tool. In a high-traffic production system, tracing every function call would generate prohibitive log volume. The design includes a per-instance enable/disable toggle precisely to support this: tracing is enabled during development sessions and disabled in production without code changes.
              </Callout>

              <h2s>3.4 &nbsp;Current State and Planned Evolution</h2s>
              <p>In the current implementation, the <code>@trace</code> decorator is defined on many functions but <em>commented out</em> in most of them. The commented decorators are placeholders that mark where tracing will be activated as the system matures. Planned evolution includes async support and selective per-module tracing.</p>
            </Collapsible>

            <Collapsible id="ch4" header={<h1s>Chapter 4: The HTTP Log Handler</h1s>}>
              <h2s>4.1 &nbsp;Why a Custom Log Handler</h2s>
              <p>Python's standard <code>SocketHandler</code> sends raw Python log record objects over a TCP socket, requiring a compatible Python receiver. <br />
              The TEAI log receiver is a Flask web service, not a raw socket listener, and <code>SocketHandler</code> does not support batching — each log record would be sent as a separate network request. The custom <code>HTTPLogHandler</code> serializes log records to JSON, sends them via HTTP POST, and batches records using a background thread and queue.</p>

              <h2s>4.2 &nbsp;The Background Thread Architecture</h2s>
              <p>The <code>HTTPLogHandler</code> uses a <strong>producer-consumer pattern</strong> with a thread-safe queue. The main app threads (producers) call <code>emit()</code> on the handler, which serializes the log record and places it in the queue without blocking. A single background daemon thread (consumer) reads from the queue, accumulates records into batches, and sends the batches to the receiver endpoint.</p>
              <p>This architecture ensures that logging never blocks the main application thread. If the log receiver is temporarily unavailable, records accumulate in the queue and are delivered when connectivity is restored. The handler also implements <strong>graceful shutdown</strong>: the <code>close()</code> method signals the background thread to stop, waits for it to finish delivering any remaining queued records, and then closes the HTTP session.</p>

              <h2s>4.3 &nbsp;Trace Event Enrichment</h2s>
              <p>The <code>HTTPLogHandler</code> performs additional processing on FLOW-level log records before forwarding them to the receiver. It adds structured metadata fields to the forwarded JSON payload: <code>trace_type</code> (enter, exit, or error), <code>trace_depth</code> (call stack depth inferred from indentation), and <code>is_trace</code> (a boolean flag distinguishing FLOW records from operational records). This enrichment means that the log receiver can store and display trace events differently from operational events.</p>
            </Collapsible>

            {/* ══ PART III ══ */}
            <div id="part3"><PartBlock label="Part III" title="The Plan: Where This Is Going" /></div>

            <Collapsible id="ch5" header={<h1s>Chapter 5: Cost Tracking — The Highest Priority</h1s>}>
              <h2s>5.1 &nbsp;What Needs to Be Tracked</h2s>
              <p>Token-based API pricing means that the cost of a RAG query is not a fixed number<br /> 
                — it is a function of the query length, the number of documents retrieved,<br /> 
                the length of those documents, and the length of the generated response.<br />
                The minimum viable cost tracking implementation requires capturing five data points for every query:</p>
              <table style={{ width: '98%', borderCollapse: 'collapse', margin: '12px 0 16px 16px', fontFamily: 'monospace', fontSize: '1.0rem' }}>
                <thead>
                  <tr>
                    <th style={{ background: '#154360', color: 'white', padding: '7px 10px', textAlign: 'left' }}>Data Point</th>
                    <th style={{ background: '#154360', color: 'white', padding: '7px 10px', textAlign: 'left' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: '#f4f6f8' }}>
                      Embedding token count
                    </td>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: '#f4f6f8' }}>
                      Tokens consumed generating the query vector
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: 'white' }}>
                      Prompt token count
                    </td>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: 'white' }}>
                      Total tokens sent to the <u>generation model</u> (system instr + retrieved context + user query)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: '#f4f6f8' }}>
                      Completion token count
                    </td>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: '#f4f6f8' }}>
                      Tokens in the generated response
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: 'white' }}>
                      Model identifier
                    </td>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: 'white' }}>
                      Since per-token pricing varies by model
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: '#f4f6f8' }}>
                      Estimated cost USD
                    </td>
                    <td style={{ padding: '6px 10px', borderBottom: '1px solid #ddd', verticalAlign: 'top', fontFamily: 'monospace', fontSize: '1.0rem', background: '#f4f6f8' }}>
                      Computed from the above using current pricing schedule
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2s>5.2 &nbsp;Where the Instrumentation Lives</h2s>
              <p>Cost tracking instrumentation belongs in the <strong>RAG graph node functions</strong>. The <code>gen_a</code> and <code>fallback_a</code> nodes in the RAG graph are the points where <code>ChatOpenAI</code> is called. The LangChain response object returned by these calls includes a <code>response_metadata</code> field containing the token usage reported by the OpenAI API. Extracting this field and logging it as a structured FLOW event is the implementation path for accurate, API-reported (rather than estimated) token counting.</p>

              <h2s>5.3 &nbsp;Cost Data in the Monitoring Dashboard</h2s>
              <p>The planned cost panel will show: current-session total cost, daily total cost with trend indicator, per-model cost breakdown across <code>gpt-4o-mini</code> and <code>text-embedding-3-small</code>, and a per-query cost histogram showing the distribution of query costs. These panels give the information needed to make tuning decisions: reducing top-k retrieval, switching to a cheaper model for specific query types, or implementing context window guards that cap the token count of retrieved context.</p>
            </Collapsible>

            <Collapsible id="ch6" header={<h1s>Chapter 6: The Log Receiver and Monitoring Dashboard</h1s>}>
              <h2s>6.1 &nbsp;Architecture of the Log Receiver</h2s>
              <p>The log receiver is a small Flask application deployed as a separate web service on Render.com's free tier. Its responsibilities are narrow: accept incoming log batches from all TEAI service instances, buffer them in memory, persist them to a rolling file store, and stream them to connected monitoring dashboard clients via <strong>Server-Sent Events (SSE)</strong>.</p>
              <p>The receiver is intentionally stateless between restarts — it does not maintain a database, does not process or analyze log records, and does not generate alerts. Keeping it simple makes it more reliable and easier to debug. When a dashboard client connects, the receiver sends the last 50 buffered log records as an initial burst, then streams new records as they arrive. Keep-alive pings are sent on 30-second intervals to prevent proxy servers from closing idle connections.</p>

              <h2s>6.2 &nbsp;Multi-Instance Log Aggregation</h2s>
              <p>Every log record arriving at the receiver carries an instance identifier — <code>ptbill</code>, <code>intvqa</code>, <code>hccerts</code> — that can be used for filtering. The monitoring dashboard exposes an instance filter control that allows the operator to view all instances simultaneously, or to scope the display to a single instance.</p>

              <h2s>6.3 &nbsp;The Dashboard Design</h2s>
              <p>The monitoring dashboard is a React application that connects to the log receiver's SSE endpoint and maintains a real-time display of the log stream. Design priorities, in order: legibility of log records under rapid update conditions; filterability by instance and log level; visibility of FLOW-level trace events with indentation preserved; and cost panel display.</p>
              <p>The dark-background terminal-style design is intentional. Color coding log levels — <code>DEBUG</code> in gray, <code>INFO</code> in blue, <code>FLOW</code> in teal, <code>WARNING</code> in amber, <code>ERROR</code> in red — allows the eye to instantly locate error events in a dense log stream. The <strong>pause/resume control</strong> allows the operator to freeze the stream to examine a specific sequence of events without losing any records.</p>
            </Collapsible>

            <Collapsible id="ch7" header={<h1s>Chapter 7: The Vector Store and Retrieval Observability</h1s>}>
              <h2s>7.1 &nbsp;What the Vector Store Currently Logs</h2s>
              <p>The current <code>VectorStore</code> implementation logs at FLOW level at the entry points to its primary operations: initialization, collection creation, and search. These logs capture the most operationally significant events without instrumenting every internal detail of the ChromaDB interaction.</p>

              <h2s>7.2 &nbsp;Retrieval Quality Signals</h2s>
              <p>The most important retrieval quality signal is the <strong>similarity score of the top retrieved chunk</strong>. <br />
              In ChromaDB's <code>similarity_search</code> interface, these scores are not returned by default<br />
               — the <code>similarity_search_with_score</code> variant must be used. <br />
               The planned evolution of the <code>VectorStore</code> class is to switch to this variant internally <br />
               and log the scores as structured fields in the FLOW event.</p>
              <CompTable
                headers={['Score Range', 'Interpretation', 'Action']}
                rows={[
                  ['> 0.8',    'Excellent match — query well-aligned to knowledge base', 'No action needed'],
                  ['0.6 – 0.8','Good match — retrieved context likely useful',           'Monitor trend'],
                  ['0.4 – 0.6','Marginal match — answer quality may be reduced',         'Review chunking strategy'],
                  ['< 0.4',    'Poor match — topic may not be in knowledge base',         'Re-ingest or expand KB'],
                ]}
              />

              <h2s>7.3 &nbsp;The Prompt as an Observable</h2s>
              <p>The complete prompt sent to the language model is the most informative single observable in the entire RAG pipeline. <br />
              Logging the complete prompt on every query would generate enormous log volume. <br />
              The planned approach is to log a <strong>prompt summary</strong> instead: <br />
              the total token count, the number of retrieved passages included, the source identifiers of those passages, <br />
              the top similarity score, and the first 100 characters of the user query. <br />
              Full prompt logging is reserved for specific debugging sessions, activated by a configuration flag on a per-instance basis.</p>
            </Collapsible>

            {/* ══ PART IV ══ */}
            <div id="part4"><PartBlock label="Part IV" title="Lessons, Principles and Next Steps" /></div>

            <Collapsible id="ch8" header={<h1s>Chapter 8: Design Principles Emerging from This Work</h1s>}>
              <h2s>8.1 &nbsp;Log for Analysis, Not Just for Operations</h2s>
              <p>The conventional wisdom about logging is that it exists to help engineers diagnose problems after they occur.<br />
              The more useful framing is that logging exists to generate a continuous data stream about <br />
              system behavior that enables both reactive diagnosis and proactive quality management. <br />
              In an AI system, the most important questions are "are the answers accurate?", "is the retrieval working?", and "is the system operating within budget?"<br />
               — none of which standard operational monitoring answers. <br />
               Building behavioral data capture into the system from the start is the principle this architecture embodies.</p>

              <h2s>8.2 &nbsp;Separate the Concerns of Each Log Level</h2s>
              <p>The mistake most logging syst
                ems make is using log levels as a volume control rather than a semantic classification. <br />
              The FLOW level introduced in this system is a step toward a different model: using log levels to route events to different analytical destinations. <br />
              FLOW events are behavioral data about the AI pipeline, not operational data about the service. Giving them their own level makes it possible to <br />
              route them to a different dashboard panel or a different storage backend without modifying the application code.</p>

              <h2s>8.3 &nbsp;Instrument the Seams</h2s>
              <p>In a compositional system like a RAG pipeline, the most valuable instrumentation points are the seams between components<br />
               — the points where data flows from one system to another. <br />
               The entry and exit of each LangGraph node — <code>analyze_query</code>, <code>retrieve_docs</code>, <code>grade_relevance</code>, <code>gen_a</code>, <code>fallback_a</code><br />
                — are the seams where the state object passes between processing stages. <br />
                Tracing these transitions, with logging of the key state fields at each point, <br />
                provides a complete picture of what happened to a query as it moved through the pipeline.</p>

              <h2s>8.4 &nbsp;Design for the Constraint</h2s>
              <p>Operating on a free-tier deployment with a limited API budget is the constraint that drives the cost monitoring work described in this document. <br />
              Building cost awareness into the system at this stage — when every API dollar is visible and consequential<br />
               — produces an instrumentation infrastructure that will remain valuable at any scale. <br />
               The constraint is the teacher. Designing for it produces a leaner, more portable, more operationally simple system than designing without it.</p>
            </Collapsible>

            <Collapsible id="ch9" header={<h1s>Chapter 9: Current State and Roadmap</h1s>}>
              <h2s>9.1 &nbsp;Complete</h2s>
              <CompTable
                headers={['Component', 'Notes']}
                rows={[
                  [<>FLOW log level (level 25) + <code>flow()</code> method</>,
                   "Registered, appears with 'F' indicator in console output"],
                  [<><code>InstanceFormatter</code> — instance name injection</>,
                   'Transparent; no changes required in application logging calls'],
                  [<><code>HTTPLogHandler</code> — queue, background thread, graceful shutdown</>, 
                  <>Trace event enrichment included; forwards to log receiver when <code>LOG_ENDPOINT_URL</code> is set</>],
                  [<><code>CallTracer</code> / <code>@trace</code> decorator</>,
                   'Depth tracking, timing, optional args/result. Decorators present but commented out pending dashboard completion'],
                  ['Log receiver Flask service',                                           
                  'SSE streaming, in-memory rolling buffer, multi-service aggregation'],
                ]}
              />

              <h2s>9.2 &nbsp;In Progress</h2s>
              <CompTable
                headers={['Component', 'Notes']}
                rows={[
                  ['Integration across all three TEAI instances',       
                  <><code>intvqa</code> most complete; pending in <code>hccerts</code> and <code>ptbill</code></>],
                  ['Monitoring dashboard React component',               
                  'SSE consumption and log display table implemented; filter controls, cost panel, retrieval quality panel pending'],
                  [<><code>@trace</code> activation in RAG graph nodes</>,
                  <><code>inspect.currentframe()</code> used as simpler interim alternative</>],
                ]}
              />

              <h2s>9.3 &nbsp; Planned</h2s>
              <CompTable
                headers={['Component', 'Priority']}
                rows={[
                  [<>OpenAI token usage extraction from LangChain <code>response_metadata</code></>, 
                  <><strong>Highest</strong> — direct impact on budget visibility</>],
                  [<>Similarity score logging via <code>similarity_search_with_score</code></>,       
                  'High — core retrieval quality signal'],
                  [<>Prompt summary logging in <code>retrieve_docs</code> and <code>gen_a</code></>,  
                  'High — enables end-to-end query quality analysis'],
                  ['Cost aggregation endpoint on log receiver',                                        
                  'Medium — depends on token extraction above'],
                  ['Async tracer support',                                                              
                  'Low — needed when async ingestion is added'],
                  ['Selective per-module tracing',                                                      
                  'Low — quality of life improvement for targeted debugging'],
                ]}
              />
            </Collapsible>

            {/* ── CONCLUSION ── */}
            <Collapsible id="conclusion" header={<h1s>Conclusion: Observability as an Engineering Practice</h1s>}>
              <p>The observability architecture described in this document is an expression of a particular engineering philosophy: <br />
              &nbsp;&nbsp;&nbsp;that understanding what a system is doing is as important as making it do what you want. <br />
              This philosophy is especially important in AI systems, where the gap between <br />
              &nbsp;&nbsp;&nbsp;"it appears to be working" and "it is actually working correctly" can be wide and invisible.</p>
              <p>Building this infrastructure takes time that could be spent on features. <br />
              The three-layer logging architecture, the custom FLOW level, the HTTP log handler, the call tracer <br />
              &nbsp;&nbsp;&nbsp;— none of these improve the accuracy of the RAG system's answers or add new capabilities to the user interface. <br />
              They are infrastructure, not product.</p>
              <p>But infrastructure compounds. The cost tracking work being built today will prevent budget surprises next month. <br />
              The retrieval quality monitoring will identify knowledge base gaps before users report incorrect answers. <br />
              The call flow tracing accelerates debugging of the inevitable PL issues that arise as the system is extended with <br />
              &nbsp;&nbsp;&nbsp;new document types, new query patterns and new app domains.</p>
              <p>Publishing this design while it is still in progress is itself an engineering practice <br />
              &nbsp;&nbsp;&nbsp;— the practice of thinking clearly about what you are building and why before you have finished building it. <br />
              That is what developing in public means. Not just sharing finished work, but sharing the work of thinking.</p>
            </Collapsible>

            {/* ── GLOSSARY ── */}
            <Collapsible id="glossary"  header={<h1s>Glossary</h1s>}>
              <DefBox term="Behavioral Log">A log event that captures a measurement of system behavior rather than an operational state change. <br />
              Examples: retrieval similarity score, prompt token count, LLM response latency. <br />
              Behavioral logs enable quality monitoring and cost tracking.</DefBox>
              <DefBox term="Call Stack (Trace)">The ordered sequence of function calls active at a given moment. In the TEAI tracer, <br />
              a thread-local call stack is maintained to track depth and provide indentation in log output.</DefBox>
              <DefBox term="Custom Log Level">A log severity level defined by the application beyond Python's standard five. <br />
              FLOW_LEVEL (25): For pipeline execution tracing at function-entry.</DefBox>
              <DefBox term="Daemon Thread">A background thread that terminates automatically when the main program exits. <br />
              The HTTPLogHandler's sender thread is a daemon thread, ensuring it does not prevent interpreter shutdown.</DefBox>
              <DefBox term="FLOW Level">The custom log level (25) introduced in the TEAI observability system for pipeline execution tracing.</DefBox>
              <DefBox term="HTTP Log Handler">A custom Python logging handler that serializes log records to JSON <br />
              and forwards them to a remote HTTP endpoint via POST requests. <br />
              Uses queue-based batching and a background thread to prevent network I/O from blocking app threads.</DefBox>
              <DefBox term="Instance Name">A short identifier (<code>ptbill</code>, <code>intvqa</code>, <code>hccerts</code>) injected into every log record <br />
              to identify which TEAI application produced the event. <br />
              Enables filtering of aggregated multi-instance log streams.</DefBox>
              <DefBox term="Log Receiver">A Flask web service that accepts log batches from multiple TEAI service instances, <br />
              buffers them in memory and streams them to monitoring dashboard clients via Server-Sent Events.</DefBox>
              <DefBox term="Operational Log">A log event that captures the health and status of a running service: <br />
              &nbsp;&nbsp;&nbsp;startup, shutdown, error conditions and significant state changes. <br />
              Operational logs answer "is the system healthy?"</DefBox>
              <DefBox term="Producer-Consumer Pattern">A concurrency pattern in which producer threads generate work items and place them in a shared queue, <br />
              while consumer threads remove and process them. <br />
              Used in the HTTPLogHandler to decouple log emission from log delivery.</DefBox>
              <DefBox term="Render.com Free Tier">Render.com's zero-cost hosting tier, providing web services, static sites &amp; background workers <br />
              with resource limitations. The TEAI system is designed to operate entirely within free-tier constraints.</DefBox>
              <DefBox term="SSE (Server-Sent Events)">A web standard for server-to-client streaming over HTTP. <br />
              The TEAI log receiver uses SSE to push log records to monitoring dashboard clients in real time. <br />
              Simpler than WebSockets for unidirectional streaming use cases.</DefBox>
              <DefBox term="Thread-Local Storage">A mechanism for storing data that is private to a specific thread. <br />
              Used in the TEAI call tracer to maintain per-thread call stacks, <br />
              ensuring that concurrent requests in a multi-threaded server do not corrupt each other's trace state.</DefBox>
              <DefBox term="Token Cost">The monetary cost of an <b>OpenAI API call</b>. <br />
              Computation: [input &amp; output token counts] X [per-token pricing for the specified model]. <br />
              Captured from API response metadata and logged as structured FLOW fields for cost aggregation.</DefBox>
              <DefBox term="@trace Decorator">A Python function decorator provided by the TEAI <code>CallTracer</code> class that automatically logs the entry, <br />
              exit, timing &amp; optionally the arguments &amp; return value of the decorated function at FLOW log level.</DefBox>
            </Collapsible>

          </div>{/* /doc-body */}
        </div>{/* /page-layout */}
      </main>

      <footer>
        <p>TEAI Systems &mdash; Developing in Public &nbsp;|&nbsp; Observability Engineering for RAG Systems</p>
      </footer>
    </div>
  );
}
