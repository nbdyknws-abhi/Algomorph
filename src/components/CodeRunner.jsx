import React, { useState, useEffect, useRef, useCallback } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { runSQL }   from '../utils/sqlRunner';
import { sqlSchemas } from '../data/sqlSchemas';
import { wrapCode, hasHarness } from '../utils/testHarness';

/* ─── Language config ────────────────────────────────────── */
const ALGO_LANGS = [
  { id: 'cpp',    label: 'C++',    onecompiler: 'cpp',    monacoLang: 'cpp' },
  { id: 'python', label: 'Python', onecompiler: 'python', monacoLang: 'python' },
  { id: 'java',   label: 'Java',   onecompiler: 'java',   monacoLang: 'java' },
];
const SQL_LANGS = [
  { id: 'mysql',      label: 'MySQL',      monacoLang: 'sql' },
  { id: 'postgresql', label: 'PostgreSQL', monacoLang: 'sql' },
  { id: 'mssql',      label: 'MS SQL',     monacoLang: 'sql' },
];

const OC_THEME = 'dark';

/* ─── Monaco custom theme ────────────────────────────────── */
function defineTheme(monaco) {
  monaco.editor.defineTheme('leet10-dark', {
    base: 'vs-dark', inherit: true,
    rules: [
      { token: 'comment',    foreground: '6a737d', fontStyle: 'italic' },
      { token: 'keyword',    foreground: 'c792ea', fontStyle: 'bold' },
      { token: 'string',     foreground: 'a8ff78' },
      { token: 'number',     foreground: 'f78c6c' },
      { token: 'type',       foreground: 'ffcb6b' },
      { token: 'delimiter',  foreground: '89ddff' },
      { token: 'operator',   foreground: '89ddff' },
    ],
    colors: {
      'editor.background':                  '#0a0a18',
      'editor.lineHighlightBackground':     '#151530',
      'editorLineNumber.foreground':         '#3c3c58',
      'editorLineNumber.activeForeground':  '#7c6fff',
      'editor.selectionBackground':         '#3c3c7040',
      'editorCursor.foreground':            '#a78bff',
      'scrollbarSlider.background':         '#2a2a44',
      'scrollbarSlider.hoverBackground':    '#3a3a5a',
    },
  });
}

/* ─── SQL Status badge ───────────────────────────────────── */
function StatusBadge({ label, color }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px', borderRadius: 99, fontSize: 11, fontWeight: 700,
      background: `${color}18`, border: `1px solid ${color}40`, color,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
      {label}
    </span>
  );
}

/* ─── SQL result table ───────────────────────────────────── */
function SQLTable({ columns, rows }) {
  if (!columns?.length) return null;
  return (
    <div style={{ overflowX: 'auto', maxHeight: '100%' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JetBrains Mono, monospace', fontSize: 11.5 }}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col} style={{
                padding: '6px 12px', textAlign: 'left', fontSize: 10,
                fontWeight: 700, color: '#a78bff', letterSpacing: '0.06em',
                borderBottom: '1px solid rgba(124,111,255,0.3)',
                background: 'rgba(124,111,255,0.06)', textTransform: 'uppercase',
              }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '5px 12px',
                  color: cell === null ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)',
                  fontStyle: cell === null ? 'italic' : 'normal', fontSize: 11.5,
                }}>
                  {cell === null ? 'NULL' : String(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── SQL Spinner ────────────────────────────────────────── */
function SQLSpinner() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)' }}>
      <div style={{
        width: 14, height: 14, borderRadius: '50%',
        border: '2px solid rgba(124,111,255,0.2)', borderTopColor: '#a78bff',
        animation: 'spin 0.6s linear infinite',
      }} />
      <span style={{ fontSize: 11.5 }}>Executing SQL…</span>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

/* ─── Output block ───────────────────────────────────────── */
function OutputBlock({ label, content, color }) {
  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: `${color}99`, marginBottom: 4 }}>
        {label}
      </div>
      <pre style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, lineHeight: 1.6,
        color: 'rgba(255,255,255,0.65)', background: 'rgba(0,0,0,0.25)',
        border: `1px solid ${color}22`, borderRadius: 8, padding: '8px 10px',
        whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0,
        maxHeight: 140, overflowY: 'auto',
      }}>
        {content.trimEnd()}
      </pre>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ALGO RUNNER — Monaco Editor + Slide-up Console Drawer
══════════════════════════════════════════════════════════════ */
function AlgoRunner({ problem, activeLang, code, onLangChange, langs }) {
  const [currentCode, setCode] = useState(() => {
    const saved = localStorage.getItem(`leet10_code_${problem.id}_${activeLang}`);
    return saved !== null ? saved : code;
  });

  const [syncStatus, setSyncStatus] = useState('');
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0); // Sandbox reload key

  const editorRef = useRef(null);
  const iframeRef = useRef(null);

  // Sync Monaco editor content when problem/language changes
  useEffect(() => {
    const savedCode = localStorage.getItem(`leet10_code_${problem.id}_${activeLang}`);
    const finalCode = savedCode !== null ? savedCode : code;
    setCode(finalCode);
    editorRef.current?.setValue?.(finalCode);
    setSyncStatus('');
    setIsConsoleOpen(false);
  }, [code, activeLang, problem.id]);

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
    defineTheme(monaco);
    monaco.editor.setTheme('leet10-dark');
    editor.updateOptions({
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 13, lineHeight: 22, tabSize: 4,
    });
  };

  const handleCodeChange = (val) => {
    const value = val ?? '';
    setCode(value);
    localStorage.setItem(`leet10_code_${problem.id}_${activeLang}`, value);
  };

  const resetCode = () => {
    setCode(code);
    editorRef.current?.setValue?.(code);
    localStorage.setItem(`leet10_code_${problem.id}_${activeLang}`, code);
    setSyncStatus('');
    setIsConsoleOpen(false);

    // Sync reset code to Sandbox
    const iframe = iframeRef.current;
    const langConf = langs.find(l => l.id === activeLang);
    const ocLang = langConf?.onecompiler || activeLang;
    const fileName = ocLang === 'python' ? 'main.py' : (ocLang === 'cpp' ? 'main.cpp' : 'Main.java');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        eventType: 'populateCode',
        language: ocLang,
        files: [{ name: fileName, content: code }]
      }, '*');
    }
  };

  // Sync code + testcases directly to Sandbox
  const handleSyncToSandbox = () => {
    const iframe = iframeRef.current;
    const langConf = langs.find(l => l.id === activeLang);
    const ocLang = langConf?.onecompiler || activeLang;
    const fileName = ocLang === 'python' ? 'main.py' : (ocLang === 'cpp' ? 'main.cpp' : 'Main.java');

    const hasCases = hasHarness(problem.id, activeLang);
    const codeToInject = wrapCode(problem.id, activeLang, currentCode);

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        eventType: 'populateCode',
        language: ocLang,
        files: [{ name: fileName, content: codeToInject }]
      }, '*');
    }

    setIsConsoleOpen(true); // Automatically open the console drawer
    setSyncStatus(hasCases ? '✓ 12 test cases injected! Click Run inside sandbox console.' : '✓ Code synced! Click Run inside sandbox console.');
    setTimeout(() => setSyncStatus(''), 5000);
  };

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    const langConf = langs.find(l => l.id === activeLang);
    const ocLang = langConf?.onecompiler || activeLang;
    const fileName = ocLang === 'python' ? 'main.py' : (ocLang === 'cpp' ? 'main.cpp' : 'Main.java');
    const codeToInject = wrapCode(problem.id, activeLang, currentCode);

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        eventType: 'populateCode',
        language: ocLang,
        files: [{ name: fileName, content: codeToInject }]
      }, '*');
    }
  };

  const getLang = () => langs.find(l => l.id === activeLang);

  const getOneCompilerUrl = () => {
    const langConf = getLang();
    const ocLang = langConf?.onecompiler || activeLang;
    return `https://onecompiler.com/embed/${ocLang}?theme=${OC_THEME}&hideNew=true&hideLanguageSelection=true&listenToEvents=true`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', background: '#0a0a18' }}>

      {/* ── Toolbar ── */}
      <div style={{
        height: 46, display: 'flex', alignItems: 'center', gap: 4, padding: '0 12px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(0,0,0,0.25)', flexShrink: 0,
      }}>
        {langs.map(l => (
          <button
            key={l.id}
            onClick={() => onLangChange(l.id)}
            style={{
              fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 7,
              border: activeLang === l.id ? '1px solid rgba(167,139,255,0.25)' : '1px solid transparent',
              background: activeLang === l.id ? 'rgba(124,111,255,0.12)' : 'transparent',
              color: activeLang === l.id ? '#c4b8ff' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
            }}
          >
            {l.label}
          </button>
        ))}

        <div style={{ flex: 1 }} />

        {/* Reset */}
        <button
          onClick={resetCode}
          title="Reset to solution code"
          style={{
            fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 7,
            border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)',
            color: 'rgba(255,255,255,0.28)', cursor: 'pointer', transition: 'all 0.15s',
          }}
        >
          ↺ Reset
        </button>
      </div>

      {/* ── Monaco Editor Area (expanded or compressed depending on console) ── */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
        <MonacoEditor
          height="100%"
          language={getLang()?.monacoLang || 'cpp'}
          value={currentCode}
          theme="leet10-dark"
          onChange={handleCodeChange}
          onMount={handleEditorMount}
          options={{
            minimap: { enabled: false },
            fontSize: 13, lineHeight: 22,
            fontFamily: "'JetBrains Mono', monospace",
            fontLigatures: true,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            renderLineHighlight: 'gutter',
            bracketPairColorization: { enabled: true },
            padding: { top: 12, bottom: 12 },
            smoothScrolling: true,
            cursorBlinking: 'smooth',
            scrollbar: { verticalScrollbarSize: 5, horizontalScrollbarSize: 5 },
          }}
        />
      </div>

      {/* ── Bottom Console Drawer ── */}
      <div style={{
        height: isConsoleOpen ? 320 : 40,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: '#080812',
        display: 'flex', flexDirection: 'column',
        transition: 'height 0.2s ease',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Console Header Bar */}
        <div
          onClick={() => setIsConsoleOpen(!isConsoleOpen)}
          style={{
            height: 40, padding: '0 16px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', cursor: 'pointer',
            background: 'rgba(255,255,255,0.01)',
            userSelect: 'none', flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: isConsoleOpen ? '#a78bff' : 'rgba(255,255,255,0.4)' }}>
              Console 
            </span>
            {syncStatus && (
              <span style={{ fontSize: 10.5, color: '#4ade80', transition: 'all 0.3s ease' }}>
                {syncStatus}
              </span>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} onClick={e => e.stopPropagation()}>
            <button
              onClick={handleSyncToSandbox}
              style={{
                fontSize: 10.5, fontWeight: 700, padding: '4px 12px', borderRadius: 6,
                border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg,#7c6fff,#e879f9)',
                color: '#fff', boxShadow: '0 2px 8px rgba(124,111,255,0.3)',
              }}
            >
              ⚡ Inject Cases & Run
            </button>
            <span
              onClick={() => setIsConsoleOpen(!isConsoleOpen)}
              style={{
                fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
                transform: isConsoleOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                display: 'inline-block', padding: '0 4px',
              }}
            >
              ▲
            </span>
          </div>
        </div>

        {/* Sandbox IFrame content */}
        <div style={{ flex: 1, display: isConsoleOpen ? 'block' : 'none', position: 'relative', background: '#0a0a18' }}>
          <iframe
            ref={iframeRef}
            key={activeLang}
            onLoad={handleIframeLoad}
            src={getOneCompilerUrl()}
            title="OneCompiler Playground"
            style={{ width: '100%', height: '100%', border: 'none' }}
            sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SQL RUNNER — Monaco Editor + Slide-up Table Results
══════════════════════════════════════════════════════════════ */
function SQLRunner({ problem, activeLang, code, onLangChange, langs }) {
  const [currentCode, setCode] = useState(() => {
    const saved = localStorage.getItem(`leet10_code_${problem.id}_${activeLang}`);
    return saved !== null ? saved : code;
  });
  const [running, setRunning]  = useState(false);
  const [result,  setResult]   = useState(() => {
    const saved = localStorage.getItem(`leet10_result_${problem.id}_${activeLang}`);
    return saved ? JSON.parse(saved) : null;
  });
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  const editorRef = useRef(null);

  useEffect(() => {
    const savedCode = localStorage.getItem(`leet10_code_${problem.id}_${activeLang}`);
    const finalCode = savedCode !== null ? savedCode : code;
    setCode(finalCode);
    editorRef.current?.setValue?.(finalCode);

    const savedResult = localStorage.getItem(`leet10_result_${problem.id}_${activeLang}`);
    setResult(savedResult ? JSON.parse(savedResult) : null);
    setIsConsoleOpen(false);
  }, [code, activeLang, problem.id]);

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
    defineTheme(monaco);
    monaco.editor.setTheme('leet10-dark');
    editor.updateOptions({ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 22 });
  };

  const handleCodeChange = (val) => {
    const value = val ?? '';
    setCode(value);
    localStorage.setItem(`leet10_code_${problem.id}_${activeLang}`, value);
  };

  const handleRun = useCallback(async () => {
    setRunning(true);
    setResult(null);
    setIsConsoleOpen(true); // Auto expand results drawer
    localStorage.removeItem(`leet10_result_${problem.id}_${activeLang}`);
    try {
      const schema = sqlSchemas[String(problem.id)];
      const res = await runSQL(currentCode, schema);
      setResult(res);
      localStorage.setItem(`leet10_result_${problem.id}_${activeLang}`, JSON.stringify(res));
    } catch (err) {
      const errRes = { error: err.message, columns: [], rows: [], rowCount: 0 };
      setResult(errRes);
      localStorage.setItem(`leet10_result_${problem.id}_${activeLang}`, JSON.stringify(errRes));
    } finally {
      setRunning(false);
    }
  }, [currentCode, problem.id, activeLang]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); if (!running) handleRun(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleRun, running]);

  const schema = sqlSchemas[String(problem.id)];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', background: '#0a0a18' }}>

      {/* Toolbar */}
      <div style={{
        height: 46, display: 'flex', alignItems: 'center', gap: 4, padding: '0 12px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(0,0,0,0.25)', flexShrink: 0,
      }}>
        {langs.map(l => (
          <button
            key={l.id}
            onClick={() => onLangChange(l.id)}
            style={{
              fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 7,
              border: activeLang === l.id ? '1px solid rgba(167,139,255,0.25)' : '1px solid transparent',
              background: activeLang === l.id ? 'rgba(124,111,255,0.12)' : 'transparent',
              color: activeLang === l.id ? '#c4b8ff' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
          >
            {l.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
      </div>

      {/* Monaco SQL editor */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
        <MonacoEditor
          height="100%"
          language="sql"
          value={currentCode}
          theme="leet10-dark"
          onChange={handleCodeChange}
          onMount={handleEditorMount}
          options={{
            minimap: { enabled: false }, fontSize: 13, lineHeight: 22,
            fontFamily: "'JetBrains Mono', monospace", fontLigatures: true,
            wordWrap: 'on', scrollBeyondLastLine: false,
            padding: { top: 12, bottom: 12 }, smoothScrolling: true,
            scrollbar: { verticalScrollbarSize: 5, horizontalScrollbarSize: 5 },
          }}
        />
        <div style={{
          position: 'absolute', bottom: 8, right: 12, pointerEvents: 'none',
          fontSize: 10, color: 'rgba(255,255,255,0.12)', fontFamily: 'JetBrains Mono, monospace',
        }}>
          {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+Enter to run
        </div>
      </div>

      {/* SQL Bottom Results Drawer */}
      <div style={{
        height: isConsoleOpen ? 300 : 40,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: '#080812',
        display: 'flex', flexDirection: 'column',
        transition: 'height 0.2s ease',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Header */}
        <div
          onClick={() => setIsConsoleOpen(!isConsoleOpen)}
          style={{
            height: 40, padding: '0 16px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', cursor: 'pointer',
            background: 'rgba(255,255,255,0.01)',
            userSelect: 'none', flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 11.5, fontWeight: 700, color: isConsoleOpen ? '#a78bff' : 'rgba(255,255,255,0.4)' }}>
            Query Results 📊
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} onClick={e => e.stopPropagation()}>
            <button
              onClick={handleRun}
              disabled={running}
              title="Run SQL (Ctrl+Enter)"
              style={{
                fontSize: 10.5, fontWeight: 700, padding: '4px 14px', borderRadius: 6,
                border: 'none', cursor: running ? 'not-allowed' : 'pointer',
                background: running ? 'rgba(124,111,255,0.2)' : 'linear-gradient(135deg,#6c5ce7,#9333ea)',
                color: running ? 'rgba(255,255,255,0.4)' : '#fff',
                boxShadow: running ? 'none' : '0 2px 8px rgba(124,111,255,0.3)',
              }}
            >
              {running ? '◌ Running…' : '▶ Run SQL'}
            </button>
            <span
              onClick={() => setIsConsoleOpen(!isConsoleOpen)}
              style={{
                fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
                transform: isConsoleOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                display: 'inline-block', padding: '0 4px',
              }}
            >
              ▲
            </span>
          </div>
        </div>

        {/* Content body */}
        <div style={{ flex: 1, display: isConsoleOpen ? 'flex' : 'none', overflow: 'hidden', padding: '12px 14px' }}>
          {/* Table Schema detail */}
          <div style={{ width: 180, borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: 12, overflowY: 'auto', flexShrink: 0 }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 4 }}>Schema</div>
            <p style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, margin: 0 }}>{schema?.description}</p>
          </div>

          {/* Results outputs */}
          <div style={{ flex: 1, paddingLeft: 12, overflowY: 'auto' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 6 }}>Output Table</div>
            
            {running && <SQLSpinner />}
            
            {!running && !result && (
              <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.18)', fontStyle: 'italic', margin: 0 }}>
                Execute query to show output.
              </p>
            )}

            {result && !running && (
              result.error ? (
                <OutputBlock label="SQL Error" content={result.error} color="#f87171" />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <StatusBadge label="Success" color="#4ade80" />
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {result.rowCount} row{result.rowCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                  {result.message && !result.columns?.length && (
                    <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', margin: 0 }}>{result.message}</p>
                  )}
                  <SQLTable columns={result.columns} rows={result.rows} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CodeRunner ─── */
export default function CodeRunner({ problem }) {
  const isSql  = !!problem.solutions?.mysql;
  const langs  = isSql ? SQL_LANGS : ALGO_LANGS;
  const [activeLang, setActiveLang] = useState(isSql ? 'mysql' : 'cpp');

  useEffect(() => {
    setActiveLang(isSql ? 'mysql' : 'cpp');
  }, [problem.id, isSql]);

  const getCode = () => problem.solutions?.[activeLang]?.code
    ?? (isSql
      ? `-- Write your ${activeLang.toUpperCase()} query here\nSELECT * FROM ...;`
      : `// Write your ${activeLang} solution here\n`);

  return isSql
    ? <SQLRunner   problem={problem} activeLang={activeLang} code={getCode()} onLangChange={setActiveLang} langs={langs} />
    : <AlgoRunner  problem={problem} activeLang={activeLang} code={getCode()} onLangChange={setActiveLang} langs={langs} />;
}
