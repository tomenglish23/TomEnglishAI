import React, { useState, useEffect, useRef } from "react";
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

//const API_URL = "http://127.0.0.1:5000";
const API_URL = "https://teai-rag-v5.onrender.com";

const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"];

// ── modes ──────────────────────────────────────────────────────────────────
const MODE_STUDY = "study";
const MODE_EXAM  = "exam";
const MODE_DRILL = "drill";

export default function TEAIRagTMC() {

  // ── subtopic / difficulty ─────────────────────────────────────────────────
  const [subtopics,          setSubtopics]          = useState([]);
  const [selectedSubtopic,   setSelectedSubtopic]   = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  // ── question state ────────────────────────────────────────────────────────
  const [isLoading,      setIsLoading]      = useState(false);
  const [question,       setQuestion]       = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered,       setAnswered]       = useState(false);

  // ── session / mode ────────────────────────────────────────────────────────
  const [mode,              setMode]              = useState(MODE_STUDY);
  const [needsReview,       setNeedsReview]       = useState([]);  // { subtopic, difficulty, question, choices, correct_answer, explanation }
  const [drillIndex,        setDrillIndex]        = useState(0);
  const [drillQueue,        setDrillQueue]        = useState([]);  // shuffled copy
  const [showExport,        setShowExport]        = useState(false);
  const [examQuestionCount, setExamQuestionCount] = useState(0);   // questions answered this exam session

  const exportRef = useRef(null);

  // ── load subtopics ────────────────────────────────────────────────────────
  useEffect(() => {
    fetch(`${API_URL}/api/tmc/subtopics`)
      .then(res => res.json())
      .then(data => setSubtopics(data.subtopics || []))
      .catch(err => console.error("Failed to load subtopics:", err));
  }, []);

  // ── helpers ───────────────────────────────────────────────────────────────
  function resetQuestion() {
    setQuestion(null);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function btn(bg, color, disabled) {
    return {
      padding:         "9px 18px",
      border:          "none",
      borderRadius:    "4px",
      fontWeight:      "bold",
      fontSize:        "0.9rem",
      cursor:          disabled ? "not-allowed" : "pointer",
      backgroundColor: disabled ? "#ccc" : bg,
      color:           disabled ? "#888" : color,
      opacity:         disabled ? 0.6 : 1,
    };
  }

  // ── exam session ──────────────────────────────────────────────────────────
  function handleStartExam() {
    setMode(MODE_EXAM);
    setNeedsReview([]);
    setExamQuestionCount(0);
    setShowExport(false);
    resetQuestion();
  }

  function handleStopExam() {
    setMode(MODE_STUDY);
    resetQuestion();
  }

  function handleClear() {
    setMode(MODE_STUDY);
    setNeedsReview([]);
    setDrillQueue([]);
    setDrillIndex(0);
    setExamQuestionCount(0);
    setShowExport(false);
    resetQuestion();
  }

  // ── drill mode ────────────────────────────────────────────────────────────
  function handleStartDrill() {
    if (needsReview.length === 0) return;
    const q = shuffle(needsReview);
    setDrillQueue(q);
    setDrillIndex(0);
    setMode(MODE_DRILL);
    setShowExport(false);
    loadDrillQuestion(q, 0);
  }

  function loadDrillQuestion(queue, idx) {
    resetQuestion();
    if (queue.length === 0) return;
    const e = queue[idx];
    setQuestion({
      question:        e.question,
      choices:         e.choices,
      correct_answer:  e.correct_answer,
      explanation:     e.explanation,
      _drillSubtopic:  e.subtopic,
      _drillDifficulty: e.difficulty,
    });
  }

  function handleDrillNext() {
    if (drillQueue.length === 0) {
      setMode(needsReview.length > 0 ? MODE_EXAM : MODE_STUDY);
      resetQuestion();
      return;
    }
    const nextIdx = (drillIndex + 1) % drillQueue.length;
    setDrillIndex(nextIdx);
    loadDrillQuestion(drillQueue, nextIdx);
  }

  function handleGotIt() {
    const current  = drillQueue[drillIndex];
    const newReview = needsReview.filter(
      w => !(w.question === current.question && w.subtopic === current._drillSubtopic)
    );
    const newQueue  = drillQueue.filter((_, i) => i !== drillIndex);
    setNeedsReview(newReview);
    setDrillQueue(newQueue);

    if (newQueue.length === 0) {
      setMode(MODE_STUDY);
      resetQuestion();
      return;
    }
    const nextIdx = drillIndex >= newQueue.length ? 0 : drillIndex;
    setDrillIndex(nextIdx);
    loadDrillQuestion(newQueue, nextIdx);
  }

  function handleExitDrill() {
    setMode(MODE_EXAM);
    resetQuestion();
  }

  // ── generate question (study / exam) ──────────────────────────────────────
  async function handleGenerate() {
    if (!selectedSubtopic || !selectedDifficulty) return;
    setIsLoading(true);
    resetQuestion();

    try {
      const resp = await fetch(`${API_URL}/api/tmc/generate`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ subtopic: selectedSubtopic, difficulty: selectedDifficulty }),
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

  // ── answer handlers ───────────────────────────────────────────────────────
  function handleAnswer(choice) {
    if (answered) return;
    setSelectedAnswer(choice);
    setAnswered(true);

    if (mode === MODE_EXAM) {
      setExamQuestionCount(prev => prev + 1);
      if (question && choice !== question.correct_answer) {
        const entry = {
          subtopic:       selectedSubtopic,
          difficulty:     selectedDifficulty,
          question:       question.question,
          choices:        question.choices,
          correct_answer: question.correct_answer,
          explanation:    question.explanation,
        };
        setNeedsReview(prev => {
          const exists = prev.some(w => w.question === entry.question);
          return exists ? prev : [...prev, entry];
        });
      }
    }
  }

  function handleDrillAnswer(choice) {
    if (answered) return;
    setSelectedAnswer(choice);
    setAnswered(true);
  }

  // ── choice styles ─────────────────────────────────────────────────────────
  function choiceStyle(choice) {
    const base = {
      display:         "block",
      width:           "100%",
      padding:         "12px 16px",
      marginBottom:    "8px",
      fontSize:        "1rem",
      textAlign:       "left",
      border:          "1px solid #ddd",
      borderRadius:    "4px",
      cursor:          answered ? "default" : "pointer",
      backgroundColor: "#fff",
      fontWeight:      "normal",
    };
    if (!answered) return base;
    if (choice === question.correct_answer)
      return { ...base, backgroundColor: "#e6f4ea", border: "1px solid #4CAF50", fontWeight: "bold" };
    if (choice === selectedAnswer && choice !== question.correct_answer)
      return { ...base, backgroundColor: "#fdecea", border: "1px solid #f44336" };
    return { ...base, opacity: 0.6 };
  }

  // ── export text ───────────────────────────────────────────────────────────
  function buildExportText() {
    if (needsReview.length === 0) return "Needs Review list is empty.";
    return needsReview.map((w, i) => {
      const choiceLines = ["A", "B", "C", "D"].map(c => `  ${c}. ${w.choices[c]}`).join("\n");
      return [
        `=== Needs Review #${i + 1} ===`,
        `Subtopic:   ${w.subtopic}`,
        `Difficulty: ${w.difficulty}`,
        ``,
        `Q: ${w.question}`,
        choiceLines,
        ``,
        `Correct Answer: ${w.correct_answer}`,
        `Explanation: ${w.explanation}`,
      ].join("\n");
    }).join("\n\n");
  }

  function handleToggleExport() {
    const next = !showExport;
    setShowExport(next);
    if (next) {
      setTimeout(() => exportRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }

  // ── derived ───────────────────────────────────────────────────────────────
  const isDrill     = mode === MODE_DRILL;
  const isExam      = mode === MODE_EXAM;
  const reviewCount = needsReview.length;

  // ── render ────────────────────────────────────────────────────────────────
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

            {/* ── Session Control Bar ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap",
                          marginBottom: "1rem", padding: "10px 14px",
                          backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px" }}>

              {/* mode badge */}
              <span style={{
                padding: "4px 14px", borderRadius: "12px", fontWeight: "bold", fontSize: "0.85rem",
                backgroundColor: isDrill ? "#e3f2fd" : isExam ? "#e8f5e9" : "#f5f5f5",
                border: isDrill ? "1px solid #1976d2" : isExam ? "1px solid #4CAF50" : "1px solid #bbb",
                color:  isDrill ? "#1565c0" : isExam ? "#2e7d32" : "#666",
              }}>
                {isDrill ? "Drill Mode" : isExam ? "Exam Active" : "Study Mode"}
              </span>

              {/* Needs Review count */}
              {reviewCount > 0 && (
                <span style={{ padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem",
                               fontWeight: "bold", backgroundColor: "#fff3e0",
                               border: "1px solid #ff9800", color: "#e65100" }}>
                  Needs Review: {reviewCount}
                </span>
              )}

              <div style={{ marginLeft: "auto", display: "flex", gap: "8px", flexWrap: "wrap" }}>

                {!isExam && !isDrill && (
                  <button onClick={handleStartExam} style={btn("#4CAF50", "#fff", false)}>
                    Start Exam
                  </button>
                )}

                {isExam && (
                  <button onClick={handleStopExam} style={btn("#f44336", "#fff", false)}>
                    Stop Exam
                  </button>
                )}

                {!isDrill && reviewCount > 0 && (
                  <button onClick={handleStartDrill} style={btn("#1976d2", "#fff", false)}>
                    Drill ({reviewCount})
                  </button>
                )}

                {isDrill && (
                  <button onClick={handleExitDrill} style={btn("#757575", "#fff", false)}>
                    Exit Drill
                  </button>
                )}

                {reviewCount > 0 && !isDrill && (
                  <button onClick={handleToggleExport} style={btn("#7b1fa2", "#fff", false)}>
                    {showExport ? "Hide Review" : "Show Review"}
                  </button>
                )}

                {(isExam || reviewCount > 0) && !isDrill && (
                  <button onClick={handleClear} style={btn("#bbb", "#333", false)}>
                    Clear
                  </button>
                )}

              </div>
            </div>

            {/* ── Drill header ── */}
            {isDrill && drillQueue.length > 0 && (
              <div style={{ marginBottom: "1rem", padding: "10px 14px", backgroundColor: "#e3f2fd",
                            border: "1px solid #90caf9", borderRadius: "6px", fontSize: "0.9rem",
                            display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontWeight: "bold", color: "#1565c0", fontSize: "1rem" }}>
                  Question {drillIndex + 1} of {drillQueue.length}
                </span>
                <span style={{ color: "#555" }}>
                  Subtopic: <strong>{drillQueue[drillIndex]?.subtopic}</strong>
                  &nbsp;|&nbsp;
                  Difficulty: <strong>{drillQueue[drillIndex]?.difficulty}</strong>
                </span>
              </div>
            )}

            {/* ── Exam question counter ── */}
            {isExam && examQuestionCount > 0 && (
              <div style={{ marginBottom: "1rem", padding: "10px 14px", backgroundColor: "#e8f5e9",
                            border: "1px solid #a5d6a7", borderRadius: "6px", fontSize: "0.9rem",
                            display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", color: "#2e7d32", fontSize: "1rem" }}>
                  Question {examQuestionCount}
                </span>
                {needsReview.length > 0 && (
                  <span style={{ color: "#e65100" }}>
                    {needsReview.length} wrong so far
                  </span>
                )}
              </div>
            )}

            {/* ── Dropdowns + Generate (study / exam only) ── */}
            {!isDrill && (
              <>
                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "12px" }}>
                  <label style={{ fontWeight: "bold", whiteSpace: "nowrap", minWidth: "120px" }}>
                    Select Category:
                  </label>
                  <select
                    style={{ flex: 1, padding: "10px", fontSize: "1rem",
                             border: "1px solid #ddd", borderRadius: "4px" }}
                    value={selectedSubtopic}
                    onChange={(e) => { setSelectedSubtopic(e.target.value); resetQuestion(); }}
                  >
                    <option value="">-- Choose a subtopic --</option>
                    {subtopics.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>

                {selectedSubtopic && (
                  <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "12px" }}>
                    <label style={{ fontWeight: "bold", whiteSpace: "nowrap", minWidth: "120px" }}>
                      Select Difficulty:
                    </label>
                    <select
                      style={{ flex: 1, padding: "10px", fontSize: "1rem",
                               border: "1px solid #ddd", borderRadius: "4px" }}
                      value={selectedDifficulty}
                      onChange={(e) => { setSelectedDifficulty(e.target.value); resetQuestion(); }}
                    >
                      <option value="">-- Choose a difficulty --</option>
                      {DIFFICULTIES.map((d, i) => <option key={i} value={d}>{d}</option>)}
                    </select>
                  </div>
                )}

                {selectedSubtopic && selectedDifficulty && (
                  <div style={{ marginBottom: "1rem" }}>
                    <button onClick={handleGenerate} disabled={isLoading} style={btn("#667eea", "#fff", isLoading)}>
                      {isLoading ? "Generating..." : answered ? "Next Question" : "Generate Question"}
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ── Loading ── */}
            {isLoading && (
              <div style={{ padding: "1rem", textAlign: "center", backgroundColor: "#fff",
                            borderRadius: "4px", border: "1px solid #ddd" }}>
                <div style={{ fontSize: "1.2em", marginBottom: "8px" }}>Generating question...</div>
                <div style={{ fontSize: "0.9em", color: "#666" }}>AI is building your practice question...</div>
              </div>
            )}

            {/* ── Question Display ── */}
            {question && !isLoading && !question.error && (
              <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "4px",
                            border: "1px solid #ddd", textAlign: "left" }}>

                <div style={{ fontSize: "1.05em", fontWeight: "bold", lineHeight: "1.6",
                              marginBottom: "1.2rem" }}>
                  {question.question}
                </div>

                {["A", "B", "C", "D"].map((choice) => (
                  <button
                    key={choice}
                    onClick={() => isDrill ? handleDrillAnswer(choice) : handleAnswer(choice)}
                    style={choiceStyle(choice)}
                  >
                    <strong>{choice}.</strong> {question.choices[choice]}
                  </button>
                ))}

                {answered && (
                  <div style={{ marginTop: "1rem", padding: "1rem", borderRadius: "4px",
                                backgroundColor: selectedAnswer === question.correct_answer ? "#e6f4ea" : "#fdecea",
                                border: selectedAnswer === question.correct_answer
                                  ? "1px solid #4CAF50" : "1px solid #f44336" }}>

                    <div style={{ fontWeight: "bold", marginBottom: "6px",
                                  color: selectedAnswer === question.correct_answer ? "#2e7d32" : "#c62828" }}>
                      {selectedAnswer === question.correct_answer ? "Correct!" : "Incorrect"}
                    </div>
                    <div style={{ fontSize: "0.95em", color: "#333" }}>
                      <strong>Correct Answer:</strong> {question.correct_answer}
                    </div>
                    <div style={{ fontSize: "0.95em", color: "#555", marginTop: "6px" }}>
                      {question.explanation}
                    </div>

                    {/* Drill controls — shown after every answered drill question */}
                    {isDrill && (
                      <div style={{ marginTop: "1rem", display: "flex", gap: "10px" }}>
                        <button onClick={handleGotIt} style={btn("#4CAF50", "#fff", false)}>
                          Got It - Remove
                        </button>
                        <button onClick={handleDrillNext} style={btn("#1976d2", "#fff", false)}>
                          Keep - Next
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ── Drill cleared ── */}
            {isDrill && drillQueue.length === 0 && (
              <div style={{ padding: "1.5rem", textAlign: "center", backgroundColor: "#e8f5e9",
                            border: "1px solid #4CAF50", borderRadius: "4px", color: "#2e7d32" }}>
                <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "6px" }}>
                  Needs Review list cleared!
                </div>
                <div style={{ fontSize: "0.95em" }}>All questions removed. Good work.</div>
              </div>
            )}

            {/* ── Error ── */}
            {question && question.error && (
              <div style={{ padding: "1rem", backgroundColor: "#fdecea",
                            borderRadius: "4px", border: "1px solid #f44336", color: "#c62828" }}>
                Error: {question.error}
              </div>
            )}

            {/* ── Export / Review Panel ── */}
            {showExport && reviewCount > 0 && (
              <div ref={exportRef} style={{ marginTop: "1.5rem" }}>
                <div style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "8px", color: "#7b1fa2" }}>
                  Needs Review - {reviewCount} question{reviewCount !== 1 ? "s" : ""}
                </div>

                <textarea
                  readOnly
                  value={buildExportText()}
                  style={{ width: "100%", height: "260px", fontSize: "0.82rem",
                           fontFamily: "Consolas, monospace", padding: "10px",
                           border: "1px solid #ce93d8", borderRadius: "4px",
                           backgroundColor: "#fdf6ff", color: "#333",
                           resize: "vertical", boxSizing: "border-box" }}
                />

                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem", fontSize: "0.88rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#7b1fa2", color: "#fff" }}>
                      <th style={{ padding: "8px", textAlign: "left", width: "28%" }}>Subtopic</th>
                      <th style={{ padding: "8px", textAlign: "left", width: "14%" }}>Difficulty</th>
                      <th style={{ padding: "8px", textAlign: "left" }}>Question &amp; Explanation</th>
                      <th style={{ padding: "8px", textAlign: "left", width: "8%" }}>Ans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {needsReview.map((w, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fdf6ff",
                                           borderBottom: "1px solid #e0d0e8" }}>
                        <td style={{ padding: "8px", verticalAlign: "top" }}>{w.subtopic}</td>
                        <td style={{ padding: "8px", verticalAlign: "top" }}>{w.difficulty}</td>
                        <td style={{ padding: "8px", verticalAlign: "top", lineHeight: "1.4" }}>
                          <div>{w.question}</div>
                          <div style={{ marginTop: "4px", fontSize: "0.82rem", color: "#555" }}>
                            {w.explanation}
                          </div>
                        </td>
                        <td style={{ padding: "8px", verticalAlign: "top", fontWeight: "bold", color: "#2e7d32" }}>
                          {w.correct_answer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ── Tech Stack Badge ── */}
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
