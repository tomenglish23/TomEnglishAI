import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AITerminology() {

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Terminology</h1>
                <p>Learn as I go ...</p>
            </header>            
            <main>
                


{/* =============================================================================== */}
<h1 className="bTopBlue">LLM Systems</h1>

  {/* ── TITLE ── */}
  {/* ── OVERVIEW ── */}
  <div className="section">
    <div className="summary">
      <p style={{marginBottom: '1.0rem'}}>
        Large Language Model (LLM) systems are advanced AI systems built on deep neural networks.<br />
        LLMs are designed to [process, understand &amp; generate] human-like text. <br />
        LLMs leverage massive datasets &amp; billions of parameters
        to learn [patterns, grammar &amp; context] from text. <br />
        This enables tasks such as [answering questions, writing content &amp; translating languages].
      </p>
      <p style={{marginBottom: '1.0rem'}}>
        LLMs are primarily based on the <strong>Transformer architecture</strong>. <br />
        This allows LLMs to learn [long-range dependencies &amp; contextual meaning] <br />
        in text through mechanisms like[self-attention &amp; multi-head attention].
      </p>
      <p style={{marginBottom: '1.0rem'}}>
       <strong>Significant computational resources</strong> are required for [training, deployment &amp; ongoing monitoring] <br />
        to ensure [performance, fairness &amp; alignment with user expectations].
      </p>
    </div>
  </div>

  {/* ── CORE COMPONENTS ── */}
  <div className="section">
    <h2>Core Components</h2>

    <div className="card">
      <span style={{color: '#0240d1', marginBottom: '0.1rem', fontSize: '1.05rem', width:'360px', fontWeight:'bold', fontFamily: 'monospace', display: 'inline-block'}}>
        Embedding Layer: </span> 
      <span style={{margin: 0, fontSize: '1.05rem', fontWeight: 500,  fontFamily: 'monospace'}}>Converts tokens (words or subwords) into dense numerical vectors.</span>
    </div>

    <div className="card">
      <span style={{color: '#0240d1', marginBottom: '0.1rem', fontSize: '1.05rem', width:'360px', fontWeight:'bold', fontFamily: 'monospace', display: 'inline-block'}}>
        Attention Mechanism: </span>
      <span style={{margin: 0, fontSize: '1.05rem', fontWeight: 500,  fontFamily: 'monospace'}}>Focuses on relevant parts of the input to understand context.</span>
    </div>

    <div className="card">
      <span style={{color: '#0240d1', marginBottom: '0.1rem', fontSize: '1.05rem', width:'360px', fontWeight:'bold', fontFamily: 'monospace', display: 'inline-block'}}>
        Feed-Forward Layers: </span>
      <span style={{margin: 0, fontSize: '1.05rem', fontWeight: 500,  fontFamily: 'monospace'}}>Capture complex patterns and relationships.</span>
    </div>

    <div className="card">
      <span style={{color: '#0240d1', marginBottom: '0.1rem', fontSize: '1.05rem', width:'360px', fontWeight:'bold', fontFamily: 'monospace', display: 'inline-block'}}>
        Normalization &amp; Residual Connections: </span>
      <span style={{margin: 0, fontSize: '1.05rem', fontWeight: 500,  fontFamily: 'monospace'}}>Improve training stability and performance.</span>
    </div>

    <div className="card">
      <span style={{color: '#0240d1', marginBottom: '0.1rem', fontSize: '1.05rem', width:'360px', fontWeight:'bold', fontFamily: 'monospace', display: 'inline-block'}}>
        Output Layer: </span>
      <span style={{margin: 0, fontSize: '1.05rem', fontWeight: 500,  fontFamily: 'monospace'}}>Generates predictions such as the next word or sentence.</span>
    </div>
  </div>

  {/* ── POPULAR MODELS ── */}
  <div className="section">
    <h2>Popular LLMs / Models</h2>
    <div className="card">
      <p>
        <code2>GPT-4 — OpenAI</code2>&nbsp;
        <code2>Google Gemini</code2>&nbsp;
        <code2>Anthropic Claude</code2>&nbsp;
        <code2>Meta LLaMA</code2>
      </p>
      <p>Used for: code generation, question answering, summarization, and conversational agents.</p>
    </div>
  </div>

  {/* ── WHAT IS INSIDE AN LLM ── */}
  <h2>What Is Inside an LLM?</h2>

  <div className="section">
    <div className="summary">
      <p>
        Think of an LLM as a very large statistical engine trained to predict the next piece of language. <br />
        It is not a brain, not a database, not a search engine. It is a layered math system that <br />
        &nbsp;&nbsp;<code2>turns text into numbers</code2>&nbsp;&rarr;&nbsp;
        <code2>runs those numbers through learned patterns</code2>&nbsp;&rarr;&nbsp; 
        <code2>turns the result back into text</code2>.
      </p>
    </div>
  </div>

  {/* Step 1 */}
  <div className="section">
    <div className="card">
      <h3_2>1. Tokens Instead of Words</h3_2>
      <p>
        An LLM does not see language the way humans do. It breaks text into small chunks called <strong>tokens</strong>. <br />
        A token might be a word, part of a word, or punctuation. <br />
        Each token becomes a number — that number is the starting point.
      </p>
      <div className="card-indent">
        <p>Example:&nbsp;&nbsp;
          <code2>"distributed systems"</code2>
          &nbsp;&rarr;&nbsp;
          <code2>"dis"</code2>&nbsp;<code2>"tributed"</code2>&nbsp;<code2>"systems"</code2>
        </p>
      </div>
    </div>
  </div>

  {/* Step 2 */}
  <div className="section">
    <div className="card">
      <h3_2>2. Embeddings: Turning Language into Vectors</h3_2>
      <p>
        Token numbers get converted into <strong>vectors</strong> — long lists of numbers that represent meaning. <br />
        This is why <b>similar ideas</b> sit close together in "vector space."
      </p>
      <div className="card-indent">
        <p><code2>".NET engineer"</code2> ends up near <code2>"C# developer"</code2></p>
        <p className="muted">
          This is the same concept behind RAG systems, vector DBs &amp; embeddings pipelines.
        </p>
      </div>
    </div>
  </div>

  {/* Step 3 */}
  <div className="section">
    <div className="card">
      <h3_2>3. Transformer Architecture (The Core Engine)</h3_2>
      <p>
        The modern LLM is built on the <strong>Transformer</strong> — the biggest breakthrough in AI language. <br />
        Instead of reading left to right like older models, the LLM looks at all tokens at once &amp; <br />
        decides which ones matter most for the current prediction.
      </p>
      <p>Transformer has: 
        <code2>Attention layers</code2>  <code2>Feed-forward neural layers</code2>  <code2>Normalization layers</code2>  <code2>Residual connections</code2>
      </p>
      <p style={{marginTop:'10px'}}>
        Each layer refines meaning <br />
        &nbsp;&nbsp;Early layers: &nbsp;&nbsp;Learn grammar <br />
        &nbsp;&nbsp;Middle layers: &nbsp;Learn context <br />
        &nbsp;&nbsp;Deep layers: &nbsp;&nbsp;&nbsp;Learn abstract reasoning patterns
      </p>
    </div>
  </div>

  {/* Step 4 */}
  <div className="section">
    <div className="card">
      <h3_2>4. Attention: The Secret Sauce</h3_2>
      <p>Attention lets the model focus on relationships between words.</p>
      <div className="card-indent">
        <p>Example: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"The server crashed because <strong>it</strong> ran out of memory"</p>
        <p>The model learns: <strong>"it"</strong> refers to <strong>"server"</strong>, not memory.</p>
      </div>
      <p style={{marginTop:'8px'}} className="muted">
        This is how LLMs handle [long context, code, architecture discussions &amp; system design].
      </p>
    </div>
  </div>

  {/* Step 5 */}
  <div className="section">
    <div className="card">
      <h3_2>5. Training Data</h3_2>
      <p>
        The model is trained on massive text datasets. <br />
        It does not memorize — it learns <strong>statistical patterns</strong> about [language, logic, structure &amp; reasoning].
      </p>
      <p style={{marginTop:'10px'}} className="muted">
        It has seen patterns across thousands of systems: <br />
        &nbsp;&nbsp;distributed AI architecture, RAG pipelines, cloud design, system orchestration &amp; multi-agent workflows.
      </p>
    </div>
  </div>

  {/* Step 6 */}
  <div className="section">
    <div className="card">
      <h3_2>6. Training Process</h3_2>
      <p>Training happens in two main stages:</p>

      <div className="card-indent">
        <p>1 — Pretraining: The model learns to predict the next token across billions/trillions of samples.</p>
      </div>

      <div className="card-indent">
        <p>2 — Alignment/Fine-Tuning: Humans guide the model toward helpful/safe/structured responses.</p>
      </div>
    </div>
  </div>

  {/* Step 7 */}
  <div className="section">
    <div className="card">
      <h3_2>7. Inference: What Happens When You Ask a Question</h3_2>
      <p>When you type a prompt, this sequence runs:</p>
      <div className="card-indent">
        <code2>Text becomes tokens</code2>
        <code2>Tokens become vectors</code2>
        <code2>Transformer layers process them</code2>
        <code2>Model predicts the next token</code2>
      </div>
      <p>This repeats — generating language one token at a time</p>
    </div>
  </div>

  {/* Step 8 */}
  <div className="section">
    <div className="card">
      <h3_2>8. Why It Can Reason</h3_2>
      <p>
        It does not truly "think." It predicts <strong>patterns of reasoning</strong> it has learned from human text. <br />
        But because reasoning itself is a pattern, the results often look like
        thinking.
      </p>
    </div>
  </div>

  {/* Step 9 */}
  <div className="section">
    <div className="card">
      <h3_2>9. Why RAG Matters</h3_2>
      <p>LLM knowledge: frozen at training time. <br />
         RAG pipelines: provide current data.</p>
      <div className="card-indent">
        <p>
          <code2>Reasoning Engine</code2>&nbsp;+&nbsp;<code2>Retrieval System</code2>&nbsp;+&nbsp;<code2>AI Fallback (when answers are not found)</code2>
          &nbsp;=&nbsp;<strong><code2>RAG Architecture</code2></strong>
        </p>
      </div>
      <p style={{marginTop:'10px'}} className="muted">
        Government &amp; Healthcare Enterprise teams, as well as TEAI products, use this AI architecture.
      </p>
    </div>
  </div>


<p style={{ marginTop: '200px', textAlign: 'right'}}>
    <a target="blank" style={{textDecoration: 'none', color: '#e3e3e3'}} 
        href="/TomEnglishAI/Presence/Private">...</a>
</p>
    </main>
        </div>
    )
}
