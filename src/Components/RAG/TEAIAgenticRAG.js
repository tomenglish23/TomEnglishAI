import React, { useState, useEffect, useCallback } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE || 'https://healthcare-certs-rag.onrender.com';

/**
 * Simple reusable modal
 */
/* const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: '8px', maxWidth: '800px',
        width: '90%', maxHeight: '80vh', overflow: 'auto', padding: '16px 20px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button onClick={onClose} style={{
            border: 'none', background: 'transparent', fontSize: '1.2em', cursor: 'pointer'
          }}>✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}; */

/**
 * Left sidebar: Section Explorer
 */
const SectionExplorer = ({ selectedState, selectedCert, selectedSection, onSelect }) => {
  const [sections, setSections] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/sections`)
      .then(r => r.json())
      .then(data => setSections(data))
      .catch(err => console.error('Sections load error:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div style={{ fontSize: '0.9em', color: '#666' }}>Loading sections…</div>;
  }

  if (!sections || Object.keys(sections).length === 0) {
    return <div style={{ fontSize: '0.9em', color: '#666' }}>No section structure available.</div>;
  }

  return (
    <div style={{ fontSize: '0.9em' }}>
      {Object.entries(sections).map(([state, certs]) => (
        <div key={state} style={{ marginBottom: '8px' }}>
          <div
            style={{
              fontWeight: state === selectedState ? '700' : '600',
              cursor: 'pointer',
              color: state === selectedState ? '#3f51b5' : '#333'
            }}
            onClick={() => onSelect({ state, cert: '', section: '' })}
          >
            {state}
          </div>
          {state === selectedState && (
            <div style={{ marginLeft: '10px', marginTop: '4px' }}>
              {Object.entries(certs).map(([cert, sections]) => (
                <div key={cert} style={{ marginBottom: '4px' }}>
                  <div
                    style={{
                      cursor: 'pointer',
                      fontWeight: cert === selectedCert ? '600' : '500',
                      color: cert === selectedCert ? '#303f9f' : '#555'
                    }}
                    onClick={() => onSelect({ state, cert, section: '' })}
                  >
                    {cert}
                  </div>
                  {cert === selectedCert && (
                    <div style={{ marginLeft: '10px', marginTop: '2px' }}>
                      {sections.map(sec => (
                        <div
                          key={sec}
                          style={{
                            cursor: 'pointer',
                            padding: '2px 0',
                            color: sec === selectedSection ? '#1a237e' : '#666',
                            textDecoration: sec === selectedSection ? 'underline' : 'none'
                          }}
                          onClick={() => onSelect({ state, cert, section: sec })}
                        >
                          {sec}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * Center: Section Viewer with collapsible panels
 */
const SectionViewer = ({ state, cert, section }) => {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [openPanels, setOpenPanels] = useState({
    facts: true,
    suggestions: true,
    chunks: false,
  });

  useEffect(() => {
    if (!state || !cert || !section) {
      setContent('');
      setMetadata(null);
      setChunks([]);
      setSuggestions([]);
      return;
    }

    // content
    fetch(`${API_BASE}/api/section-content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state, certification: cert, section })
    }).then(r => r.json()).then(d => setContent(d.content || '')).catch(console.error);

    // metadata
    fetch(`${API_BASE}/api/section-metadata`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state, certification: cert })
    }).then(r => r.json()).then(d => setMetadata(d || {})).catch(console.error);

    // chunks
    fetch(`${API_BASE}/api/section-chunks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state, certification: cert, section })
    }).then(r => r.json()).then(d => setChunks(d.chunks || [])).catch(console.error);

    // suggestions
    fetch(`${API_BASE}/api/section-suggestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state, certification: cert, section })
    }).then(r => r.json()).then(d => setSuggestions(d.suggestions || [])).catch(console.error);

  }, [state, cert, section]);

  if (!state || !cert || !section) {
    return (
      <div style={{ color: '#666', fontSize: '0.95em' }}>
        Select a state, certification, and section from the left to explore the knowledge base.
      </div>
    );
  }

  const togglePanel = (key) => {
    setOpenPanels(p => ({ ...p, [key]: !p[key] }));
  };

  return (
    <div>
      <h2 style={{ marginTop: 0, marginBottom: '8px' }}>
        {state} • {cert} • {section}
      </h2>

      {/* Raw content */}
      <div style={{
        padding: '10px 12px',
        borderRadius: '6px',
        border: '1px solid #ddd',
        backgroundColor: '#fafafa',
        marginBottom: '12px',
        whiteSpace: 'pre-wrap',
        fontSize: '0.95em',
        lineHeight: 1.5
      }}>
        {content || 'No content found for this section.'}
      </div>

      {/* Key facts */}
      <div style={{ marginBottom: '8px' }}>
        <div
          style={{ fontWeight: '600', cursor: 'pointer', fontSize: '0.9em' }}
          onClick={() => togglePanel('facts')}
        >
          {openPanels.facts ? '▼' : '▶'} Key Facts (cost, duration, requirements)
        </div>
        {openPanels.facts && (
          <div style={{
            padding: '8px 10px',
            borderRadius: '6px',
            border: '1px solid #eee',
            backgroundColor: '#fdfdfd',
            fontSize: '0.9em'
          }}>
            {metadata && Object.keys(metadata).length > 0 ? (
              <ul style={{ paddingLeft: '18px', margin: 0 }}>
                {metadata.cost && <li><strong>Cost:</strong> {metadata.cost}</li>}
                {metadata.duration && <li><strong>Duration:</strong> {metadata.duration}</li>}
                {metadata.requirements && <li><strong>Requirements:</strong> {metadata.requirements}</li>}
                {!metadata.cost && !metadata.duration && !metadata.requirements && (
                  <li>No structured metadata extracted yet for this certification.</li>
                )}
              </ul>
            ) : (
              <div>No structured metadata available for this certification.</div>
            )}
          </div>
        )}
      </div>

      {/* Suggested questions */}
      <div style={{ marginBottom: '8px' }}>
        <div
          style={{ fontWeight: '600', cursor: 'pointer', fontSize: '0.9em' }}
          onClick={() => togglePanel('suggestions')}
        >
          {openPanels.suggestions ? '▼' : '▶'} Suggested Questions (what to ask next)
        </div>
        {openPanels.suggestions && (
          <div style={{
            padding: '8px 10px',
            borderRadius: '6px',
            border: '1px solid #eee',
            backgroundColor: '#fdfdfd',
            fontSize: '0.9em'
          }}>
            {suggestions.length > 0 ? (
              <ul style={{ paddingLeft: '18px', margin: 0 }}>
                {suggestions.map((s, i) => (
                  s.trim() && <li key={i}>{s.replace(/^\d+[).\s-]*/, '')}</li>
                ))}
              </ul>
            ) : (
              <div>No suggestions generated yet.</div>
            )}
          </div>
        )}
      </div>

      {/* Chunks */}
      <div style={{ marginBottom: '8px' }}>
        <div
          style={{ fontWeight: '600', cursor: 'pointer', fontSize: '0.9em' }}
          onClick={() => togglePanel('chunks')}
        >
          {openPanels.chunks ? '▼' : '▶'} Retrieved Chunks (raw pieces of this section)
        </div>
        {openPanels.chunks && (
          <div style={{
            padding: '8px 10px',
            borderRadius: '6px',
            border: '1px solid #eee',
            backgroundColor: '#fdfdfd',
            fontSize: '0.9em',
            maxHeight: '220px',
            overflow: 'auto'
          }}>
            {chunks.length > 0 ? (
              chunks.map((c, i) => (
                <div key={i} style={{ marginBottom: '8px' }}>
                  <div style={{ fontWeight: '600', fontSize: '0.8em', color: '#666' }}>
                    Chunk {i + 1}
                  </div>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{c.text}</div>
                </div>
              ))
            ) : (
              <div>No chunks found for this section.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Right sidebar: simple Study Mode (foundation)
 */
const StudyMode = ({ lastAnswer }) => {
  const [saved, setSaved] = useState([]);
  const [summary, setSummary] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [nextSteps, setNextSteps] = useState([]);

  const loadSaved = useCallback(() => {
    fetch(`${API_BASE}/api/study/list`)
      .then(r => r.json())
      .then(d => setSaved(d || []))
      .catch(console.error);
  }, []);

  useEffect(() => {
    loadSaved();
  }, [loadSaved]);

  const handleSave = async () => {
    if (!lastAnswer) return;
    await fetch(`${API_BASE}/api/study/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lastAnswer)
    });
    loadSaved();
  };

  const generateSummary = async () => {
    const r = await fetch(`${API_BASE}/api/study/summary`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: saved })
    });
    const d = await r.json();
    setSummary(d.summary);
  };

  const generateFlashcards = async () => {
    const r = await fetch(`${API_BASE}/api/study/flashcards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: saved })
    });
    const d = await r.json();
    setFlashcards(d.flashcards || []);
  };

  const generateQuiz = async () => {
    const r = await fetch(`${API_BASE}/api/study/quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: saved })
    });
    const d = await r.json();
    setQuiz(d.quiz || []);
  };

  const generateNextSteps = async () => {
    const r = await fetch(`${API_BASE}/api/study/next`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: saved })
    });
    const d = await r.json();
    setNextSteps(d.next_steps || []);
  };

  return (
    <div style={{ fontSize: '0.85em' }}>
      <div style={{ fontWeight: '600', marginBottom: '8px' }}>Study Mode</div>

      <button onClick={handleSave} disabled={!lastAnswer}
        style={{ marginBottom: '8px', padding: '6px 10px', borderRadius: '4px',
                 backgroundColor: '#667eea', color: '#fff', border: 'none' }}>
        Save last answer
      </button>

      <div style={{ marginBottom: '12px' }}>
        <strong>Saved items:</strong> {saved.length}
      </div>

      <button onClick={generateSummary} style={{ marginBottom: '6px' }}>Generate Summary</button>
      {summary && <div style={{ whiteSpace: 'pre-wrap', marginBottom: '12px' }}>{summary}</div>}

      <button onClick={generateFlashcards} style={{ marginBottom: '6px' }}>Generate Flashcards</button>
      {flashcards.length > 0 && (
        <ul>
          {flashcards.map((fc, i) => (
            <li key={i}><strong>{fc.front}</strong>: {fc.back}</li>
          ))}
        </ul>
      )}

      <button onClick={generateQuiz} style={{ marginBottom: '6px' }}>Generate Quiz</button>
      {quiz.length > 0 && (
        <ul>
          {quiz.map((q, i) => (
            <li key={i}>
              <strong>{q.question}</strong>
              <ul>
                {q.choices.map((c, j) => <li key={j}>{c}</li>)}
              </ul>
              <em>Answer: {q.answer}</em>
            </li>
          ))}
        </ul>
      )}

      <button onClick={generateNextSteps} style={{ marginBottom: '6px' }}>Next Steps</button>
      {nextSteps.length > 0 && (
        <ul>
          {nextSteps.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      )}
    </div>
  );
};

/**
 * Original Q&A center panel (slightly adapted to fit layout)
 */
const TEAIAgenticRAG = () => {
  // Core state
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Config and taxonomies
  const [config, setConfig] = useState(null);
  const [taxonomies, setTaxonomies] = useState(null);

  // Filters
  const [selectedState, setSelectedState] = useState('');
  const [selectedCert, setSelectedCert] = useState('');
  const [selectedCost, setSelectedCost] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  // Explorer selection
  const [explorerState, setExplorerState] = useState('');
  const [explorerCert, setExplorerCert] = useState('');
  const [explorerSection, setExplorerSection] = useState('');

  const [showReasoning, setShowReasoning] = useState(false);
  const [availableCerts, setAvailableCerts] = useState([]);

  const queryTypeColors = {
    comparison: { bg: '#e3f2fd', text: '#1565c0', label: '⚖️ Comparison' },
    requirements: { bg: '#e8f5e9', text: '#2e7d32', label: '📋 Requirements' },
    cost_duration: { bg: '#fff3e0', text: '#ef6c00', label: '💰 Cost/Duration' },
    process: { bg: '#f3e5f5', text: '#7b1fa2', label: '🔄 Process' },
    study_material: { bg: '#e0f7fa', text: '#00838f', label: '📚 Study Guide' },
    renewal: { bg: '#fce4ec', text: '#c2185b', label: '🔄 Renewal' },
    general: { bg: '#f5f5f5', text: '#616161', label: '❓ General' }
  };

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/config`).then(r => r.json()),
      fetch(`${API_BASE}/api/taxonomies`).then(r => r.json())
    ]).then(([configData, taxData]) => {
      console.log('Loaded config:', configData);
      console.log('Loaded taxonomies:', taxData);
      setConfig(configData);
      setTaxonomies(taxData);
    }).catch(err => console.error('Failed to load config:', err));
  }, []);

  useEffect(() => {
    if (taxonomies?.state_certifications && selectedState) {
      const certs = taxonomies.state_certifications[selectedState] || [];
      setAvailableCerts(certs);
      if (selectedCert && !certs.includes(selectedCert)) {
        setSelectedCert('');
      }
    } else {
      setAvailableCerts(taxonomies?.discovered_certifications || taxonomies?.certifications || []);
    }
  }, [selectedState, taxonomies, selectedCert]);

  const getSampleQuestions = useCallback(() => {
    if (!config?.sample_questions) return config?.sample_questions?.default || [];
    if (selectedState && selectedCert) {
      const stateQuestions = config.sample_questions[selectedState];
      if (stateQuestions?.[selectedCert]) return stateQuestions[selectedCert];
    }
    if (selectedState && config.sample_questions[selectedState]?.general) {
      return config.sample_questions[selectedState].general;
    }
    return config.sample_questions.default || [];
  }, [config, selectedState, selectedCert]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      const response = await fetch(`${API_BASE}/api/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.trim(),
          filters: {
            state: selectedState || null,
            certification: selectedCert || null,
            cost_preference: selectedCost || null,
            duration_preference: selectedDuration || null
          }
        })
      });

      const data = await response.json();
      setAnswer({ ...data, question: question.trim() });
    } catch (error) {
      console.error('Search error:', error);
      setAnswer({ error: 'Search failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const askSampleQuestion = (q) => setQuestion(q);

  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.7) return '#4CAF50';
    if (confidence >= 0.4) return '#FF9800';
    return '#f44336';
  };

  if (!config || !taxonomies) {
    return (
      <div style={{ padding: '40px', textAlign: 'center',
                    fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ fontSize: '2em', marginBottom: '16px' }}>
          TEAI Agentic RAG 
        </div>
        <div>Loading Healthcare Certifications System...</div>
        <div style={{ fontSize: '0.9em', color: '#666', marginTop: '8px' }}>
          First load may take 60 seconds (free tier cold start)
        </div>
      </div>
    );
  }

  const sampleQuestions = getSampleQuestions();
  const stateOptions = taxonomies.discovered_states || taxonomies.states || [];
  const certOptions = availableCerts.length > 0 ? availableCerts : (taxonomies.discovered_certifications || taxonomies.certifications || []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px',
                  fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '24px', paddingBottom: '16px',
                       borderBottom: '3px solid #667eea' }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '1.8em', color: '#222',
                     display: 'flex', alignItems: 'center',
                     justifyContent: 'center', gap: '12px' }}>
          <span>TEAI Agentic RAG</span>
          <span style={{ fontSize: '0.5em', backgroundColor: '#667eea', color: 'white',
                         padding: '4px 8px', borderRadius: '4px', verticalAlign: 'middle' }}>
            v2.0
          </span>
        </h1>
        <p style={{ margin: '0', color: 'white', fontSize: '1.5em' }}>
          {config.branding?.subtitle || 'Healthcare Certifications Knowledge Base'}
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '1.05em', color: 'white' }}>
          Multi-agent system: Query Analysis → Smart Retrieval → Grounded Generation → Self-Critique
        </p>
      </header>

      {/* Top filters + search */}
      <section style={{ marginBottom: '16px', padding: '12px 16px', backgroundColor: '#f8f9fa',
                        borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <div style={{ fontSize: '0.95em', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
          Focus Your Search (filters improve accuracy)
        </div>
        <div style={{ display: 'grid', gap: '8px',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {/* State */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8em', fontWeight: '600',
                            marginBottom: '4px', color: '#555' }}>
              State
            </label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setExplorerState(e.target.value);
              }}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #ddd',
                       borderRadius: '6px', fontSize: '0.9em',
                       backgroundColor: selectedState ? '#e8f5e9' : 'white' }}
            >
              <option value="">All States</option>
              {stateOptions.map((state, idx) => (
                typeof state === 'string'
                  ? <option key={idx} value={state}>{state}</option>
                  : <option key={idx} value={state.value || state}>{state.label || state.value || state}</option>
              ))}
            </select>
          </div>

          {/* Certification */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8em', fontWeight: '600',
                            marginBottom: '4px', color: '#555' }}>
              Certification Type
            </label>
            <select
              value={selectedCert}
              onChange={(e) => {
                setSelectedCert(e.target.value);
                setExplorerCert(e.target.value);
              }}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #ddd',
                       borderRadius: '6px', fontSize: '0.9em',
                       backgroundColor: selectedCert ? '#e8f5e9' : 'white' }}
            >
              <option value="">All Certifications</option>
              {certOptions.map((cert, idx) => (
                typeof cert === 'string'
                  ? <option key={idx} value={cert}>{cert}</option>
                  : <option key={idx} value={cert.value || cert}>{cert.label || cert.value || cert}</option>
              ))}
            </select>
          </div>

          {/* Cost */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8em', fontWeight: '600',
                            marginBottom: '4px', color: '#555' }}>
              Budget Range
            </label>
            <select
              value={selectedCost}
              onChange={(e) => setSelectedCost(e.target.value)}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #ddd',
                       borderRadius: '6px', fontSize: '0.9em',
                       backgroundColor: selectedCost ? '#fff3e0' : 'white' }}
            >
              <option value="">Any Budget</option>
              <option value="under_500">Under $500</option>
              <option value="500_1000">$500 - $1,000</option>
              <option value="1000_2500">$1,000 - $2,500</option>
              <option value="2500_5000">$2,500 - $5,000</option>
              <option value="over_5000">Over $5,000</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8em', fontWeight: '600',
                            marginBottom: '4px', color: '#555' }}>
              Time Available
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #ddd',
                       borderRadius: '6px', fontSize: '0.9em',
                       backgroundColor: selectedDuration ? '#e3f2fd' : 'white' }}
            >
              <option value="">Any Duration</option>
              <option value="under_1_month">Under 1 Month</option>
              <option value="1_3_months">1-3 Months</option>
              <option value="3_6_months">3-6 Months</option>
              <option value="6_12_months">6-12 Months</option>
              <option value="over_12_months">Over 12 Months</option>
            </select>
          </div>
        </div>

        {/* Sample questions */}
        {sampleQuestions.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontSize: '0.85em', fontWeight: '600', marginBottom: '6px',
                          color: '#666' }}>
              Try these questions:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => askSampleQuestion(q)}
                  style={{
                    padding: '6px 10px', fontSize: '0.8em', backgroundColor: '#fff',
                    border: '1px solid #667eea', borderRadius: '20px',
                    color: '#667eea', cursor: 'pointer'
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search form */}
        <form onSubmit={handleSearch} style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              value={question}
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about certifications, requirements, costs, or processes..."
              style={{ flex: 1, padding: '10px 12px', fontSize: '0.95em',
                       border: '2px solid #ddd', borderRadius: '8px' }}
            />
            <button
              type="submit"
              disabled={isLoading || !question.trim()}
              style={{
                padding: '10px 20px', fontSize: '0.95em', fontWeight: '600',
                backgroundColor: isLoading || !question.trim() ? '#ccc' : '#667eea',
                border: 'none', borderRadius: '8px', color: '#fff',
                cursor: isLoading || !question.trim() ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'Processing…' : 'Ask'}
            </button>
          </div>
        </form>
      </section>

      {/* Main 3-column layout: Explorer | Q&A | Study */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 260px', gap: '16px' }}>
        {/* Left: Explorer */}
        <aside style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px' }}>
          <div style={{ fontWeight: '600', fontSize: '0.9em', marginBottom: '6px' }}>
            Explorer (L1/L2/L3)
          </div>
          <SectionExplorer
            selectedState={explorerState}
            selectedCert={explorerCert}
            selectedSection={explorerSection}
            onSelect={({ state, cert, section }) => {
              setExplorerState(state);
              setExplorerCert(cert);
              setExplorerSection(section);
            }}
          />
        </aside>

        {/* Center: Section viewer + Q&A result */}
        <main>
          <div style={{
            border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px',
            marginBottom: '12px'
          }}>
            <SectionViewer
              state={explorerState || selectedState}
              cert={explorerCert || selectedCert}
              section={explorerSection}
            />
          </div>

          {answer && (
            <section style={{
              padding: '16px', borderRadius: '8px',
              backgroundColor: answer.error ? '#ffebee' : '#fff',
              border: `2px solid ${answer.error ? '#f44336' : '#667eea'}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {answer.error ? (
                <div style={{ color: '#f44336' }}>
                  <strong>Error:</strong> {answer.error}
                </div>
              ) : (
                <>
                  {answer.query_type && (
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '16px',
                        fontSize: '0.8em',
                        fontWeight: '600',
                        backgroundColor: queryTypeColors[answer.query_type]?.bg || '#f5f5f5',
                        color: queryTypeColors[answer.query_type]?.text || '#666'
                      }}>
                        {queryTypeColors[answer.query_type]?.label || answer.query_type}
                      </span>
                      {answer.entities && Object.keys(answer.entities).some(k => answer.entities[k]) && (
                        <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#666' }}>
                          Detected:{' '}
                          {Object.entries(answer.entities)
                            .filter(([_, v]) => v)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(', ')}
                        </span>
                      )}
                    </div>
                  )}

                  <div style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.6,
                    fontSize: '0.95em',
                    color: '#333'
                  }}>
                    {answer.answer}
                  </div>

                  <div style={{
                    marginTop: '12px',
                    paddingTop: '10px',
                    borderTop: '1px solid #e0e0e0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    alignItems: 'center',
                    fontSize: '0.8em'
                  }}>
                    {config.features?.show_confidence && answer.confidence !== undefined && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong>Confidence:</strong>
                        <div style={{
                          width: '90px', height: '6px', backgroundColor: '#e0e0e0',
                          borderRadius: '4px', overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(answer.confidence || 0) * 100}%`,
                            height: '100%',
                            backgroundColor: getConfidenceColor(answer.confidence),
                            transition: 'width 0.3s'
                          }} />
                        </div>
                        <span style={{
                          color: getConfidenceColor(answer.confidence),
                          fontWeight: '600'
                        }}>
                          {((answer.confidence || 0) * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}

                    {config.features?.show_sources && answer.sources?.length > 0 && (
                      <div>
                        <strong>Sources:</strong>{' '}
                        <span style={{ color: '#666' }}>
                          {answer.sources.slice(0, 3).join(' • ')}
                          {answer.sources.length > 3 && ` (+${answer.sources.length - 3} more)`}
                        </span>
                      </div>
                    )}

                    {config.features?.show_reasoning && answer.reasoning?.length > 0 && (
                      <button
                        onClick={() => setShowReasoning(!showReasoning)}
                        style={{
                          padding: '4px 10px',
                          fontSize: '0.8em',
                          backgroundColor: 'transparent',
                          border: '1px solid #667eea',
                          borderRadius: '16px',
                          color: '#667eea',
                          cursor: 'pointer'
                        }}
                      >
                        {showReasoning ? '🔼 Hide' : '🔽 Show'} Reasoning
                      </button>
                    )}
                  </div>

                  {showReasoning && answer.reasoning && (
                    <div style={{
                      marginTop: '8px',
                      padding: '8px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '6px',
                      fontSize: '0.8em',
                      fontFamily: 'monospace'
                    }}>
                      <strong>Agent Reasoning Trace:</strong>
                      {answer.reasoning.map((step, idx) => (
                        <div key={idx} style={{
                          marginTop: '2px',
                          paddingLeft: step.startsWith('   ') ? '20px' : '0'
                        }}>
                          {step}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </section>
          )}
        </main>

        {/* Right: Study mode */}
        <aside style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px' }}>
          <StudyMode lastAnswer={answer} />
        </aside>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '24px', paddingTop: '12px', textAlign: 'center',
                       borderTop: '1px solid #e0e0e0', fontSize: '0.8em', color: 'white' }}>
        <p>TEAI Agentic RAG v2.0 • Healthcare Certifications Knowledge Base</p>
        <p style={{ marginTop: '4px' }}>Powered by LangChain + LangGraph + OpenAI</p>
      </footer>
    </div>
  );
};

export default TEAIAgenticRAG;