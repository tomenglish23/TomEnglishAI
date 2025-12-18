// Rebuild → copy to docs → commit → push

import React, { useState } from "react";
import "./TEAIChatbotDemo.css";

export default function ChatbotPostDemo2() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postId = "TEAI_FB_DEMO_001"; // placeholder for your flow engine later

    function addComment(author, text, fromBot) {
  setComments(prev => {
    const id = prev.length ? Math.max(...prev.map(x => x.id)) + 1 : 1;
    return [...prev, { id, author, text, fromBot }];
  });
}

  const COMMANDS = [
    { cmd: "!solid",  label: "SOLID",  help: "SOLID principles explanation" },
    { cmd: "!cicd",   label: "CICD",   help: "CI/CD overview" },
    { cmd: "!sanity", label: "Sanity", help: "Sanity check round-trip" },
    { cmd: "!chatbot", label: "Chatbot", help: "Beginning of TEAIChatbot Whitepaper" }
  ];

  async function getBotReply() {

    const commentId =
      (typeof window !== "undefined" &&
      window.crypto &&
      typeof window.crypto.randomUUID === "function")
        ? window.crypto.randomUUID()
        : `CMT_${Date.now()}_${Math.random().toString(16).slice(2)}`;

    const payload = {
      SourceChannel: "LocalDemo",
      UserId: "USER_001",
      PostId: "POST_001",
      CommentId: commentId,
      OriginalText: input,
      TriggerMatched: true,
      CreatedUtc: new Date().toISOString()
    };

    const API_BASE = "https://api.tomenglishai.com";

    const resp = await fetch(`${API_BASE}/ingress`, {   // /events
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const raw = await resp.text(); // read once
    console.log("RAW:", raw);

    if (!resp.ok) {
      throw new Error(`Ingress HTTP ${resp.status}: ${raw}`);
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      throw new Error(`Ingress returned non-JSON: ${raw}`);
    }

    console.log("PARSED:", data);
    console.log("PARSED.text:", data.text);

    return data.text ?? "[No text field returned]";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let trimmed = postId; 
    trimmed = input.trim();
    if (!trimmed) return;

    setInput("");
    setIsSubmitting(true);

    try {
      const reply = await getBotReply();
      addComment("TEAIChatbot", reply, true);
    } catch (err) {
      addComment("TEAIChatbot", "There was an error generating a reply. The TEAIChatbot API may be unavailable.", true);
    } finally {
      setIsSubmitting(false);
    }
  }

return (
  <section className="teai-chatbot">
    <header className="teai-header">
      {/* <h1>TEAIChatbot — Distributed Conversation Pipeline (Live System)</h1> */}
      <h1>TEAI Chatbot - Demo2</h1>

      <p>
        This page exercises a production-oriented chatbot architecture designed
        to ingest conversation events from multiple channels, orchestrate
        deterministic or AI-assisted flows, &amp; return structured responses.
      </p>

      <p>
        The UI is intentionally minimal. The emphasis is on backend
        architecture, contracts, cloud integration &amp; extensibility, not UI
        polish.
      </p>
    </header>

    {/* your existing sections stay here exactly as-is */}
    {/* Architecture Overview, Tech Stack, Core, etc... */}

    {/* Put the live UI here so it inherits the same container & typography */}
    <section className="teai-section">
      <h2>Live Demo</h2>

      <p className="teai-muted">
        Commands send a payload to the TEAIChatbot API &amp; display the returned text.
      </p>

      <div className="teai-live">
        <div className="teai-live-row">
          {/* <div className="teai-live-label">Commands</div> */}

          <div className="teai-live-buttons">
            Commands: {COMMANDS.map(x => (
              <button
                key={x.cmd}
                type="button"
                className="teai-pill"
                onClick={() => setInput(x.cmd)}
                title={x.help}>
                {x.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="teai-live-actions">
          <button type="submit" className="teai-primary" disabled={isSubmitting || !input.trim()}>
            {isSubmitting ? "Posting..." : "Post command"}
          </button>

          <button
            type="button"
            className="teai-secondary"
            onClick={() => setComments([])}
            disabled={comments.length === 0}
          >
            Clear
          </button>

          <span className="teai-muted teai-live-selected">
            &nbsp; Selected: <code>{input || "(none)"}</code>
          </span>
        </form>

        <div className="teai-live-response">
          <div className="teai-live-label">Response</div>

          <div className="teai-response-box">
            {comments.length === 0 ? (
              <div className="teai-muted">No response yet</div>
            ) : (
              comments.map(c => (
                <div key={c.id} className="teai-response-item">
                  {c.text.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  </section>
);
}
