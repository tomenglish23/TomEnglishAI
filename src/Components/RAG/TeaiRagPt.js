import React, { useState } from "react";
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

const TEAIRagPT = () => {
  
  const API_BASE = 'https://pt-billing-assistant.onrender.com';

  // Shared state
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  /* const [mode, setMode] = useState('quick'); */
  const mode = 'quick';

  const COMMON_QUESTIONS_PT = [
    "What are posterior hip precautions?",
    "How do I bill when a PTA provides treatment?",
    "What is the 8-minute rule?",
    "Can I bill 97110 and 97530 together?",
    "What ICD-10 code for knee pain?",
    "How many PT visits does MassHealth cover?"
  ];

  // PT Billing submit handler
  async function handleSubmitPT(e) {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      const payload = {
        question: trimmed,
        mode: mode
      };

      const resp = await fetch(API_BASE + "/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        throw new Error(`API returned ${resp.status}`);
      }

      const data = await resp.json();
      setAnswer(data);
    } catch (err) {
      setAnswer({
        answer: `Error: ${err.message}. The PT Assistant API may be unavailable.`,
        mode: mode,
        confidence: 0,
        sources: [],
        use_fallback: false
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleQuestionClick(q) {
    setQuestion(q);
  }

  return (
    <center>
      <div style={{ opacity: 1.0 }}>
        <TopBar />
        <center>
          <p style={{ margin: '0px', fontSize: '1.86em', fontWeight: '1000', color: '#2475d2' }}>
            TEAI RAG System</p>
       </center>

        <main>

            <>
              <p className='h1ahome'><b>PT Billing Assistant</b></p>

              <div style={{ height: '2px' }} />

              <div style={{
                maxWidth: 840,
                margin: "1rem auto",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: 8,
                backgroundColor: '#f9f9f9'
              }}>

                {/* Mode Selector */}
                {/* <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                  <strong>Mode:</strong>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setMode('quick')}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: mode === 'quick' ? '#667eea' : '#f0f0f0',
                        color: mode === 'quick' ? 'white' : '#333',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: mode === 'quick' ? 'bold' : 'normal'
                      }}>
                      Quick Lookup
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('assistant')}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: mode === 'assistant' ? '#667eea' : '#f0f0f0',
                        color: mode === 'assistant' ? 'white' : '#333',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: mode === 'assistant' ? 'bold' : 'normal'
                      }}>
                      AI Assistant
                    </button>
                  </div>
                  <div style={{ fontSize: '0.85em', color: '#666', marginTop: '4px' }}>
                    {mode === 'quick' ? 'Fast code/modifier lookup' : 'Complex scenarios with calculations'}
                  </div>
                </div> */}

                {/* Common Questions */}
                <details style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
                  <summary style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: '#667eea',
                    marginBottom: '8px'
                  }}>
                    Common Questions
                  </summary>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                    {COMMON_QUESTIONS_PT.map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQuestionClick(q)}
                        style={{
                          textAlign: 'left',
                          padding: '10px',
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #e0e0e0',
                          borderLeft: '4px solid #667eea',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.9em'
                        }}>
                        {q}
                      </button>
                    ))}
                  </div>
                </details>

                {/* Search Form */}
                <form onSubmit={handleSubmitPT}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Ask a billing or clinical question..."
                      style={{
                        flex: 1,
                        padding: '12px',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !question.trim()}
                      style={{
                        padding: '12px 24px',
                        backgroundColor: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isLoading ? 'wait' : 'pointer',
                        fontWeight: 'bold',
                        opacity: (!question.trim() || isLoading) ? 0.5 : 1
                      }}>
                      {isLoading ? 'Searching...' : 'Ask'}
                    </button>
                  </div>
                </form>

                {/* Loading Indicator */}
                {isLoading && (
                  <div style={{
                    padding: '1rem',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    border: '1px solid #ddd'
                  }}>
                    <div style={{ fontSize: '1.2em', marginBottom: '8px' }}>Searching knowledge base...</div>
                    <div style={{ fontSize: '0.9em', color: '#666' }}>
                      {mode === 'quick' ? 'Vector search in progress...' : 'AI is analyzing and reasoning...'}
                    </div>
                  </div>
                )}

                {/* Answer Display */}
                {answer && !isLoading && (
                  <div style={{
                    backgroundColor: '#fff',
                    padding: '1.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      fontSize: '1.05em',
                      lineHeight: '1.6',
                      marginBottom: '1rem',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {answer.answer}
                    </div>

                    <details>
                      <summary style={{
                        cursor: 'pointer',
                        color: '#667eea',
                        fontSize: '0.9em',
                        fontWeight: 'bold'
                      }}>
                        Details
                      </summary>
                      <div style={{ marginTop: '10px', fontSize: '0.85em', color: '#666' }}>
                        <div>
                          <strong>Confidence:</strong>{' '}
                          <span style={{
                            color: answer.confidence > 0.7 ? '#4CAF50' :
                                   answer.confidence > 0.4 ? '#FF9800' : '#f44336'
                          }}>
                            {(answer.confidence * 100).toFixed(0)}%
                          </span>
                        </div>
                        {answer.mode && <div><strong>Mode:</strong> {answer.mode}</div>}
                        {answer.sources && answer.sources.length > 0 && (
                          <div><strong>Sources:</strong> {answer.sources.join(', ')}</div>
                        )}
                        {answer.use_fallback && (
                          <div style={{ color: '#FF9800' }}>Used general knowledge (not in knowledge base)</div>
                        )}
                      </div>
                    </details>
                  </div>
                )}

                {/* Tech Stack Badge */}
                <div style={{
                  marginTop: '0.5rem',
                  padding: '1rem',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  fontSize: '0.85em',
                  color: '#666',
                  textAlign: 'center'
                }}>
                  <strong>Tech Stack:</strong> Python • LangChain • LangGraph • OpenAI GPT-4 • ChromaDB • Flask
                  <br />
                  <strong>Deployment:</strong> Render.com (Serverless) • 25 YAML Knowledge Files
                  <br />
                  <strong>Knowledge Base:</strong> Medicare Part A & B • MassHealth • Clinical Protocols
                </div>
              </div>

              <div style={{ height: '40px' }} />
            </>

        </main>
      </div>
    </center>
  );
};

export default TEAIRagPT;