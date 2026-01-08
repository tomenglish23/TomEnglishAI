import React, { useState } from "react";
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TeaiRagPt() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState('quick');
  const [showPT, setShowPT] = useState(true);
  
  // NEW - Add these:
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [areas, setAreas] = useState([]);
  const [sampleQuestions, setSampleQuestions] = useState([]);
  const COMMON_QUESTIONS_PT = [
    "Does MassHealth require prior auth?",
    "How do I bill when a PTA provides treatment?",
    "What is the 8-minute rule?",
    "Can I bill 97110 and 97530 together?",
    "What ICD-10 code for knee pain?",
    "How many PT visits does MassHealth cover?"
  ];

  const COMMON_QUESTIONS_QA = [
    "What are Angular observables?",
    "Explain C# async/await",
    "What is dependency injection?",
    "How does garbage collection work in .NET?",
    "What is the difference between IEnumerable and IQueryable?"
  ];

  // Load areas for selected discipline
  async function loadAreas(discipline) {
    const areasByDiscipline = {
      "C#": [
        "Basic Knowledge",
        "OOPS Concepts",
        "Exception Handling",
        "Collections",
        "Delegates and Events",
        "LINQ",
        "Async and Await",
        "Garbage Collection",
        "Miscellaneous"
      ],
      "SQL SERVER": [
        "General",
        "Versions",
        "Programming Questions",
        "SQL Injection",
        "Backup Logs and Bulk Commands",
        "Users and Authentication",
        "Performance",
        "Normalization",
        "Types"
      ]
    };
    
    setAreas(areasByDiscipline[discipline] || []);
  }

  // Load sample questions for selected area
  async function loadSampleQuestions(discipline, area) {
    const samplesByCSharp = {
      "Basic Knowledge": [
        "Is C# object-oriented?",
        "What is boxing and unboxing?",
        "What is the difference between string and StringBuilder?",
        "What is the difference between ref and out parameters?",
        "What is the difference between const and readonly?"
      ],
      "OOPS Concepts": [
        "What is encapsulation?",
        "What is inheritance?",
        "What is polymorphism?",
        "What is the difference between overloading and overriding?",
        "What is a sealed class?"
      ],
      "Exception Handling": [
        "What is an exception?",
        "What is a try-catch block?",
        "What is a finally block?",
        "What are custom exceptions?"
      ],
      "Collections": [
        "What is a collection?",
        "What are generic collections?",
        "What is the difference between List and Dictionary?",
        "What is the difference between HashSet and List?"
      ],
      "Delegates and Events": [
        "What is a delegate?",
        "What is a multicast delegate?",
        "What is an event?",
        "What is the difference between delegate and event?"
      ],
      "LINQ": [
        "What is LINQ?",
        "What are the types of LINQ?",
        "What is the difference between IEnumerable and IQueryable?",
        "What is deferred execution in LINQ?"
      ],
      "Async and Await": [
        "What is asynchronous programming?",
        "What are async and await keywords?",
        "What is the difference between Task and Thread?",
        "What is Task.Run()?"
      ],
      "Garbage Collection": [
        "What is garbage collection?",
        "What are the generations in garbage collection?",
        "What is the difference between Dispose and Finalize?",
        "What is the using statement?"
      ],
      "Miscellaneous": [
        "What is the difference between String and string?",
        "What is a nullable type?",
        "What is the ?? operator?",
        "What is reflection?"
      ]
    };
    
    const samplesBySQL = {
      "General": [
        "What is SQL Server?",
        "What are the different types of databases?",
        "What is a primary key?",
        "What is a foreign key?",
        "What is normalization?"
      ],
      "Versions": [
        "What are the different SQL Server versions?",
        "What's new in SQL Server 2019?",
        "What are the editions of SQL Server?"
      ],
      "Programming Questions": [
        "What is a stored procedure?",
        "What is a trigger?",
        "What is a view?",
        "What is the difference between function and stored procedure?"
      ],
      "SQL Injection": [
        "What is SQL injection?",
        "How do you prevent SQL injection?",
        "What are parameterized queries?"
      ],
      "Backup Logs and Bulk Commands": [
        "What is a backup?",
        "What are the types of backups?",
        "What is a transaction log?",
        "What is bulk insert?"
      ],
      "Users and Authentication": [
        "What is a SQL Server login?",
        "What is a database user?",
        "What is the difference between Windows and SQL authentication?",
        "What are database roles?"
      ],
      "Performance": [
        "What is an index?",
        "What is query optimization?",
        "What is execution plan?",
        "What are statistics?"
      ],
      "Normalization": [
        "What is normalization?",
        "What is 1NF, 2NF, 3NF?",
        "What is denormalization?",
        "When should you denormalize?"
      ],
      "Types": [
        "What are SQL Server data types?",
        "What is VARCHAR vs NVARCHAR?",
        "What is INT vs BIGINT?",
        "What is DATETIME vs DATETIME2?"
      ]
    };
    
    if (discipline === "C#") {
      setSampleQuestions(samplesByCSharp[area] || []);
    } else if (discipline === "SQL SERVER") {
      setSampleQuestions(samplesBySQL[area] || []);
    }
  }

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

      const resp = await fetch("https://pt-billing-assistant.onrender.com/api/query", {
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

  async function handleSubmitQA(e) {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      // Send question + filters to your API
      const resp = await fetch("https://intv-qa-assistant-1.onrender.com/api/query", {
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

  function handleQuestionClick(q) {
    setQuestion(q);
  }
  
  return (
    <center>
      <div style={{ opacity: 1.0 }}>
        <TopBar />
        <header>
          <h1>TEAIRAG System</h1>
          <p>Retrieval-Augmented Generation Demonstrations</p>
          <p>First request: 50-60 seconds (Render's free tier has a cold start).</p> 
        </header>

        <main>
          {/* Toggle Button */}
          <button 
            onClick={() => {
              setShowPT(!showPT);
              setQuestion("");
              setAnswer(null);
            }}
            style={{ 
              padding: '12px 24px', 
              fontSize: '1.1rem',
              backgroundColor: '#667eea', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
            Switch to {showPT ? 'Interview Q&A' : 'PT Billing'}
          </button>

          {/* PT DEMO */}
          {showPT && (
            <>
              <p className='h1ahome'><b>PT Billing Assistant</b></p>
              <p className='h5homem'>Powered by LangChain + LangGraph + OpenAI + ChromaDB <br />
                <span style={{ fontSize: '0.85em', color: '#666', maxWidth: 840 }}>
                  Hosted on Render.com | 36 Knowledge Files | Medicare A/B + Medicaid + MassHealth + Clinical Protocols<br />
                  Deployed on Render.com for cost-optimized serverless Python hosting.<br /> 
                  Demonstrates multi-cloud architecture alongside our Azure-based systems.<br />
                  Coming Soon: Search by topic (Medicare, Medicaid, MassHealth, Clinical Protocols)
                </span>
              </p>

              <div style={{ height: '11px' }} />

              <div style={{ maxWidth: 840, margin: "1rem auto", padding: "1rem", border: "1px solid #ccc",
                            borderRadius: 8, backgroundColor: '#f9f9f9' }}>

                {/* Mode Selector */}
                <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                  <strong>Mode:</strong>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setMode('quick')}
                      style={{ padding: '8px 16px', backgroundColor: mode === 'quick' ? '#667eea' : '#f0f0f0',
                               color: mode === 'quick' ? 'white' : '#333', border: 'none',
                               borderRadius: '4px', cursor: 'pointer', fontWeight: mode === 'quick' ? 'bold' : 'normal' }}>
                      Quick Lookup
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('assistant')}
                      style={{ padding: '8px 16px', backgroundColor: mode === 'assistant' ? '#667eea' : '#f0f0f0',
                               color: mode === 'assistant' ? 'white' : '#333', border: 'none',
                               borderRadius: '4px', cursor: 'pointer', fontWeight: mode === 'assistant' ? 'bold' : 'normal' }}>
                               AI Assistant
                    </button>
                  </div>
                  <div style={{ fontSize: '0.85em', color: '#666', marginTop: '4px' }}>
                    {mode === 'quick' ? 'Fast code/modifier lookup' : 'Complex scenarios with calculations'}
                  </div>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSubmitPT}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Ask a billing or clinical question..."
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

                {/* Common Questions */}
                <details style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 'normal', color: '#700', marginBottom: '8px' }}>
                    Common Questions
                  </summary>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                    {COMMON_QUESTIONS_PT.map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQuestionClick(q)}
                        style={{ textAlign: 'left', padding: '10px', backgroundColor: '#f8f9fa', border: '1px solid #e0e0e0',
                          borderLeft: '4px solid #667eea', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9em' }}>
                        {q}
                      </button>
                    ))}
                  </div>
                </details>

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
                <div style={{ marginTop: '0.5rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '4px',
                              fontSize: '0.85em', color: '#666', textAlign: 'center' }}>
                  <strong>Tech Stack:</strong> Python • LangChain • LangGraph • OpenAI GPT-4 • ChromaDB
                  <br />
                  <strong>Knowledge Base:</strong> 110+ Questions • C# & SQL SERVER • Hierarchical Navigation
                </div>
              </div>
              <div style={{ height: '40px' }} />
            </>
          )}

          {/* INTERVIEW Q&A DEMO */}
          {!showPT && (
            <>
              <p className='h1ahome'><b>Interview Q&A RAG System</b></p>
              <p className='h5homem' style={{ marginBottom: '8px' }}>
                Powered by LangChain + LangGraph + OpenAI + ChromaDB<br />
                C# Interview Questions | Hierarchical Navigation
              </p>

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
          )}




        </main>
      </div>
    </center>
  );
}