import React, { useState, useEffect } from "react";
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TEAIRagQA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // NEW - Add these:
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [areas, setAreas] = useState([]);
  const [sampleQuestions, setSampleQuestions] = useState([]);
  const [hierarchy, setHierarchy] = useState(null);
  
  // Load hierarchy on mount
  useEffect(() => {
    fetch('https://intv-qa-assistant-1.onrender.com/api/hierarchy')
      .then(res => res.json())
      .then(data => setHierarchy(data))
      .catch(err => console.error('Failed to load hierarchy:', err));
  }, []);

  // Load areas for selected discipline (dynamic from hierarchy)
  function loadAreas(discipline) {
    if (hierarchy && discipline) {
      const areas = hierarchy.areas[discipline] || [];
      setAreas(areas);
    } else {
      setAreas([]);
    }
  } 

  // Load sample questions for selected area
  function loadSampleQuestions(discipline, area) {
    if (hierarchy && discipline && area) {
      const topics = hierarchy.topics[discipline]?.[area] || [];
      setSampleQuestions(topics);
    } else {
      setSampleQuestions([]);
    }
  }

  async function handleSubmitQA(e) {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      // Send question + filters to your API
      //const the_url = "http://127.0.0.1:5000/api/query"
      const the_url = "https://intv-qa-assistant-1.onrender.com/api/query"
      const resp = await fetch(the_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          question: trimmed,
          discipline: selectedDiscipline || null,  // ← ADD THIS
          area: selectedArea || null                // ← ADD THIS
        }),
      });

      if (!resp.ok) {
        throw new Error(`API returned ${resp.status}`);
      }

      const data = await resp.json();
      setAnswer(data);
    } catch (err) {
      setAnswer({
        answer: `Error: ${err.message}. The Interview Q&A API may be unavailable.`,
        confidence: 0,
        sources: [],
        use_fallback: false
      });
    } finally {
      setIsLoading(false);
    }
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
            <p className='h5home'><b>Software Interview Q&A RAG System</b> - Hierarchical Navigation!</p>

            <div style={{ maxWidth: 840, margin: "1rem auto", padding: "1rem", border: "1px solid #ccc",
                          borderRadius: 8, backgroundColor: '#f9f9f9' }}>

              {/* Discipline Dropdown */}
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold', marginBottom: '4px', display: 'block' }}>
                  Select Discipline:
                </label>
                <select 
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    fontSize: '1rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px' 
                  }}
                  onChange={(e) => {
                    const discipline = e.target.value;
                    setSelectedDiscipline(discipline);
                    setSelectedArea('');
                    setSelectedQuestion('');
                    setQuestion('');
                    if (discipline) {
                      loadAreas(discipline);
                    } else {
                      setAreas([]);
                    }
                  }}
                  value={selectedDiscipline}
                >
                  <option value="">-- Choose a discipline --</option>
                  <option value="C#">C# (70+ questions)</option>
                  <option value="SQL SERVER">SQL SERVER (40+ questions)</option>
                </select>
              </div>

              {/* Area Dropdown (shows when discipline selected) */}
              {selectedDiscipline && (
                <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                  <label style={{ fontWeight: 'bold', marginBottom: '4px', display: 'block' }}>
                    Select Area:
                  </label>
                  <select 
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      fontSize: '1rem', 
                      border: '1px solid #ddd', 
                      borderRadius: '4px' 
                    }}
                    onChange={(e) => {
                      const area = e.target.value;
                      setSelectedArea(area);
                      setSelectedQuestion('');
                      setQuestion('');
                      // Load sample questions for this area
                      if (area) {
                        loadSampleQuestions(selectedDiscipline, area);
                      } else {
                        setSampleQuestions([]);
                      }
                    }}
                    value={selectedArea}
                  >
                    <option value="">-- Choose an area --</option>
                    {areas.map((area, idx) => (
                      <option key={idx} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Sample Questions Dropdown (shows when area selected) */}
              {selectedArea && sampleQuestions.length > 0 && (
                <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                  <label style={{ fontWeight: 'bold', marginBottom: '4px', display: 'block' }}>
                    Sample Questions:
                  </label>
                  <select 
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      fontSize: '1rem', 
                      border: '1px solid #ddd', 
                      borderRadius: '4px' 
                    }}
                    onChange={(e) => {
                      const q = e.target.value;
                      setSelectedQuestion(q);
                      setQuestion(q);
                    }}
                    value={selectedQuestion}
                  >
                    <option value="">-- Choose a sample question --</option>
                    {sampleQuestions.map((q, idx) => (
                      <option key={idx} value={q}>{q}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Search Form */}
              <form onSubmit={handleSubmitQA}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a technical interview question..."
                    style={{ flex: 1, padding: '12px', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !question.trim()}
                    style={{ padding: '12px 24px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '4px',
                      cursor: isLoading ? 'wait' : 'pointer', fontWeight: 'bold', opacity: (!question.trim() || isLoading) ? 0.5 : 1
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
                  <div style={{ fontSize: '0.9em', color: '#666' }}>Vector search in progress...</div>
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
                  <div style={{ fontSize: '1.05em', lineHeight: '1.6', marginBottom: '1rem', whiteSpace: 'pre-wrap' }}>
                    {answer.answer}
                  </div>

                  <details>
                    <summary style={{ cursor: 'pointer', color: '#667eea', fontSize: '0.9em', fontWeight: 'bold' }}>
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
                      {answer.sources && answer.sources.length > 0 && (
                        <div><strong>Sources:</strong> {answer.sources.join(', ')}</div>
                      )}
                    </div>
                  </details>
                </div>
              )}

              {/* Tech Stack Badge */}
              <div style={{ marginTop: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '4px',
                            fontSize: '0.85em', color: '#666', textAlign: 'center' }}>
                <strong>Tech Stack:</strong> Python • LangChain • LangGraph • OpenAI GPT-4 • ChromaDB
                <br />
                <strong>Knowledge Base:</strong> 70+ C# Questions • Hierarchical Navigation
              </div>
            </div>

            <div style={{ height: '40px' }} />
          </>

        </main>
      </div>
    </center>
  );
}