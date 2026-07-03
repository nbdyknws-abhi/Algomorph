import React, { useState, useEffect, useRef } from 'react';

export default function Chatbot({ activeProblem }) {
  const [messages, setMessages] = useState(() => {
    if (!activeProblem) return [];
    const saved = localStorage.getItem(`leet10_chat_${activeProblem.id}`);
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [{
      id: 'welcome',
      sender: 'bot',
      text: `Ask me anything about **${activeProblem.name}**.`,
      chips: [
        { label: '💡 Intuition',   type: 'intuition' },
        { label: '⏱ Complexity',  type: 'complexity' },
        { label: '⚠ Edge Cases',  type: 'edgeCases' },
        { label: '🐞 Debug Tips', type: 'debugging' },
      ]
    }];
  });
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!activeProblem) return;
    const saved = localStorage.getItem(`leet10_chat_${activeProblem.id}`);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
        return;
      } catch {}
    }
    setMessages([{
      id: 'welcome',
      sender: 'bot',
      text: `Ask me anything about **${activeProblem.name}**.`,
      chips: [
        { label: '💡 Intuition',   type: 'intuition' },
        { label: '⏱ Complexity',  type: 'complexity' },
        { label: '⚠ Edge Cases',  type: 'edgeCases' },
        { label: '🐞 Debug Tips', type: 'debugging' },
      ]
    }]);
  }, [activeProblem]);

  useEffect(() => {
    if (activeProblem && messages.length > 0) {
      localStorage.setItem(`leet10_chat_${activeProblem.id}`, JSON.stringify(messages));
    }
  }, [messages, activeProblem]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const reply = (text) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(p => [...p, { id: Date.now().toString(), sender: 'bot', text }]);
    }, Math.min(900, text.length * 4));
  };

  const handleChip = (type) => {
    const text = activeProblem.chatbotData[type] || "No data for this topic yet.";
    setMessages(p => [...p, { id: Date.now().toString(), sender: 'user', text: type }]);
    reply(text);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.toLowerCase();
    setMessages(p => [...p, { id: Date.now().toString(), sender: 'user', text: input }]);
    setInput('');
    let r;
    if (q.match(/time|space|complexity|big.?o|fast|slow/))       r = activeProblem.chatbotData.complexity;
    else if (q.match(/intuition|approach|how|logic|concept|why/)) r = activeProblem.chatbotData.intuition;
    else if (q.match(/edge|corner|null|empty|boundary/))          r = activeProblem.chatbotData.edgeCases;
    else if (q.match(/bug|debug|wrong|error|fail|crash/))         r = activeProblem.chatbotData.debugging;
    else r = activeProblem.chatbotData.intuition;
    reply(r);
  };

  const renderText = (text) =>
    text.split('\n').map((line, i) => (
      <p key={i} style={{ margin: i > 0 ? '6px 0 0' : 0 }}>
        {line.split('**').map((part, j) =>
          j % 2 === 1
            ? <strong key={j} style={{ color: '#c4b8ff', fontWeight: 700 }}>{part}</strong>
            : part
        )}
      </p>
    ));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* Header */}
      <div style={{
        padding: '14px 16px 12px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Pulsing status dot */}
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#a78bff',
            boxShadow: '0 0 8px rgba(167,139,255,0.8)',
            animation: 'pulse-dot 2.5s ease-in-out infinite',
          }} />
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: '#dddde8' }}>Study Assistant</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', marginTop: 1 }}>
              {activeProblem?.name}
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 6px' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ marginBottom: 16 }}>
            {msg.sender === 'user' ? (
              /* User bubble — neumorphic raised */
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="neu-raised" style={{
                  maxWidth: '80%', fontSize: 12.5, color: 'rgba(255,255,255,0.7)',
                  padding: '8px 12px', borderRadius: '10px 10px 2px 10px',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  {msg.text}
                </div>
              </div>
            ) : (
              /* Bot — plain text with purple highlights */
              <div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {renderText(msg.text)}
                </div>
                {msg.chips && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                    {msg.chips.map((chip, i) => (
                      <button key={i} className="chip-btn" onClick={() => handleChip(chip.type)}>
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div style={{ display: 'flex', gap: 4, padding: '2px 0', marginBottom: 8 }}>
            {[0, 150, 300].map(d => (
              <div key={d} style={{
                width: 5, height: 5, borderRadius: '50%',
                background: 'rgba(167,139,255,0.5)',
                animation: `chatBounce 1s ease-in-out infinite`,
                animationDelay: `${d}ms`,
              }} />
            ))}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input — neumorphic inset */}
      <form
        onSubmit={handleSend}
        style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.05)', gap: 8, display: 'flex', flexShrink: 0 }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="neu-inset"
          style={{
            flex: 1, fontSize: 12.5, color: 'rgba(255,255,255,0.7)',
            padding: '8px 12px', borderRadius: 8, outline: 'none', border: 'none',
            fontFamily: 'Inter, sans-serif', background: undefined,
          }}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          style={{
            fontSize: 11, fontWeight: 700, padding: '7px 14px', borderRadius: 8, flexShrink: 0,
            background: input.trim() ? 'linear-gradient(135deg,#7c6fff,#e879f9)' : 'rgba(255,255,255,0.04)',
            color: input.trim() ? '#fff' : 'rgba(255,255,255,0.2)',
            border: 'none', cursor: input.trim() ? 'pointer' : 'default',
            boxShadow: input.trim() ? '0 2px 12px rgba(124,111,255,0.4)' : 'none',
            transition: 'all 0.2s',
          }}
        >
          Send
        </button>
      </form>

      <style>{`
        @keyframes chatBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 6px rgba(167,139,255,0.6); }
          50% { box-shadow: 0 0 14px rgba(167,139,255,1), 0 0 20px rgba(232,121,249,0.4); }
        }
      `}</style>
    </div>
  );
}
