import React from 'react';

export default function Sidebar({
  allProblems,
  activeDay,
  setActiveDay,
  solvedStatus,
  roadmap,
  setRoadmap,
  sqlTiers,
  activeSqlTier,
  setActiveSqlTier,
  isOpen,
}) {
  // Compute counts depending on roadmap
  let totalCount = 0;
  let solvedCount = 0;

  if (roadmap === 'algorithms') {
    totalCount = Object.values(allProblems).reduce((s, d) => s + d.problems.length, 0);
    solvedCount = Object.keys(solvedStatus).filter(k => {
      // Find if this is an algorithm problem
      const idVal = parseInt(k);
      return solvedStatus[k] && Object.values(allProblems).some(d => d.problems.some(p => p.id === idVal));
    }).length;
  } else {
    // Collect all unique SQL problem IDs to avoid double counting #185
    const uniqueSqlIds = new Set();
    Object.values(sqlTiers).forEach(t => t.problems.forEach(p => uniqueSqlIds.add(p.id)));
    totalCount = uniqueSqlIds.size;
    solvedCount = Array.from(uniqueSqlIds).filter(id => solvedStatus[id]).length;
  }

  const pct = totalCount ? Math.round((solvedCount / totalCount) * 100) : 0;

  const getDayProgress = (dayKey) => {
    const d = allProblems[dayKey];
    if (!d) return { solved: 0, total: 0, pct: 0 };
    const total = d.problems.length;
    const solved = d.problems.filter(p => solvedStatus[p.id]).length;
    return { solved, total, pct: total ? Math.round((solved / total) * 100) : 0 };
  };

  const getTierProgress = (tierKey) => {
    const t = sqlTiers[tierKey];
    if (!t) return { solved: 0, total: 0, pct: 0 };
    // For counting solved in a tier, count unique problems to avoid double counting #185 reference in Tier 3
    const ids = new Set(t.problems.map(p => p.id));
    const total = ids.size;
    const solved = Array.from(ids).filter(id => solvedStatus[id]).length;
    return { solved, total, pct: total ? Math.round((solved / total) * 100) : 0 };
  };

  return (
    <aside
      className={`glass sidebar${isOpen ? ' open' : ''}`}
      style={{
        borderRight: '1px solid rgba(255,255,255,0.06)',
        borderTop: 'none', borderLeft: 'none', borderBottom: 'none',
      }}
    >
      {/* Logo */}
      <div style={{ padding: '22px 20px 14px' }}>
        <div style={{
          fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #a78bff 0%, #e879f9 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Algomorph
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2, fontWeight: 500 }}>
          {roadmap === 'algorithms' ? '10-Day Coding Roadmap' : 'SQL Database Roadmap'}
        </div>
      </div>

      {/* Segmented Roadmap Toggle Switch */}
      <div className="neu-inset" style={{ display: 'flex', padding: 3, borderRadius: 99, margin: '0 16px 14px' }}>
        <button
          onClick={() => setRoadmap('algorithms')}
          className={roadmap === 'algorithms' ? 'neu-raised' : ''}
          style={{
            flex: 1, padding: '7px 0', fontSize: 11, fontWeight: 700, borderRadius: 99, border: 'none', cursor: 'pointer',
            background: roadmap === 'algorithms' ? undefined : 'transparent',
            color: roadmap === 'algorithms' ? '#a78bff' : 'rgba(255,255,255,0.4)',
            boxShadow: roadmap === 'algorithms' ? '0 1px 3px rgba(0,0,0,0.4)' : 'none',
            transition: 'all 0.15s',
          }}
        >
          Algorithms
        </button>
        <button
          onClick={() => setRoadmap('sql')}
          className={roadmap === 'sql' ? 'neu-raised' : ''}
          style={{
            flex: 1, padding: '7px 0', fontSize: 11, fontWeight: 700, borderRadius: 99, border: 'none', cursor: 'pointer',
            background: roadmap === 'sql' ? undefined : 'transparent',
            color: roadmap === 'sql' ? '#a78bff' : 'rgba(255,255,255,0.4)',
            boxShadow: roadmap === 'sql' ? '0 1px 3px rgba(0,0,0,0.4)' : 'none',
            transition: 'all 0.15s',
          }}
        >
          SQL DB
        </button>
      </div>

      {/* Overall progress — neumorphism inset */}
      <div style={{ padding: '0 16px 16px' }}>
        <div className="neu-inset" style={{ padding: '12px 14px', borderRadius: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 11 }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>Overall Progress</span>
            <span style={{ color: '#a78bff', fontWeight: 700 }}>{solvedCount}/{totalCount}</span>
          </div>
          {/* Shimmer progress bar */}
          <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 99, overflow: 'hidden' }}>
            <div className="progress-fill" style={{ height: '100%', width: `${pct}%`, borderRadius: 99, transition: 'width 0.4s ease' }} />
          </div>
          <div style={{ textAlign: 'right', fontSize: 10, color: 'rgba(255,255,255,0.2)', marginTop: 5, fontWeight: 600 }}>
            {pct}% complete
          </div>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: 8 }} />

      {/* Navigation list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 10px 12px' }}>
        {roadmap === 'algorithms' ? (
          // Algorithms list
          Object.keys(allProblems).map(dayKey => {
            const day = allProblems[dayKey];
            const isActive = parseInt(dayKey) === activeDay;
            const { solved, total, pct: dayPct } = getDayProgress(dayKey);
            const done = solved === total && total > 0;

            return (
              <button
                key={dayKey}
                onClick={() => setActiveDay(parseInt(dayKey))}
                className={isActive ? 'neu-raised' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 10,
                  marginBottom: 3,
                  cursor: 'pointer',
                  textAlign: 'left',
                  background: isActive ? undefined : 'transparent',
                  border: isActive ? '1px solid rgba(167,139,255,0.15)' : '1px solid transparent',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; } }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                    color: isActive ? '#a78bff' : 'rgba(255,255,255,0.2)',
                    marginBottom: 2,
                  }}>
                    Day {dayKey}
                  </div>
                  <div style={{
                    fontSize: 12.5, fontWeight: 500,
                    color: isActive ? '#dddde8' : 'rgba(255,255,255,0.45)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {day.title}
                  </div>
                  <div style={{ marginTop: 5, height: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${dayPct}%`,
                      background: done ? '#4ade80' : 'linear-gradient(90deg,#7c6fff,#e879f9)',
                      borderRadius: 99, transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700, marginLeft: 10, flexShrink: 0,
                  color: done ? '#4ade80' : (isActive ? '#a78bff' : 'rgba(255,255,255,0.18)'),
                }}>
                  {done ? '✓' : `${solved}/${total}`}
                </div>
              </button>
            );
          })
        ) : (
          // SQL Tiers list
          Object.keys(sqlTiers).map(tierKey => {
            const tier = sqlTiers[tierKey];
            const isActive = parseInt(tierKey) === activeSqlTier;
            const { solved, total, pct: tierPct } = getTierProgress(tierKey);
            const done = solved === total && total > 0;

            return (
              <button
                key={tierKey}
                onClick={() => setActiveSqlTier(parseInt(tierKey))}
                className={isActive ? 'neu-raised' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 10,
                  marginBottom: 3,
                  cursor: 'pointer',
                  textAlign: 'left',
                  background: isActive ? undefined : 'transparent',
                  border: isActive ? '1px solid rgba(167,139,255,0.15)' : '1px solid transparent',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; } }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                    color: isActive ? '#a78bff' : 'rgba(255,255,255,0.2)',
                    marginBottom: 2,
                  }}>
                    Tier {tierKey}
                  </div>
                  <div style={{
                    fontSize: 12.5, fontWeight: 500,
                    color: isActive ? '#dddde8' : 'rgba(255,255,255,0.45)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {tier.title}
                  </div>
                  <div style={{ marginTop: 5, height: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${tierPct}%`,
                      background: done ? '#4ade80' : 'linear-gradient(90deg,#7c6fff,#e879f9)',
                      borderRadius: 99, transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700, marginLeft: 10, flexShrink: 0,
                  color: done ? '#4ade80' : (isActive ? '#a78bff' : 'rgba(255,255,255,0.18)'),
                }}>
                  {done ? '✓' : `${solved}/${total}`}
                </div>
              </button>
            );
          })
        )}
      </div>
    </aside>
  );
}
