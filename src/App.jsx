import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import { allProblems, sqlTiers } from './data';

const badgeClass = { Easy: 'badge-easy', Medium: 'badge-medium', Hard: 'badge-hard' };

export default function App() {
  const [roadmap, setRoadmap] = useState(() => {
    return localStorage.getItem('leet10_roadmap') || 'algorithms';
  });
  const [activeDay, setActiveDay] = useState(() => {
    const val = localStorage.getItem('leet10_activeDay');
    return val ? parseInt(val, 10) : 1;
  });
  const [activeSqlTier, setActiveSqlTier] = useState(() => {
    const val = localStorage.getItem('leet10_activeSqlTier');
    return val ? parseInt(val, 10) : 1;
  });
  const [activeProblem, setActiveProblem] = useState(() => {
    const savedId = localStorage.getItem('leet10_activeProblemId');
    if (savedId) {
      const idNum = parseInt(savedId, 10);
      for (const d of Object.values(allProblems)) {
        const found = d.problems.find(p => p.id === idNum);
        if (found) return found;
      }
      for (const t of Object.values(sqlTiers)) {
        const found = t.problems.find(p => p.id === idNum);
        if (found) return found;
      }
    }
    return null;
  });
  const [solvedStatus, setSolvedStatus] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('leet10_solved');
    if (saved) { try { setSolvedStatus(JSON.parse(saved)); } catch {} }
  }, []);

  // Close sidebar on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSidebarOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleSolved = (id) => {
    setSolvedStatus(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem('leet10_solved', JSON.stringify(updated));
      return updated;
    });
  };

  const updateRoadmap = (r) => {
    setRoadmap(r);
    localStorage.setItem('leet10_roadmap', r);
  };

  const updateActiveDay = (d) => {
    setActiveDay(d);
    localStorage.setItem('leet10_activeDay', d);
  };

  const updateActiveSqlTier = (t) => {
    setActiveSqlTier(t);
    localStorage.setItem('leet10_activeSqlTier', t);
  };

  const updateActiveProblem = (p) => {
    setActiveProblem(p);
    if (p) {
      localStorage.setItem('leet10_activeProblemId', p.id);
    } else {
      localStorage.removeItem('leet10_activeProblemId');
    }
  };

  const currentDay  = allProblems[activeDay];
  const currentTier = sqlTiers[activeSqlTier];

  let totalInSec = 0, solvedInSec = 0;
  if (roadmap === 'algorithms') {
    totalInSec  = currentDay?.problems.length || 0;
    solvedInSec = currentDay?.problems.filter(p => solvedStatus[p.id]).length || 0;
  } else {
    const ids   = new Set(currentTier?.problems.map(p => p.id) || []);
    totalInSec  = ids.size;
    solvedInSec = Array.from(ids).filter(id => solvedStatus[id]).length;
  }
  const pct = totalInSec ? (solvedInSec / totalInSec) * 100 : 0;
  const currentSection = roadmap === 'algorithms' ? currentDay : currentTier;

  const closeSidebar = () => setSidebarOpen(false);

  if (activeProblem) {
    return (
      <>
        <div className="aurora-bg" />
        <Workspace
          problem={activeProblem}
          onBack={() => updateActiveProblem(null)}
          solvedStatus={solvedStatus}
          onToggleSolved={toggleSolved}
        />
      </>
    );
  }

  return (
    <div className="app-root">
      <div className="aurora-bg" />

      {/* Backdrop */}
      <div
        className={`mobile-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <Sidebar
        allProblems={allProblems}
        activeDay={activeDay}
        setActiveDay={d  => { updateActiveDay(d);       closeSidebar(); }}
        solvedStatus={solvedStatus}
        roadmap={roadmap}
        setRoadmap={r    => { updateRoadmap(r);          closeSidebar(); }}
        sqlTiers={sqlTiers}
        activeSqlTier={activeSqlTier}
        setActiveSqlTier={t => { updateActiveSqlTier(t); closeSidebar(); }}
        isOpen={sidebarOpen}
      />

      {/* Main scrollable area */}
      <main className="main-content">

        {/* Sticky header */}
        <div className="glass header-pad" style={{
          padding: '20px 28px 14px',
          position: 'sticky', top: 0, zIndex: 20,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          borderLeft: 'none', borderRight: 'none', borderTop: 'none',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>

            {/* Hamburger — only on mobile (CSS hides on desktop) */}
            <button
              className="mobile-toggle-btn neu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              style={{
                padding: '8px 10px', borderRadius: 8, cursor: 'pointer',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M1 1h16M1 7h16M1 13h16" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Title block */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: '#7c6fff', marginBottom: 3,
              }}>
                {roadmap === 'algorithms' ? `Day ${activeDay}` : `Tier ${activeSqlTier}`}
              </div>
              <h1 style={{
                fontSize: 'clamp(16px, 3vw, 22px)',
                fontWeight: 700, color: '#dddde8', letterSpacing: '-0.4px',
                margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {currentSection?.title}
              </h1>
            </div>

            {/* Stat pill */}
            <div className="neu-raised" style={{
              padding: '7px 14px', borderRadius: 99,
              display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0,
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: solvedInSec === totalInSec && totalInSec > 0 ? '#4ade80' : '#7c6fff',
              }} />
              <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                <span style={{ color: '#dddde8', fontWeight: 700 }}>{solvedInSec}</span>
                /{totalInSec} solved
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 12, height: 3, background: 'rgba(255,255,255,0.04)', borderRadius: 99, overflow: 'hidden' }}>
            <div className="progress-fill" style={{ height: '100%', width: `${pct}%`, borderRadius: 99, transition: 'width 0.4s ease' }} />
          </div>
        </div>

        {/* Cards */}
        <div className="content-block">

          {/* Tip */}
          {currentSection?.tip && (
            <div className="highlight-tip" style={{ marginBottom: 24, padding: '13px 16px' }}>
              <div style={{
                fontSize: 10, fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: '#a78bff', marginBottom: 5,
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                <span>💡</span>
                Key Insight — {roadmap === 'algorithms' ? `Day ${activeDay}` : `Tier ${activeSqlTier}`}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
                {currentSection.tip}
              </p>
            </div>
          )}

          <div style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)', marginBottom: 10,
          }}>
            Problems · {currentSection?.problems.length || 0} total
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {currentSection?.problems.map((problem, idx) => {
              const isSolved = solvedStatus[problem.id] || false;
              const isHard   = problem.difficulty === 'Hard';
              const badge    = badgeClass[problem.difficulty] || '';

              return (
                <div
                  key={`${problem.id}-${idx}`}
                  className={`clay-card animate-fade-in${isHard ? ' hard-card' : ''}${isSolved ? ' solved-card' : ''}`}
                  onClick={() => updateActiveProblem(problem)}
                  style={{ animationDelay: `${idx * 0.025}s` }}
                >
                  <div className="problem-card-row">

                    {/* Checkbox */}
                    <button
                      onClick={e => { e.stopPropagation(); toggleSolved(problem.id); }}
                      className={isSolved ? '' : 'neu-btn'}
                      style={{
                        width: 20, height: 20, borderRadius: 6,
                        flexShrink: 0, padding: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isSolved ? 'rgba(74,222,128,0.15)' : undefined,
                        border: isSolved
                          ? '1.5px solid rgba(74,222,128,0.4)'
                          : '1.5px solid rgba(255,255,255,0.06)',
                        boxShadow: isSolved ? '0 0 8px rgba(74,222,128,0.2)' : undefined,
                        cursor: 'pointer', transition: 'all 0.18s',
                      }}
                    >
                      {isSolved && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                          className="animate-pop" style={{ display: 'block', margin: 'auto' }}>
                          <path d="M2 5l2.5 2.5L8 3" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>

                    {/* Index number */}
                    <span style={{
                      fontSize: 10, fontWeight: 700,
                      color: 'rgba(255,255,255,0.12)',
                      fontFamily: 'JetBrains Mono, monospace',
                      flexShrink: 0,
                    }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Problem name — truncates if needed */}
                    <span className="problem-name" style={{
                      fontSize: 13.5, fontWeight: 500, letterSpacing: '-0.1px',
                      color: isSolved
                        ? 'rgba(255,255,255,0.25)'
                        : (isHard ? '#fca5a5' : '#dddde8'),
                      textDecoration: isSolved ? 'line-through' : 'none',
                    }}>
                      {problem.name}
                    </span>

                    {/* Meta: topic + badge + link — flex-shrink so they compress instead of overflow */}
                    <div className="problem-meta">
                      {/* Topic — hidden on mobile via CSS class */}
                      <span className="topic-col" style={{
                        fontSize: 10.5, color: 'rgba(255,255,255,0.22)',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        maxWidth: 120,
                      }}>
                        {problem.topic}
                      </span>

                      {/* Difficulty badge */}
                      <span className={badge} style={{
                        fontSize: 9.5, fontWeight: 700,
                        padding: '2px 8px', borderRadius: 99,
                        whiteSpace: 'nowrap', letterSpacing: '0.04em',
                      }}>
                        {problem.difficulty}
                      </span>

                      {/* LeetCode link */}
                      <a
                        href={problem.leetcodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        title={`#${problem.id} on LeetCode`}
                        style={{
                          fontSize: 10, fontFamily: 'JetBrains Mono, monospace',
                          color: 'rgba(255,255,255,0.18)', textDecoration: 'none',
                          whiteSpace: 'nowrap', transition: 'color 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#a78bff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.18)'}
                      >
                        #{problem.id}↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
