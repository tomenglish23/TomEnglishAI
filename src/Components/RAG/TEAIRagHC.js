import React, { useState, useEffect } from 'react';
import TopBar from '../Menu/TopBar';

const TEAIRagHC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [taxonomies, setTaxonomies] = useState(null);

  // Filters
  const [selectedState, setSelectedState] = useState('');
  const [selectedCert, setSelectedCert] = useState('');
  const [selectedCost, setSelectedCost] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const API_BASE = 'https://healthcare-certs.onrender.com';

  // Get relevant sample questions based on selected filters
  const getRelevantQuestions = () => {
    console.log('getRelevantQuestions called');
    console.log('selectedState:', selectedState);
    console.log('selectedCert:', selectedCert);
    console.log('config.sample_questions:', config?.sample_questions);
    
    if (!config?.sample_questions) return [];

    if (selectedState && selectedCert) {
      const stateQuestions = config.sample_questions[selectedState];
      console.log('stateQuestions:', stateQuestions);
      if (stateQuestions && stateQuestions[selectedCert]) {
        console.log('Returning:', stateQuestions[selectedCert]);
        return stateQuestions[selectedCert];
      }
    }

    return config.sample_questions.default || [];
  };

  let relevantQuestions = getRelevantQuestions();

  useEffect(() => {
    // Load config and taxonomies
    Promise.all([
      fetch(`${API_BASE}/api/config`).then(r => r.json()),
      fetch(`${API_BASE}/api/taxonomies`).then(r => r.json())
    ]).then(([configData, taxData]) => {
      console.log('Config from API:', configData);  // Add this
      console.log('Keys in config:', Object.keys(configData));  // Add this
      setConfig(configData);
      setTaxonomies(taxData);
      relevantQuestions = getRelevantQuestions(); // tmetme
    }).catch(err => console.error('Failed to load config:', err)); 
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      const response = await fetch(`${API_BASE}/api/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim() })
      });

      const data = await response.json();
      setAnswer(data);
    } catch (error) {
      setAnswer({ error: 'Search failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }};

  const askSampleQuestion = (q) => {
    setQuestion(q);
  };

  if (!config || !taxonomies) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px', 
                  fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <TopBar />
      <center>
        <p style={{ margin: '0px', fontSize: '1.86em', fontWeight: '1000', color: '#2475d2' }}>TEAI RAG System for {config.branding?.subtitle || ''}</p>
      </center>

      {/* Header */}
      <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid #667eea' }}>
        <center>
          <p style={{ margin: '0px', fontSize: '1.1em', fontWeight: '500' }}>
            The first request has a 60 second delay due to the Render free tier cold start</p> 
        </center>
      </div>

      {/* Filters - 2 rows */}
      <div style={{ marginBottom: '12px', padding: '12px', backgroundColor: '#f8f9fa',
                    borderRadius: '6px', fontSize: '0.9em' }}>
        {/* Row 1: State and Certification */}
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '8px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>State:</label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                relevantQuestions = getRelevantQuestions();
              }}
              style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minWidth: '120px'
              }}
            >
              <option value="">All</option>
              {taxonomies.states?.map((item, idx) => {
                const value = typeof item === 'string' ? item : item.value;
                const label = typeof item === 'string' ? item : item.label;
                return <option key={idx} value={value}>{label}</option>;
              })}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>Certification:</label>
            <select
              value={selectedCert}
              onChange={(e) => {
                setSelectedCert(e.target.value);
                relevantQuestions = getRelevantQuestions();
              }}
              style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minWidth: '150px'
              }}
            >
              <option value="">All</option>
              {taxonomies.certifications?.map((item, idx) => {
                const value = typeof item === 'string' ? item : item.value;
                const label = typeof item === 'string' ? item : item.label;
                return <option key={idx} value={value}>{label}</option>;
              })}
            </select>
          </div>
        </div>

        {/* Row 2: Cost and Duration */}
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>Cost:&nbsp;</label>
            <select
              value={selectedCost}
              onChange={(e) => setSelectedCost(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minWidth: '120px'
              }}
            >
              <option value="">Any</option>
              {taxonomies.cost_ranges?.map((item, idx) => {
                const value = typeof item === 'string' ? item : item.value;
                const label = typeof item === 'string' ? item : item.label;
                return <option key={idx} value={value}>{label}</option>;
              })}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>Duration:</label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minWidth: '120px'
              }}
            >
              <option value="">Any</option>
              {taxonomies.durations?.map((item, idx) => {
                const value = typeof item === 'string' ? item : item.value;
                const label = typeof item === 'string' ? item : item.label;
                return <option key={idx} value={value}>{label}</option>;
              })}
            </select>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '1.1em', color: '#666' }}>
            Add <b>duration &amp; cost</b> to the question by typing in your perferences. E.g., "under $500" or "less than 3 months". <br />
            We have not completed testing those filters. So, textbox question does not change when you change those filters.
          </div>
        </div>

      </div>

      {/* Sample Questions - Dynamic based on filters */}
      {relevantQuestions.length > 0 && (
        <div style={{ marginBottom: '12px' }}>
          <div style={{
            fontSize: '0.85em',
            fontWeight: '600',
            marginBottom: '6px',
            color: '#666'
          }}>
            Try:
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px'
          }}>
            {relevantQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => askSampleQuestion(q)}
                style={{
                  padding: '6px 10px',
                  fontSize: '0.8em',
                  backgroundColor: '#fff',
                  border: '1px solid #667eea',
                  borderRadius: '16px',
                  color: '#667eea',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#667eea';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#667eea';
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Form */}
      <form onSubmit={handleSearch} style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about healthcare training..."
            style={{
              flex: 1,
              padding: '10px 12px',
              fontSize: '1em',
              border: '2px solid #ddd',
              borderRadius: '6px',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            style={{
              padding: '10px 24px',
              fontSize: '1em',
              backgroundColor: isLoading || !question.trim() ? '#ccc' : '#667eea',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: isLoading || !question.trim() ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            {isLoading ? 'Searching...' : 'Ask'}
          </button>
        </div>
      </form>

      {/* Results */}
      {answer && (
        <div style={{
          padding: '16px', borderRadius: '4px',
          backgroundColor: answer.error ? '#fee' : '#f8f9fa',
          borderLeft: `4px solid ${answer.error ? '#f44336' : '#667eea'}`
        }}>
          {answer.error ? (
            <div style={{ color: '#f44336' }}>{answer.error}</div>
          ) : (
            <>
              <div style={{
                whiteSpace: 'pre-wrap', 
                lineHeight: '1.6',
                marginBottom: config.features.show_confidence || config.features.show_sources ? '12px' : 0
              }}>
                {answer.answer}
              </div>

              {(config.features.show_confidence || config.features.show_sources) && (
                <div style={{
                  fontSize: '0.85em',
                  color: '#666',
                  paddingTop: '12px',
                  borderTop: '1px solid #ddd'
                }}>
                  {config.features.show_confidence && (
                    <div>
                      <strong>Confidence:</strong>{' '}
                      <span style={{
                        color: answer.confidence > 0.7 ? '#4CAF50' :
                              answer.confidence > 0.4 ? '#FF9800' : '#f44336'
                      }}>
                        {answer.confidence != null && !isNaN(answer.confidence)
                          ? (answer.confidence * 100).toFixed(0)
                          : '0'}%
                      </span>
                    </div>
                  )}
                  {config.features.show_sources && answer.sources && answer.sources.length > 0 && (
                    <div style={{ marginTop: '4px' }}>
                      <strong>Sources:</strong> {answer.sources.join(', ')}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TEAIRagHC;