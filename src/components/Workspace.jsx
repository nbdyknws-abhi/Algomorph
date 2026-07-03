import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chatbot from './Chatbot';
import CodeRunner from './CodeRunner';
import { tokenizeLine } from '../utils/tokenize';
import { getTestCases } from '../data';

const badgeClass = { Easy: 'badge-easy', Medium: 'badge-medium', Hard: 'badge-hard' };

function lighten(hex, amount = 0.35) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, ((n >> 16) & 0xff) + Math.round((255 - ((n >> 16) & 0xff)) * amount));
  const g = Math.min(255, ((n >> 8)  & 0xff) + Math.round((255 - ((n >> 8)  & 0xff)) * amount));
  const b = Math.min(255, ( n        & 0xff) + Math.round((255 - ( n        & 0xff)) * amount));
  return `rgb(${r},${g},${b})`;
}

const LANGS_ALGO = ['cpp', 'python', 'java'];
const LANGS_SQL  = ['mysql', 'postgresql', 'mssql'];
const LANG_LABEL = {
  cpp: 'C++', python: 'Python', java: 'Java',
  mysql: 'MySQL', postgresql: 'PostgreSQL', mssql: 'MS SQL',
};

/* ─── Drag-to-resize divider ─────────────────────────────── */
function ResizeHandle({ onMouseDown, onTouchStart }) {
  const [active, setActive] = useState(false);

  const handleMouseDown = (e) => {
    setActive(true);
    onMouseDown(e);
    // active class removed when global mouseup fires (see startDrag cleanup)
    const onUp = () => { setActive(false); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mouseup', onUp);
  };

  return (
    <div
      className={`resize-handle${active ? ' active' : ''}`}
      onMouseDown={handleMouseDown}
      onTouchStart={onTouchStart}
    >
      <div className="resize-grip">
        {[0, 1, 2, 3, 4].map(i => <div key={i} className="resize-dot" />)}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   WORKSPACE
══════════════════════════════════════════════════════════════ */
export default function Workspace({ problem, onBack, solvedStatus, onToggleSolved }) {
  const isSql  = !!problem.solutions?.mysql;
  const langs  = isSql ? LANGS_SQL : LANGS_ALGO;
  const defaultLang = isSql ? 'mysql' : 'cpp';

  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(`leet10_lang_${problem.id}`);
    if (saved) return saved;
    return isSql ? 'mysql' : 'cpp';
  });
  const [selectedLine, setSelectedLine] = useState(() => {
    const saved = localStorage.getItem(`leet10_selectedLine_${problem.id}`);
    return saved ? parseInt(saved, 10) : null;
  });
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem(`leet10_activeTab_${problem.id}`) || 'solution';
  });
  const [codeView, setCodeView] = useState(() => {
    return localStorage.getItem(`leet10_codeView_${problem.id}`) || 'solution';
  });
  const [isMobile, setIsMobile]       = useState(() => window.innerWidth < 1024);

  /* ── Panel widths (desktop only) ── */
  const [infoW, setInfoW] = useState(() => {
    const saved = localStorage.getItem('leet10_infoW');
    return saved ? parseInt(saved, 10) : 280;
  });
  const [chatW, setChatW] = useState(() => {
    const saved = localStorage.getItem('leet10_chatW');
    return saved ? parseInt(saved, 10) : 290;
  });
  const bodyRef           = useRef(null);
  const dragRef           = useRef(null);    // { side:'left'|'right', startX, startW }

  const explanationRefs = useRef({});
  const codeLineRefs    = useRef({});

  const isSolved = solvedStatus[problem.id] || false;
  const isHard   = problem.difficulty === 'Hard';
  const badge    = badgeClass[problem.difficulty] || '';

  const solution     = problem.solutions?.[lang] || { code: '', explanation: [] };
  const codeLines    = solution.code ? solution.code.split('\n') : [];
  const explanations = solution.explanation || [];

  useEffect(() => {
    const savedLang = localStorage.getItem(`leet10_lang_${problem.id}`);
    setLang(savedLang || (isSql ? 'mysql' : 'cpp'));

    const savedLine = localStorage.getItem(`leet10_selectedLine_${problem.id}`);
    setSelectedLine(savedLine ? parseInt(savedLine, 10) : null);

    const savedCodeView = localStorage.getItem(`leet10_codeView_${problem.id}`);
    setCodeView(savedCodeView || 'solution');

    const savedActiveTab = localStorage.getItem(`leet10_activeTab_${problem.id}`);
    setActiveTab(savedActiveTab || 'solution');
  }, [problem.id, isSql]);

  useEffect(() => {
    localStorage.setItem(`leet10_lang_${problem.id}`, lang);
  }, [lang, problem.id]);

  useEffect(() => {
    if (selectedLine !== null) {
      localStorage.setItem(`leet10_selectedLine_${problem.id}`, selectedLine);
    } else {
      localStorage.removeItem(`leet10_selectedLine_${problem.id}`);
    }
  }, [selectedLine, problem.id]);

  useEffect(() => {
    localStorage.setItem(`leet10_activeTab_${problem.id}`, activeTab);
  }, [activeTab, problem.id]);

  useEffect(() => {
    localStorage.setItem(`leet10_codeView_${problem.id}`, codeView);
  }, [codeView, problem.id]);

  useEffect(() => {
    localStorage.setItem('leet10_infoW', infoW);
  }, [infoW]);

  useEffect(() => {
    localStorage.setItem('leet10_chatW', chatW);
  }, [chatW]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Resize drag logic ─────────────────────────────────── */
  const startDrag = useCallback((side, clientX) => {
    const startW = side === 'left' ? infoW : chatW;
    dragRef.current = { side, startX: clientX, startW };

    // Global CSS lock: no text selection, cursor locked to col-resize
    document.body.classList.add('is-resizing');

    const onMove = (e) => {
      if (!dragRef.current) return;
      const cx  = e.touches ? e.touches[0].clientX : e.clientX;
      const dx  = cx - dragRef.current.startX;
      const bodyW = bodyRef.current?.offsetWidth || window.innerWidth;
      const MIN = 160;
      const MAX = Math.floor(bodyW * 0.45);

      if (dragRef.current.side === 'left') {
        setInfoW(Math.max(MIN, Math.min(MAX, dragRef.current.startW + dx)));
      } else {
        setChatW(Math.max(MIN, Math.min(MAX, dragRef.current.startW - dx)));
      }
    };

    const onUp = () => {
      dragRef.current = null;
      document.body.classList.remove('is-resizing');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend',  onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend',  onUp);
  }, [infoW, chatW]);

  const handleLineClick = (n) => {
    setSelectedLine(n);
    explanationRefs.current[n]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  const handleExpClick = (n) => {
    setSelectedLine(n);
    codeLineRefs.current[n]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  /* ─── TOP BAR ──────────────────────────────────────────── */
  const TopBar = (
    <div className="glass" style={{
      height: 52, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 16px',
      flexShrink: 0, zIndex: 20,
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      borderTop: 'none', borderLeft: 'none', borderRight: 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <button onClick={onBack} className="neu-btn"
          style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', padding: '5px 10px', borderRadius: 8, fontWeight: 600, flexShrink: 0 }}>
          ← Back
        </button>
        <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />
        <span style={{
          fontSize: 13, fontWeight: 600, color: isHard ? '#fca5a5' : '#dddde8',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0,
        }}>{problem.name}</span>
        <span className={badge} style={{ fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 99, flexShrink: 0 }}>
          {problem.difficulty}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <button onClick={() => onToggleSolved(problem.id)} className="neu-btn"
          style={{
            fontSize: 10.5, fontWeight: 700, padding: '5px 10px', borderRadius: 8,
            color: isSolved ? '#4ade80' : 'rgba(255,255,255,0.4)',
            border: isSolved ? '1px solid rgba(74,222,128,0.25)' : '1px solid rgba(255,255,255,0.06)',
          }}>
          {isSolved ? '✓ Solved' : 'Mark solved'}
        </button>
        <a href={problem.leetcodeUrl} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 10.5, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          onMouseEnter={e => e.currentTarget.style.color = '#a78bff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
        >
          LeetCode ↗
        </a>
      </div>
    </div>
  );

  /* ─── INFO PANEL ───────────────────────────────────────── */
  const InfoPanel = (
    <div className="glass-light" style={{
      width: isMobile ? '100%' : infoW,
      flexShrink: 0,
      overflowY: 'auto', padding: '18px 16px',
      borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.05)',
      transition: dragRef.current ? 'none' : 'width 0.01s',
    }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', marginBottom: 6 }}>Topic</div>
        <span style={{
          fontSize: 11.5, fontWeight: 600,
          background: 'rgba(124,111,255,0.12)', border: '1px solid rgba(124,111,255,0.22)',
          color: '#c4b8ff', padding: '3px 10px', borderRadius: 99,
        }}>{problem.topic}</span>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', marginBottom: 6 }}>Description</div>
        <div className="neu-inset" style={{ padding: '10px 12px', borderRadius: 10 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
            {problem.description}
          </p>
        </div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', marginBottom: 6 }}>
          Example Test Cases
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {getTestCases(problem.id).slice(0, 3).map((tc, idx) => (
            <div key={idx} className="neu-inset" style={{ padding: '8px 10px', borderRadius: 8, fontSize: 11.5 }}>
              <div style={{ fontWeight: 700, color: '#a78bff', marginBottom: 3, fontSize: 10 }}>Example {idx + 1}</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
                <strong>Input:</strong> {tc.input.replace(/\n/g, ', ')}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', marginTop: 2, fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
                <strong>Output:</strong> <span style={{ color: '#4ade80', fontWeight: 600 }}>{tc.expected}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', marginBottom: 6 }}>💡 Tip</div>
        <div className="highlight-tip" style={{ padding: '10px 13px' }}>
          <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            {problem.tip}
          </p>
        </div>
      </div>
    </div>
  );

  /* ─── SOLUTION VIEWER ──────────────────────────────────── */
  const SolutionViewer = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{
        height: 46, borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 4,
        background: 'rgba(0,0,0,0.2)', flexShrink: 0,
      }}>
        {langs.map(l => (
          <button key={l} onClick={() => setLang(l)}
            className={lang === l ? 'neu-raised' : 'neu-btn'}
            style={{
              fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 7,
              color: lang === l ? '#c4b8ff' : 'rgba(255,255,255,0.3)',
              border: lang === l ? '1px solid rgba(167,139,255,0.2)' : '1px solid transparent',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
            {LANG_LABEL[l]}
          </button>
        ))}
        <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.15)', marginLeft: 'auto', flexShrink: 0 }}>
          tap annotated line
        </div>
      </div>

      <div className="neu-inset code-scroll-area" style={{ flex: '0 0 55%', borderRadius: 0, padding: '8px 0' }}>
        <div style={{ minWidth: 'max-content' }}>
          {codeLines.map((line, idx) => {
            const n = idx + 1;
            const hasExp  = explanations.some(e => e.line === n);
            const isActive = selectedLine === n;
            return (
              <div key={idx} ref={el => codeLineRefs.current[n] = el}
                onClick={() => hasExp && handleLineClick(n)}
                className={isActive ? 'highlight-code-active' : ''}
                style={{
                  display: 'flex', alignItems: 'baseline', padding: '1.5px 16px',
                  cursor: hasExp ? 'pointer' : 'default', transition: 'background 0.1s',
                  borderLeft: isActive ? undefined : '2px solid transparent',
                }}
                onMouseEnter={e => { if (hasExp && !isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{
                  width: 30, fontSize: 10, textAlign: 'right', paddingRight: 14, flexShrink: 0,
                  fontFamily: 'JetBrains Mono, monospace', userSelect: 'none',
                  color: isActive ? '#7c6fff' : (hasExp ? 'rgba(124,111,255,0.4)' : 'rgba(255,255,255,0.1)'),
                  fontWeight: isActive ? 700 : 400,
                }}>{n}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre', fontSize: 12.5, lineHeight: 1.75 }}>
                  {(line ? tokenizeLine(line, lang) : [{ text: ' ', color: 'transparent' }])
                    .map((tok, ti) => (
                      <span key={ti} style={{ color: isActive ? lighten(tok.color) : tok.color }}>{tok.text}</span>
                    ))}
                </span>
                {hasExp && !isActive && (
                  <span style={{ paddingLeft: 8, fontSize: 9, color: 'rgba(124,111,255,0.3)', flexShrink: 0 }}>●</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-light" style={{
        flex: 1, borderTop: '1px solid rgba(255,255,255,0.05)',
        overflowY: 'auto', padding: '10px 12px', minHeight: 0,
      }}>
        <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'rgba(255,255,255,0.2)', marginBottom: 8 }}>
          Annotations
        </div>
        {explanations.length === 0 && (
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
            Click a highlighted line to see its annotation.
          </p>
        )}
        {explanations.map(item => {
          const isActive = selectedLine === item.line;
          return (
            <div key={item.line} ref={el => explanationRefs.current[item.line] = el}
              onClick={() => handleExpClick(item.line)}
              className={isActive ? 'highlight-annotation-active' : ''}
              style={{
                display: 'flex', gap: 8, padding: '8px 10px', borderRadius: 8, marginBottom: 3,
                cursor: 'pointer', border: '1px solid transparent', transition: 'all 0.12s',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.border = '1px solid transparent'; } }}
            >
              <span style={{
                fontSize: 9.5, fontFamily: 'JetBrains Mono, monospace', fontWeight: 700,
                color: isActive ? '#c4b8ff' : 'rgba(255,255,255,0.2)', flexShrink: 0,
                background: isActive ? 'rgba(124,111,255,0.15)' : 'rgba(255,255,255,0.04)',
                padding: '1px 5px', borderRadius: 4, height: 'fit-content',
              }}>{item.line}</span>
              <span style={{ fontSize: 12, color: isActive ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* ─── MIDDLE COLUMN ────────────────────────────────────── */
  const CodePanel = (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Sub-tab switcher */}
      <div style={{
        display: 'flex', alignItems: 'center', height: 42,
        background: 'rgba(0,0,0,0.25)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0, padding: '0 12px', gap: 2,
      }}>
        {[
          { id: 'solution', label: '📖 Solution' },
          { id: 'tryit',    label: '▶ Try It' },
        ].map(v => (
          <button key={v.id} onClick={() => setCodeView(v.id)}
            style={{
              padding: '4px 12px', borderRadius: 7, fontSize: 11, fontWeight: 700,
              border: codeView === v.id ? '1px solid rgba(167,139,255,0.25)' : '1px solid transparent',
              background: codeView === v.id ? 'rgba(124,111,255,0.12)' : 'transparent',
              color: codeView === v.id ? '#c4b8ff' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
            {v.label}
          </button>
        ))}

        {/* Resize hint — only desktop */}
        {!isMobile && (
          <span style={{
            marginLeft: 'auto', fontSize: 9.5, color: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            ⟺ drag dividers to resize
          </span>
        )}
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        {codeView === 'solution' ? SolutionViewer : <CodeRunner problem={problem} />}
      </div>
    </div>
  );

  /* ─── CHAT PANEL ───────────────────────────────────────── */
  const ChatPanel = (
    <div className="glass" style={{
      width: isMobile ? '100%' : chatW,
      flexShrink: 0,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.05)',
      transition: dragRef.current ? 'none' : 'width 0.01s',
    }}>
      <Chatbot activeProblem={problem} />
    </div>
  );

  /* ─── MOBILE BOTTOM TAB BAR ────────────────────────────── */
  const MobileTabBar = (
    <div className="glass" style={{
      height: 50, display: 'flex', flexShrink: 0,
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(8,8,16,0.95)',
      borderLeft: 'none', borderRight: 'none', borderBottom: 'none',
    }}>
      {[
        { id: 'info',     label: '📖 Info' },
        { id: 'solution', label: '💻 Solution' },
        { id: 'tryit',    label: '▶ Try It' },
        { id: 'chat',     label: '💬 AI' },
      ].map(tab => (
        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
          style={{
            flex: 1, border: 'none', background: 'transparent',
            fontSize: 10, fontWeight: 700,
            color: activeTab === tab.id ? '#a78bff' : 'rgba(255,255,255,0.3)',
            borderTop: activeTab === tab.id ? '2px solid #7c6fff' : '2px solid transparent',
            cursor: 'pointer', transition: 'all 0.15s',
          }}>
          {tab.label}
        </button>
      ))}
    </div>
  );

  /* ─── RENDER ────────────────────────────────────────────── */
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {TopBar}

      <div ref={bodyRef} style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

        {/* ── DESKTOP layout with resize handles ── */}
        {!isMobile && (
          <>
            {/* Left: Info panel */}
            {InfoPanel}

            {/* Divider 1: Info ↔ Code */}
            <ResizeHandle
              onMouseDown={(e) => { e.preventDefault(); startDrag('left', e.clientX); }}
              onTouchStart={(e) => { startDrag('left', e.touches[0].clientX); }}
            />

            {/* Middle: Code/Try It */}
            {CodePanel}

            {/* Divider 2: Code ↔ Chat */}
            <ResizeHandle
              onMouseDown={(e) => { e.preventDefault(); startDrag('right', e.clientX); }}
              onTouchStart={(e) => { startDrag('right', e.touches[0].clientX); }}
            />

            {/* Right: Chat */}
            {ChatPanel}
          </>
        )}

        {/* ── MOBILE: single active panel ── */}
        {isMobile && activeTab === 'info'     && InfoPanel}
        {isMobile && activeTab === 'solution' && (
          <div style={{ flex: 1, overflow: 'hidden' }}>{SolutionViewer}</div>
        )}
        {isMobile && activeTab === 'tryit' && (
          <div style={{ flex: 1, overflow: 'hidden' }}><CodeRunner problem={problem} /></div>
        )}
        {isMobile && activeTab === 'chat' && ChatPanel}
      </div>

      {isMobile && MobileTabBar}
    </div>
  );
}
