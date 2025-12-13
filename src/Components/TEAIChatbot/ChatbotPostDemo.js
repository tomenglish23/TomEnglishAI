import React, { useState } from "react";

export default function ChatbotPostDemo() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nextId, setNextId] = useState(1);

  const postId = "TEAI_FB_DEMO_001"; // placeholder for your flow engine later

    function addComment(author, text, fromBot) {
  setComments(prev => {
    const id = prev.length ? Math.max(...prev.map(x => x.id)) + 1 : 1;
    return [...prev, { id, author, text, fromBot }];
  });
}

  const commentId = crypto.randomUUID(); // or `CMT_${Date.now()}`

  const COMMANDS = [
    { cmd: "!solid",  label: "SOLID",  help: "SOLID principles explanation" },
    { cmd: "!cicd",   label: "CICD",   help: "CI/CD overview" },
    { cmd: "!sanity", label: "Sanity", help: "Sanity check round-trip" },
    { cmd: "!chatbot", label: "Chatbot", help: "Beginning of TEAIChatbot Whitepaper" }
  ];


  async function getBotReply(userText) {
    const payload = {
      SourceChannel: "LocalDemo",
      UserId: "USER_001",
      PostId: "POST_001",
      CommentId: commentId,
      OriginalText: userText,
      TriggerMatched: true,
      CreatedUtc: new Date().toISOString()
    };

    const API_BASE = "https://api.tomenglishai.com";

    const resp = await fetch(`${API_BASE}/ingress`, {   // /events
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // const resp = await fetch("/ingress", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload)
    // });

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

    const lower = trimmed.toLowerCase();

    /* if (lower === "!solid") {
      addComment("TEAIChatbot", "SOLID = Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.", true);
      setIsSubmitting(false);
      return;
    }

    if (lower === "!cicd") {
      addComment("TEAIChatbot", "CI/CD = automated build + test + deploy pipeline. CI validates each commit. CD ships to envs with gates.", true);
      setIsSubmitting(false);
      return;
    } 

    if (lower === "!sanity") {
      // This one still calls ingress so you prove round-trip
      // fall through to your existing await getBotReply(trimmed)
    } */

    //addComment("Visitor", `${trimmed} (id: ${commentId})`, false);

    setInput("");
    setIsSubmitting(true);

    try {
      const reply = await getBotReply(trimmed);
      addComment("TEAIChatbot", reply, true);
    } catch (err) {
      addComment("TEAIChatbot", "There was an error generating a reply. The TEAIChatbot API may be unavailable.", true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 840, margin: "2rem auto", padding: "1rem",
                  border: "1px solid #ccc", borderRadius: 8 }}>
      <div style={{ marginBottom: "1rem" }}>
        <h1 style={{ marginBottom: 4 }}>TEAI Chatbot</h1>
        <p style={{ fontSize: 14, color: "#555" }}>Commands are sent to the TEAIChatbot API</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
          Commands: {COMMANDS.map(x => (
            <button
              key={x.cmd}
              type="button"
              onClick={() => setInput(x.cmd)}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid #ccc",
                background: "white",
                cursor: "pointer",
                fontSize: 13
              }}
              title={x.help}
            >
              {x.label}
            </button>
          ))}
        </div>

       {/*  <textarea style={{ width: "100%", resize: "vertical", padding: 8, fontSize: 14 }}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Write a comment... Try !teai"
                  rows={3} /> */}
        <div style={{ marginTop: 8, textAlign: "left" }}>
          <button type="submit" disabled={isSubmitting || !input.trim()}>
            {isSubmitting ? "Posting..." : "Post command"}
          </button>
          &nbsp;
          <button style={{ opacity: comments.length ? 1 : 0.5 }}
            type="button"
            onClick={() => setComments([])}
            disabled={comments.length === 0} >
            Clear comments
          </button>
        </div>
      </form>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Response</strong>
        {/* scroll size and enable vertical scroll   No comments yet. Try <code>!teai</code>. */}
        <div style={{ marginTop: 8, maxHeight: 300, paddingRight: 6, overflowY: "auto"}}>
          {comments.length === 0 ? (
            <p style={{ fontSize: 14, color: "#777" }}></p>
          ) : (
            comments.map(c => (
              <div key={c.id} style={{ padding: "0.5rem 0", borderTop: "1px solid #eee" }}>
                {/* <div style={{ fontSize: 13, fontWeight: 600, color: c.fromBot ? "#1941f1" : "#333" }}>
                  {c.author}
                </div> */}
                <div style={{ fontSize: 14, textAlign: "left" }}>
                  {c.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>

              </div>)))}
        </div>
      </div>
    </div>
  );
}
