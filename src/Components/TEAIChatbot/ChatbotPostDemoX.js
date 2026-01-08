import React, { useState } from "react";

// DELETE THESE LINES:
// import { msalInstance, msalConfig } from '../../authConfig';
// const accounts = msalInstance.getAllAccounts();
// ... all the token stuff

export default function ChatbotPostDemoX() {
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

  const [apiBackend, setApiBackend] = useState('api'); // 'api', 'func', or 'debug'

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

    const API_BASES = {
      api: "https://api.tomenglishai.com",
      func: "https://teai-chatbot-functions-dybwakenb8atb7fu.eastus-01.azurewebsites.net/api"
      /* , render: "https://pt-billing-assistant.onrender.com/api" */
    };
    /* Swap once DNS is configured
    const API_BASES = {
      api: "https://api.tomenglishai.com",
      func: "https://func.tomenglishai.com"
    }; */

    const API_BASE = API_BASES[apiBackend]; // fetch base URL

    /*
    Endpoints:
    Chatbot (App Service): api.tomenglishai.com/teaichatbot
    Chatbot (Function): teai-chatbot-functions-xxx.azurewebsites.net/api/teaichatbot
    PT Assistant (Function): teai-chatbot-functions-xxx.azurewebsites.net/api/ptquery

    Endpoints:
    Chatbot (App Service): api.tomenglishai.com/teaichatbot
    Chatbot (Function): func.tomenglishai.com/teaichatbot
    PT Assistant (Function): func.tomenglishai.com/ptquery
    */

    // console.log("Using API_BASE:", API_BASE);

/*     // Get token
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
      // User not logged in - trigger login
      await msalInstance.loginPopup({
        scopes: [`api://${msalConfig.auth.clientId}/.default`]
      });
    }

    const tokenResponse = await msalInstance.acquireTokenSilent({
      scopes: [`api://${msalConfig.auth.clientId}/.default`],
      account: msalInstance.getAllAccounts()[0]
    });

    const resp = await fetch(`${API_BASE}/ingress`, {   // /events
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenResponse.accessToken}`
       },
      body: JSON.stringify(payload),
    });
 */
    const resp = await fetch(`${API_BASE}/ingress`, {   // /events
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "X-API-Key": "demo-key-12345"
      },
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

    //return data.text ?? "[No text field returned]";
    return data.text ?? data.Text ?? "[No text field returned]";
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
    <div style={{ maxWidth: 840, height: 900, margin: "2rem auto", padding: "1rem", fontSize: 16, color: "#555",
                  fontSize: 16, color: "#555", border: "1px solid #ccc", borderRadius: 8 }}>
      <div style={{ marginBottom: "1rem" }}>
        <h1 style={{ marginBottom: 4 }}>TEAIChatbot Demo</h1>
        <p>Commands are sent to the TEAIChatbot API - (Azure App Service or Azure Function App).</p>
        <p style={{ textAlign: "left", marginBottom: 10 }}></p>

        <p style={{ textAlign: "left", marginBottom: 5 }}>
          This demos an Azure chatbot 
          which ingests conversation events from multiple channels, orchestrates
          deterministic or AI-assisted flows, &amp; returns structured responses. The UI is intentionally minimal.
        </p>

        <p style={{ textAlign: "left", marginBottom: 5 }}>
          'SOLID' and 'CICD' are examples of my 1000+ interview questions. 
        </p>
        <p style={{ textAlign: "left", marginBottom: 5 }}>
          'Sanity' is a round-trip sanity test.
        </p>
        <p style={{ textAlign: "left", marginBottom: 5 }}>
          'Chatbot' displays the beginning of the TEAIChatbot whitepaper.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8, alignItems: "center" }}>
          <label><b>Azure Backend:</b> </label>
          <select style={{padding: '5px'}} value={apiBackend} onChange={(e) => setApiBackend(e.target.value)}>
            <option value="api">App Service</option>
            <option value="func">Function App</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <b>Commands:</b> {COMMANDS.map(x => (
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

        <div style={{ marginTop: 8, textAlign: "left"}}>
          <button style={{ fontSize: 16 }} type="submit" disabled={isSubmitting || !input.trim()}>
            {isSubmitting ? "Posting..." : "Post command"}
          </button>
          &nbsp;
          <button style={{ fontSize: 16, opacity: comments.length ? 1 : 0.5 }}
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
        <div style={{ marginTop: 8, maxHeight: 490, paddingRight: 6, overflowY: "auto"}}>
          {comments.length === 0 ? (
            <p style={{ fontSize: 14, color: "#777" }}></p>
          ) : (
            comments.map(c => (
              <div key={c.id} style={{ padding: "0.5rem 0", borderTop: "1px solid #eee" }}>
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
