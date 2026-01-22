import React, { useState, useEffect, useCallback } from 'react';

/**
 * TEAI Agentic RAG Healthcare Certifications
 * ==========================================
 * Enhanced frontend for the multi-agent RAG system.
 * 
 * Features:
 * - Dynamic filters that actually affect queries
 * - Reasoning trace visualization
 * - Confidence indicators
 * - Query type badges
 * - Source citations
 */

const TEAIAgenticRAG2 = () => {

  const API_BASE = process.env.REACT_APP_API_BASE || 'https://healthcare-certs.onrender.com';

  // Core state
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Config and taxonomies from backend
  const [config, setConfig] = useState(null);
  const [taxonomies, setTaxonomies] = useState(null);
  
  // Filters - these now actually affect the query!
  const [selectedState, setSelectedState] = useState('');
  const [selectedCert, setSelectedCert] = useState('');
  const [selectedCost, setSelectedCost] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  
  // UI state
  const [showReasoning, setShowReasoning] = useState(false);
  const [availableCerts, setAvailableCerts] = useState([]);


  // Query type colors for visual feedback
  const queryTypeColors = {
    comparison: { bg: '#e3f2fd', text: '#1565c0', label: '?? Comparison' },
    requirements: { bg: '#e8f5e9', text: '#2e7d32', label: '?? Requirements' },
    cost_duration: { bg: '#fff3e0', text: '#ef6c00', label: '?? Cost/Duration' },
    process: { bg: '#f3e5f5', text: '#7b1fa2', label: '?? Process' },
    study_material: { bg: '#e0f7fa', text: '#00838f', label: '?? Study Guide' },
    renewal: { bg: '#fce4ec', text: '#c2185b', label: '?? Renewal' },
    general: { bg: '#f5f5f5', text: '#616161', label: '? General' }
  };

  // Load config and taxonomies on mount
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
  }, [API_BASE]);

  // Update available certifications when state changes
  useEffect(() => {
    if (taxonomies?.state_certifications && selectedState) {
      const certs = taxonomies.state_certifications[selectedState] || [];
      setAvailableCerts(certs);
      // Reset cert selection if not available in new state
      if (selectedCert && !certs.includes(selectedCert)) {
        setSelectedCert('');
      }
    } else {
      setAvailableCerts(taxonomies?.discovered_certifications || taxonomies?.certifications || []);
    }
  }, [selectedState, taxonomies, selectedCert]);

  // Get sample questions based on current filters
  const getSampleQuestions = useCallback(() => {
    if (!config?.sample_questions) return config?.sample_questions?.default || [];
    
    // Try to get state+cert specific questions
    if (selectedState && selectedCert) {
      const stateQuestions = config.sample_questions[selectedState];
      if (stateQuestions?.[selectedCert]) {
        return stateQuestions[selectedCert];
      }
    }
    
    // Try state-specific questions
    if (selectedState && config.sample_questions[selectedState]?.general) {
      return config.sample_questions[selectedState].general;
    }
    
    return config.sample_questions.default || [];
  }, [config, selectedState, selectedCert]);

  // Handle search with filters
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
      setAnswer(data);
    } catch (error) {
      console.error('Search error:', error);
      setAnswer({ error: 'Search failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Quick question buttons
  const askSampleQuestion = (q) => {
    setQuestion(q);
  };

  // Confidence color helper
  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.7) return '#4CAF50';
    if (confidence >= 0.4) return '#FF9800';
    return '#f44336';
  };

  // Loading state
  if (!config || !taxonomies) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ fontSize: '2em', marginBottom: '16px' }}>??</div>
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





      {/* Header */}
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '3px solid #667eea'
      }}>
        <h1 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '1.8em', 
          color: '#2475d2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <span>??</span>
          <span>TEAI Agentic RAG</span>
          <span style={{ 
            fontSize: '0.5em', 
            backgroundColor: '#667eea', 
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            verticalAlign: 'middle'
          }}>
            v2.0
          </span>
        </h1>
        <p style={{ margin: '0', color: '#666' }}>
          {config.branding?.subtitle || 'Healthcare Certifications Knowledge Base'}
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.85em', color: '#888' }}>
          Multi-agent system: Query Analysis ? Smart Retrieval ? Grounded Generation ? Self-Critique
        </p>
      </header>



      {/* // Filters Section 
      <section style={{ 
        marginBottom: '20px', 
        padding: '16px', 
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <div style={{ 
          fontSize: '0.9em', 
          fontWeight: '600', 
          marginBottom: '12px',
          color: '#333'
        }}>
          ?? Focus Your Search (filters improve accuracy)
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }}>
          // State Filter
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.8em', 
              fontWeight: '600',
              marginBottom: '4px',
              color: '#555'
            }}>
              State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '0.95em',
                backgroundColor: selectedState ? '#e8f5e9' : 'white'
              }}
            >
              <option value="">All States</option>
              {stateOptions.map((state, idx) => (
                <option key={idx} value={state}>{state}</option>
              ))}
            </select>
          </div>

          // Certification Filter
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.8em', 
              fontWeight: '600',
              marginBottom: '4px',
              color: '#555'
            }}>
              Certification Type
            </label>
            <select
              value={selectedCert}
              onChange={(e) => setSelectedCert(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '0.95em',
                backgroundColor: selectedCert ? '#e8f5e9' : 'white'
              }}
            >
              <option value="">All Certifications</option>
              {certOptions.map((cert, idx) => (
                <option key={idx} value={cert}>{cert}</option>
              ))}
            </select>
          </div>

          // Cost Filter
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.8em', 
              fontWeight: '600',
              marginBottom: '4px',
              color: '#555'
            }}>
              Budget Range
            </label>
            <select
              value={selectedCost}
              onChange={(e) => setSelectedCost(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '0.95em',
                backgroundColor: selectedCost ? '#fff3e0' : 'white'
              }}
            >
              <option value="">Any Budget</option>
              <option value="under_500">Under $500</option>
              <option value="500_1000">$500 - $1,000</option>
              <option value="1000_2500">$1,000 - $2,500</option>
              <option value="2500_5000">$2,500 - $5,000</option>
              <option value="over_5000">Over $5,000</option>
            </select>
          </div>

          // Duration Filter
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.8em', 
              fontWeight: '600',
              marginBottom: '4px',
              color: '#555'
            }}>
              Time Available
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '0.95em',
                backgroundColor: selectedDuration ? '#e3f2fd' : 'white'
              }}
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

        // Active Filters Display
        {(selectedState || selectedCert || selectedCost || selectedDuration) && (
          <div style={{ 
            marginTop: '12px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '8px',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '0.8em', color: '#666' }}>Active filters:</span>
            {selectedState && (
              <span style={{ 
                padding: '2px 8px', 
                backgroundColor: '#e8f5e9', 
                borderRadius: '12px',
                fontSize: '0.8em'
              }}>
                ?? {selectedState}
              </span>
            )}
            {selectedCert && (
              <span style={{ 
                padding: '2px 8px', 
                backgroundColor: '#e8f5e9', 
                borderRadius: '12px',
                fontSize: '0.8em'
              }}>
                ?? {selectedCert}
              </span>
            )}
            {selectedCost && (
              <span style={{ 
                padding: '2px 8px', 
                backgroundColor: '#fff3e0', 
                borderRadius: '12px',
                fontSize: '0.8em'
              }}>
                ?? {selectedCost.replace(/_/g, ' ')}
              </span>
            )}
            {selectedDuration && (
              <span style={{ 
                padding: '2px 8px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '12px',
                fontSize: '0.8em'
              }}>
                ?? {selectedDuration.replace(/_/g, ' ')}
              </span>
            )}
            <button
              onClick={() => {
                setSelectedState('');
                setSelectedCert('');
                setSelectedCost('');
                setSelectedDuration('');
              }}
              style={{
                padding: '2px 8px',
                fontSize: '0.8em',
                backgroundColor: 'transparent',
                border: '1px solid #999',
                borderRadius: '12px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              Clear all ?
            </button>
          </div>
        )}
      </section>

      // Sample Questions 
      {sampleQuestions.length > 0 && (
        <section style={{ marginBottom: '16px' }}>
          <div style={{ 
            fontSize: '0.85em', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#666'
          }}>
            ?? Try these questions:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => askSampleQuestion(q)}
                style={{
                  padding: '8px 12px',
                  fontSize: '0.85em',
                  backgroundColor: '#fff',
                  border: '1px solid #667eea',
                  borderRadius: '20px',
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
        </section>
      )}

      // Search Form 
      <form onSubmit={handleSearch} style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about healthcare certifications, requirements, costs, or processes..."
            style={{
              flex: 1,
              padding: '14px 16px',
              fontSize: '1em',
              border: '2px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            style={{
              padding: '14px 32px',
              fontSize: '1em',
              backgroundColor: isLoading || !question.trim() ? '#ccc' : '#667eea',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: isLoading || !question.trim() ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s'
            }}
          >
            {isLoading ? '?? Processing...' : '?? Ask'}
          </button>
        </div>
      </form>

      // Results Section 
      {answer && (
        <section style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: answer.error ? '#ffebee' : '#fff',
          border: `2px solid ${answer.error ? '#f44336' : '#667eea'}`,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {answer.error ? (
            <div style={{ color: '#f44336' }}>
              <strong>? Error:</strong> {answer.error}
            </div>
          ) : (
            <>
              // Query Type Badge
              {answer.query_type && (
                <div style={{ marginBottom: '12px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    backgroundColor: queryTypeColors[answer.query_type]?.bg || '#f5f5f5',
                    color: queryTypeColors[answer.query_type]?.text || '#666'
                  }}>
                    {queryTypeColors[answer.query_type]?.label || answer.query_type}
                  </span>
                  
                  {answer.entities && Object.keys(answer.entities).some(k => answer.entities[k]) && (
                    <span style={{ 
                      marginLeft: '12px', 
                      fontSize: '0.8em', 
                      color: '#666' 
                    }}>
                      Detected: {Object.entries(answer.entities)
                        .filter(([k, v]) => v)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(', ')}
                    </span>
                  )}
                </div>
              )}

              // Main Answer
              <div style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '1.7',
                fontSize: '1em',
                color: '#333'
              }}>
                {answer.answer}
              </div>

              // Metadata Footer
              <div style={{
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                fontSize: '0.85em'
              }}>
                // Confidence
                {config.features?.show_confidence && answer.confidence !== undefined && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <strong>Confidence:</strong>
                    <div style={{
                      width: '100px',
                      height: '8px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '4px',
                      overflow: 'hidden'
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

                // Sources 
                {config.features?.show_sources && answer.sources?.length > 0 && (
                  <div>
                    <strong>Sources:</strong>{' '}
                    <span style={{ color: '#666' }}>
                      {answer.sources.slice(0, 3).join(' • ')}
                      {answer.sources.length > 3 && ` (+${answer.sources.length - 3} more)`}
                    </span>
                  </div>
                )}

                // Reasoning Toggle 
                {config.features?.show_reasoning && answer.reasoning?.length > 0 && (
                  <button
                    onClick={() => setShowReasoning(!showReasoning)}
                    style={{
                      padding: '4px 12px',
                      fontSize: '0.85em',
                      backgroundColor: 'transparent',
                      border: '1px solid #667eea',
                      borderRadius: '16px',
                      color: '#667eea',
                      cursor: 'pointer'
                    }}
                  >
                    {showReasoning ? '?? Hide' : '?? Show'} Reasoning
                  </button>
                )}
              </div>

              // Reasoning Trace
              {showReasoning && answer.reasoning && (
                <div style={{
                  marginTop: '12px',
                  padding: '12px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '6px',
                  fontSize: '0.8em',
                  fontFamily: 'monospace'
                }}>
                  <strong>Agent Reasoning Trace:</strong>
                  {answer.reasoning.map((step, idx) => (
                    <div key={idx} style={{ 
                      marginTop: '4px',
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
      )} */}


  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>

 
      // Footer
      <footer style={{ 
        marginTop: '32px', 
        paddingTop: '16px', 
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        fontSize: '0.8em',
        color: '#888'
      }}>
        <p>
          TEAI Agentic RAG v2.0 • Healthcare Certifications Knowledge Base
        </p>
        <p style={{ marginTop: '4px' }}>
          Powered by LangChain + LangGraph + OpenAI
        </p>
      </footer>
    </div>
  );
};

export default TEAIAgenticRAG2;
