
import React, { useState } from 'react';

const STAGES = [
  {
    id: 'ingest',
    label: 'INGESTION',
    sublabel: 'Happens once, offline',
    color: '#1F4E79',
    light: '#d6e4f0',
    border: '#2E75B6',
    icon: '📥',
    controls: [
      {
        name: 'Chunking Strategy',
        values: ['Fixed-size', 'Semantic', 'By heading', 'Hierarchical'],
        effect: 'Controls what "unit of knowledge" gets embedded. Wrong strategy = fragmented context.',
        impact: 'high',
      },
      {
        name: 'Chunk Size (tokens)',
        values: ['200', '400 ← default', '600', '800'],
        effect: 'Small = precise match, little context. Large = more context, lower precision.',
        impact: 'high',
      },
      {
        name: 'Chunk Overlap',
        values: ['0%', '10%', '20%'],
        effect: 'Overlap prevents losing information at chunk boundaries.',
        impact: 'medium',
      },
      {
        name: 'Embedding Model',
        values: ['text-embedding-3-small', 'text-embedding-3-large', 'open-source (BGE, E5)'],
        effect: 'Determines the semantic space. Cannot mix models — changing this requires full rebuild.',
        impact: 'high',
      },
      {
        name: 'Metadata Fields',
        values: ['source only', 'source + section', 'source + section + date + category'],
        effect: 'Richer metadata enables filtered retrieval later. Plan this before ingestion.',
        impact: 'medium',
      },
    ],
  },
  {
    id: 'transform',
    label: 'QUERY TRANSFORM',
    sublabel: 'Optional — runs per query',
    color: '#4A235A',
    light: '#ead9f7',
    border: '#7D3C98',
    icon: '🔄',
    controls: [
      {
        name: 'Transformation Type',
        values: ['None (pass-through)', 'Query rewriting', 'HyDE', 'Decomposition'],
        effect: 'Changes what vector is used for retrieval. HyDE generates a hypothetical answer and embeds that instead of the question.',
        impact: 'high',
      },
      {
        name: 'Rewrite Model',
        values: ['gpt-4o-mini', 'gpt-4o', 'same as generation'],
        effect: 'Only relevant if rewriting/HyDE is enabled. Adds latency + cost.',
        impact: 'low',
      },
    ],
  },
  {
    id: 'retrieve',
    label: 'RETRIEVAL',
    sublabel: 'Runs per query — most impactful',
    color: '#0E6655',
    light: '#d5f5e3',
    border: '#1E8449',
    icon: '🔍',
    controls: [
      {
        name: 'k (chunks returned)',
        values: ['2', '4 ← start here', '6', '8', '10'],
        effect: 'More k = higher recall, more tokens, higher cost. Quality usually plateaus at k=4–6.',
        impact: 'high',
      },
      {
        name: 'Retrieval Method',
        values: ['Dense (vector only)', 'Sparse (BM25 keyword)', 'Hybrid (both, fused)'],
        effect: 'Hybrid wins on mixed query sets. Dense alone struggles with exact technical terms.',
        impact: 'high',
      },
      {
        name: 'Similarity Threshold',
        values: ['None', '0.3', '0.5', '0.7'],
        effect: 'Drops low-scoring chunks before they reach the prompt. Reduces noise but raises fallback rate.',
        impact: 'medium',
      },
      {
        name: 'Metadata Filter',
        values: ['None', 'By category', 'By date range', 'By source document'],
        effect: 'Scopes search to a subset of the KB. Improves precision; risks missing cross-domain answers.',
        impact: 'medium',
      },
    ],
  },
  {
    id: 'rerank',
    label: 'RERANKING',
    sublabel: 'Optional — after retrieval',
    color: '#7E5109',
    light: '#fdebd0',
    border: '#D68910',
    icon: '📊',
    controls: [
      {
        name: 'Reranker',
        values: ['None', 'Cross-encoder (Cohere, BGE)', 'LLM-as-judge'],
        effect: 'Re-scores retrieved chunks with higher accuracy. Reorders before prompt construction.',
        impact: 'medium',
      },
      {
        name: 'Top-n after rerank',
        values: ['Same as k', 'k/2', 'Fixed (e.g. 3)'],
        effect: 'Retrieve more (k=20), rerank, keep the best 4. Improves precision without hurting recall.',
        impact: 'medium',
      },
    ],
  },
  {
    id: 'prompt',
    label: 'PROMPT CONSTRUCTION',
    sublabel: 'Assembly — runs per query',
    color: '#154360',
    light: '#d6eaf8',
    border: '#2E86C1',
    icon: '✏️',
    controls: [
      {
        name: 'System Instruction',
        values: ['Permissive', 'Strict (context-only)', 'Structured (cite sources, show confidence)'],
        effect: 'Biggest lever for hallucination vs. helpfulness tradeoff. Version and log every variant.',
        impact: 'high',
      },
      {
        name: 'Context Ordering',
        values: ['Best first (descending score)', 'Best last (ascending score)', 'Random'],
        effect: '"Lost in the middle" effect — models attend more to beginning and end. Best-last can help.',
        impact: 'low',
      },
      {
        name: 'Context Format',
        values: ['Raw text', 'Labeled with source', 'Numbered passages', 'XML-tagged'],
        effect: 'Affects how well the model separates and cites individual passages.',
        impact: 'low',
      },
      {
        name: 'Conversation History',
        values: ['None', 'Last turn', 'Full history', 'Summarized history'],
        effect: 'Multi-turn context improves follow-up answers but consumes token budget.',
        impact: 'medium',
      },
    ],
  },
  {
    id: 'generate',
    label: 'GENERATION',
    sublabel: 'LLM call — where cost is incurred',
    color: '#7B241C',
    light: '#fadbd8',
    border: '#C0392B',
    icon: '🤖',
    controls: [
      {
        name: 'Model',
        values: ['gpt-4o-mini ← budget', 'gpt-4o', 'gpt-4-turbo', 'open-source (Llama, Mistral)'],
        effect: 'Most expensive variable to change. Mini is fine for lookup; full model wins on synthesis.',
        impact: 'high',
      },
      {
        name: 'Temperature',
        values: ['0.0 ← factual', '0.2', '0.5', '0.8'],
        effect: '0.0 = deterministic and consistent. Higher = more creative but less reliable for facts.',
        impact: 'medium',
      },
      {
        name: 'max_tokens',
        values: ['256', '512 ← typical', '1024', '2048'],
        effect: 'Caps response length. If too low, finish_reason = "length" — answer is cut off.',
        impact: 'low',
      },
    ],
  },
];

const IMPACT_COLORS = {
  high:   { bg: '#fdf3e3', text: '#7E5109', dot: '#E67E22' },
  medium: { bg: '#eaf4fb', text: '#154360', dot: '#2E86C1' },
  low:    { bg: '#f0f0f0', text: '#555',    dot: '#999'    },
};

const ARROW = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2px 0' }}>
    <div style={{ width: '2px', height: '14px', background: '#999' }} />
    <div style={{ width: 0, height: 0,
      borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
      borderTop: '8px solid #999' }} />
  </div>
);

export default function RAGFlow() {
  const [active, setActive]     = useState(null);   // stage id
  const [pinned, setPinned]     = useState(null);   // pinned stage id

  const displayed = pinned || active;

  const handleClick = (id) => {
    if (pinned === id) { setPinned(null); }
    else { setPinned(id); setActive(null); }
  };

  const stage = displayed ? STAGES.find(s => s.id === displayed) : null;

  return (
    <div style={{ fontFamily: 'monospace', maxWidth: '980px', margin: '0 auto', padding: '16px' }}>

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#1F4E79' }}>
          RAG Pipeline — Control Points
        </div>
        <div style={{ fontSize: '0.82rem', color: '#666', marginTop: '4px' }}>
          Click any stage to see what you can change there and what effect it has
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>

        {/* ── Left: Flow diagram ── */}
        <div style={{ width: '200px', flexShrink: 0 }}>

          {/* Offline label */}
          <div style={{ fontSize: '0.7rem', color: '#888', textAlign: 'center',
            borderTop: '1px dashed #ccc', paddingTop: '4px', marginBottom: '6px' }}>
            ── OFFLINE (build once) ──
          </div>

          {STAGES.map((s, i) => {
            const isActive = displayed === s.id;
            const isPinned = pinned === s.id;
            return (
              <React.Fragment key={s.id}>
                {/* Separator between offline and online */}
                {i === 1 && (
                  <div style={{ fontSize: '0.7rem', color: '#888', textAlign: 'center',
                    borderTop: '1px dashed #ccc', paddingTop: '4px', marginBottom: '6px', marginTop: '6px' }}>
                    ── PER QUERY (live) ──
                  </div>
                )}
                {/* Optional badge for transform + rerank */}
                {(s.id === 'transform' || s.id === 'rerank') && (
                  <div style={{ fontSize: '0.65rem', color: '#888', textAlign: 'right',
                    marginBottom: '2px', paddingRight: '4px', fontStyle: 'italic' }}>
                    optional
                  </div>
                )}

                <div
                  onClick={() => handleClick(s.id)}
                  onMouseEnter={() => { if (!pinned) setActive(s.id); }}
                  onMouseLeave={() => { if (!pinned) setActive(null); }}
                  style={{
                    background: isActive ? s.color : s.light,
                    border: `2px solid ${isActive || isPinned ? s.color : s.border}`,
                    borderRadius: '6px',
                    padding: '8px 10px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    boxShadow: isPinned ? `0 0 0 3px ${s.border}55` : isActive ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    color: isActive ? 'white' : s.color,
                    fontWeight: 'bold', fontSize: '0.78rem',
                  }}>
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                    {isPinned && <span style={{ marginLeft: 'auto', fontSize: '0.65rem' }}>📌</span>}
                  </div>
                  <div style={{
                    fontSize: '0.65rem',
                    color: isActive ? 'rgba(255,255,255,0.8)' : '#666',
                    marginTop: '2px',
                  }}>{s.sublabel}</div>
                  <div style={{
                    fontSize: '0.65rem',
                    color: isActive ? 'rgba(255,255,255,0.7)' : '#999',
                    marginTop: '3px',
                  }}>
                    {s.controls.length} control{s.controls.length !== 1 ? 's' : ''}
                  </div>
                </div>

                {i < STAGES.length - 1 && <ARROW />}
              </React.Fragment>
            );
          })}

          {/* Output */}
          <ARROW />
          <div style={{ background: '#1E5631', borderRadius: '6px', padding: '8px 10px',
            textAlign: 'center', color: 'white', fontSize: '0.78rem', fontWeight: 'bold' }}>
            🟢 ANSWER
          </div>
        </div>

        {/* ── Right: Detail panel ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {!stage ? (
            <div style={{ border: '2px dashed #ccc', borderRadius: '8px',
              padding: '40px 20px', textAlign: 'center', color: '#aaa', fontSize: '0.85rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>👈</div>
              Hover or click a stage to see what you can change there
            </div>
          ) : (
            <div>
              {/* Stage header */}
              <div style={{ background: stage.color, borderRadius: '6px 6px 0 0',
                padding: '12px 16px', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.2rem' }}>{stage.icon}</span>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{stage.label}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{stage.sublabel}</div>
                  </div>
                  {pinned === stage.id && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.8 }}>
                      📌 pinned — click stage to unpin
                    </span>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div style={{ border: `2px solid ${stage.color}`, borderTop: 'none',
                borderRadius: '0 0 6px 6px', padding: '12px', background: 'white' }}>
                {stage.controls.map((ctrl, i) => {
                  const imp = IMPACT_COLORS[ctrl.impact];
                  return (
                    <div key={i} style={{
                      marginBottom: i < stage.controls.length - 1 ? '12px' : 0,
                      paddingBottom: i < stage.controls.length - 1 ? '12px' : 0,
                      borderBottom: i < stage.controls.length - 1 ? '1px solid #eee' : 'none',
                    }}>
                      {/* Control name + impact */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#222' }}>
                          {ctrl.name}
                        </span>
                        <span style={{
                          background: imp.bg, color: imp.text,
                          border: `1px solid ${imp.dot}`,
                          borderRadius: '3px', fontSize: '0.65rem',
                          padding: '1px 6px', fontWeight: 'bold',
                        }}>
                          <span style={{ color: imp.dot }}>●</span> {ctrl.impact.toUpperCase()} IMPACT
                        </span>
                      </div>

                      {/* Values as pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '7px' }}>
                        {ctrl.values.map((v, vi) => {
                          const isDefault = v.includes('←');
                          return (
                            <span key={vi} style={{
                              background: isDefault ? stage.light : '#f5f5f5',
                              border: `1px solid ${isDefault ? stage.border : '#ddd'}`,
                              borderRadius: '12px',
                              padding: '2px 10px',
                              fontSize: '0.75rem',
                              color: isDefault ? stage.color : '#444',
                              fontWeight: isDefault ? 'bold' : 'normal',
                            }}>{v}</span>
                          );
                        })}
                      </div>

                      {/* Effect explanation */}
                      <div style={{
                        background: '#fafafa', border: '1px solid #eee',
                        borderRadius: '4px', padding: '6px 10px',
                        fontSize: '0.78rem', color: '#333', lineHeight: 1.5,
                        fontStyle: 'italic',
                      }}>
                        {ctrl.effect}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Experiment cheat sheet ── */}
          <div style={{ marginTop: '16px', border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ background: '#1F4E79', color: 'white', padding: '7px 12px',
              fontSize: '0.78rem', fontWeight: 'bold' }}>
              Experiment Quick Guide — change ONE variable per run
            </div>
            <div style={{ padding: '2px 2px', whiteSpace: 'pre' }}>
              {[
                { q: 'Answers miss relevant Cntnt',     fix: '\u00A0\u00A0\u00A0→ INGESTION \u00A0→ CHUNK SIZE ↑ OR strategy change; \nor → RETRIEVAL  → k ↑' },
                { q: 'Answers have irrelevant Cntnt',   fix: '\u00A0\u00A0\u00A0→ RETRIEVAL \u00A0→ similarity threshold; \nor → RERANKING \u00A0→ add cross-encoder' },
                { q: 'Vague queries retrieve nothing',  fix: '\u00A0\u00A0\u00A0→ QUERY TX \u00A0\u00A0→ try HyDE OR rewriting' },
                { q: 'Answers hallucinate facts',       fix: '\u00A0\u00A0\u00A0→ PROMPT \u00A0\u00A0\u00A0\u00A0→ strict system instruction; \nor → RETRIEVAL \u00A0→ threshold ↑' },
                { q: 'Cost too high per query',         fix: '\u00A0\u00A0\u00A0→ RETRIEVAL \u00A0→ k ↓; → GENERATION →gpt-4o-mini; → CHUNK SIZE ↓' },
                { q: 'Answers are cut off',             fix: '\u00A0\u00A0\u00A0→ GENERATION → max_tokens ↑; \nor → CHUNK SIZE ↓ to free prompt space' },
                { q: 'Technical terms: no match',       fix: '\u00A0\u00A0\u00A0→ RETRIEVAL \u00A0→ switch to hybrid (dense + BM25)' },
                { q: 'Same Q, different Answers',       fix: '\u00A0\u00A0\u00A0→ GENERATION → temperature → 0.0' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '0.5fr 1fr',
                  gap: '8px', padding: '5px 0',
                  borderBottom: i < 7 ? '1px solid #f0f0f0' : 'none',
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#333' }}>
                    <span style={{ color: '#C0392B', fontWeight: 'bold' }}>✗</span> {row.q}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#1E5631' }}>
                    {row.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
