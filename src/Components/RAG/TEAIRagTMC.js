import React, { useState, useEffect } from "react";
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

// const API_URL = "http://127.0.0.1:5000";
const API_URL = "https://teai-rag-v5.onrender.com";

const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"];

export default function TEAIRagTMC() {
  const [subtopics,          setSubtopics]          = useState([]);
  const [selectedSubtopic,   setSelectedSubtopic]   = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [isLoading,          setIsLoading]          = useState(false);
  const [question,           setQuestion]           = useState(null);
  const [selectedAnswer,     setSelectedAnswer]     = useState(null);
  const [answered,           setAnswered]           = useState(false);

  // load subtopics from API on mount
  useEffect(() => {
    fetch(`${API_URL}/api/tmc/subtopics`)
      .then(res => res.json())
      .then(data => setSubtopics(data.subtopics || []))
      .catch(err => console.error("Failed to load subtopics:", err));
  }, []);

  function resetQuestion() {
    setQuestion(null);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  async function handleGenerate() {
    if (!selectedSubtopic || !selectedDifficulty) return;
    setIsLoading(true);
    resetQuestion();

    try {
      const resp = await fetch(`${API_URL}/api/tmc/generate`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          subtopic:   selectedSubtopic,
          difficulty: selectedDifficulty,
        }),
      });

      if (!resp.ok) throw new Error(`API returned ${resp.status}`);
      const data = await resp.json();
      setQuestion(data);
    } catch (err) {
      setQuestion({ error: err.message });
    } finally {
      setIsLoading(false);
    }
  }

  function handleAnswer(choice) {
    if (answered) return;
    setSelectedAnswer(choice);
    setAnswered(true);
  }

  function choiceStyle(choice) {
    const base = {
      display:       "block",
      width:         "100%",
      padding:       "12px 16px",
      marginBottom:  "8px",
      fontSize:      "1rem",
      textAlign:     "left",
      border:        "1px solid #ddd",
      borderRadius:  "4px",
      cursor:        answered ? "default" : "pointer",
      backgroundColor: "#fff",
      fontWeight:    "normal",
    };

    if (!answered) return base;

    if (choice === question.correct_answer) {
      return { ...base, backgroundColor: "#e6f4ea", border: "1px solid #4CAF50", fontWeight: "bold" };
    }
    if (choice === selectedAnswer && choice !== question.correct_answer) {
      return { ...base, backgroundColor: "#fdecea", border: "1px solid #f44336" };
    }
    return { ...base, opacity: 0.6 };
  }

  return (
    <center>
      <div style={{ opacity: 1.0 }}>
        <TopBar />
        <center>
          <p style={{ margin: "0px", fontSize: "1.86em", fontWeight: "1000", color: "#2475d2" }}>
            TEAI RAG System
          </p>
        </center>

        <main>
          <p className="h5home"><b>TMC Exam Prep</b> - AI-Generated Practice Questions</p>

          <div style={{ maxWidth: 840, margin: "1rem auto", padding: "1rem",
                        border: "1px solid #ccc", borderRadius: 8, backgroundColor: "#f9f9f9" }}>

            {/* Subtopic Dropdown */}
            <div style={{ marginBottom: "1rem", textAlign: "left" }}>
              <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
                Select Subtopic:
              </label>
              <select
                style={{ width: "100%", padding: "10px", fontSize: "1rem",
                         border: "1px solid #ddd", borderRadius: "4px" }}
                value={selectedSubtopic}
                onChange={(e) => { setSelectedSubtopic(e.target.value); resetQuestion(); }}
              >
                <option value="">-- Choose a subtopic --</option>
                {subtopics.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Dropdown */}
            {selectedSubtopic && (
              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
                  Select Difficulty:
                </label>
                <select
                  style={{ width: "100%", padding: "10px", fontSize: "1rem",
                           border: "1px solid #ddd", borderRadius: "4px" }}
                  value={selectedDifficulty}
                  onChange={(e) => { setSelectedDifficulty(e.target.value); resetQuestion(); }}
                >
                  <option value="">-- Choose a difficulty --</option>
                  {DIFFICULTIES.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Generate Button */}
            {selectedSubtopic && selectedDifficulty && (
              <div style={{ marginBottom: "1rem" }}>
                <button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  style={{ padding: "12px 24px", backgroundColor: "#667eea", color: "white",
                           border: "none", borderRadius: "4px", fontWeight: "bold",
                           cursor: isLoading ? "wait" : "pointer",
                           opacity: isLoading ? 0.5 : 1, fontSize: "1rem" }}
                >
                  {isLoading ? "Generating..." : answered ? "Next Question" : "Generate Question"}
                </button>
              </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div style={{ padding: "1rem", textAlign: "center", backgroundColor: "#fff",
                            borderRadius: "4px", border: "1px solid #ddd" }}>
                <div style={{ fontSize: "1.2em", marginBottom: "8px" }}>Generating question...</div>
                <div style={{ fontSize: "0.9em", color: "#666" }}>AI is building your practice question...</div>
              </div>
            )}

            {/* Question Display */}
            {question && !isLoading && !question.error && (
              <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "4px",
                            border: "1px solid #ddd", textAlign: "left" }}>

                {/* Question Stem */}
                <div style={{ fontSize: "1.05em", fontWeight: "bold", lineHeight: "1.6",
                              marginBottom: "1.2rem" }}>
                  {question.question}
                </div>

                {/* Answer Choices */}
                {["A", "B", "C", "D"].map((choice) => (
                  <button
                    key={choice}
                    onClick={() => handleAnswer(choice)}
                    style={choiceStyle(choice)}
                  >
                    <strong>{choice}.</strong> {question.choices[choice]}
                  </button>
                ))}

                {/* Feedback */}
                {answered && (
                  <div style={{ marginTop: "1rem", padding: "1rem", borderRadius: "4px",
                                backgroundColor: selectedAnswer === question.correct_answer
                                  ? "#e6f4ea" : "#fdecea",
                                border: selectedAnswer === question.correct_answer
                                  ? "1px solid #4CAF50" : "1px solid #f44336" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "6px",
                                  color: selectedAnswer === question.correct_answer
                                    ? "#2e7d32" : "#c62828" }}>
                      {selectedAnswer === question.correct_answer ? "Correct!" : "Incorrect"}
                    </div>
                    <div style={{ fontSize: "0.95em", color: "#333" }}>
                      <strong>Correct Answer:</strong> {question.correct_answer}
                    </div>
                    <div style={{ fontSize: "0.95em", color: "#555", marginTop: "6px" }}>
                      {question.explanation}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Error Display */}
            {question && question.error && (
              <div style={{ padding: "1rem", backgroundColor: "#fdecea",
                            borderRadius: "4px", border: "1px solid #f44336", color: "#c62828" }}>
                Error: {question.error}
              </div>
            )}

            {/* Tech Stack Badge */}
            <div style={{ marginTop: "0.5rem", padding: "1rem", backgroundColor: "#f0f0f0",
                          borderRadius: "4px", fontSize: "0.85em", color: "#666", textAlign: "center" }}>
              <strong>Tech Stack:</strong> Python - LangChain - LangGraph - OpenAI GPT-4o-mini - ChromaDB
              <br />
              <strong>Knowledge Base:</strong> 198 TMC Clinical Entries - 10 NBRC Domains
            </div>
          </div>

          <div style={{ height: "40px" }} />
        </main>
      </div>
    </center>
  );
}
