/**
 * Judge0 CE API helper — uses RapidAPI hosted Judge0
 * https://rapidapi.com/judge0-official/api/judge0-ce  (free tier: 50 calls/day)
 *
 * Language IDs:
 *   54  → C++ (GCC 10.2.0)
 *   71  → Python 3 (3.10.0)
 *   62  → Java (OpenJDK 17)
 */

const BASE_URL = 'https://judge0-ce.p.rapidapi.com';

export const LANGUAGE_IDS = {
  cpp:    54,
  python: 71,
  java:   62,
};

const STATUS_LABELS = {
  1:  { label: 'In Queue',          color: '#a1a1aa' },
  2:  { label: 'Processing',        color: '#fbbf24' },
  3:  { label: 'Accepted',          color: '#4ade80' },
  4:  { label: 'Wrong Answer',      color: '#f87171' },
  5:  { label: 'TLE',               color: '#fb923c' },
  6:  { label: 'Compilation Error', color: '#f87171' },
  7:  { label: 'Runtime Error',     color: '#f87171' },
  8:  { label: 'Runtime Error',     color: '#f87171' },
  9:  { label: 'Runtime Error',     color: '#f87171' },
  10: { label: 'Runtime Error',     color: '#f87171' },
  11: { label: 'Runtime Error',     color: '#f87171' },
  12: { label: 'Runtime Error',     color: '#f87171' },
  13: { label: 'Internal Error',    color: '#a78bff' },
  14: { label: 'Exec Format Error', color: '#f87171' },
};

function b64decode(str) {
  if (!str) return '';
  try { return atob(str); } catch { return str; }
}

/**
 * Submit code and poll until done.
 * @param {string} code
 * @param {string} lang  'cpp' | 'python' | 'java'
 * @param {string} stdin
 * @returns {Promise<{ status: string, statusColor: string, stdout: string, stderr: string, compileOutput: string, time: string, memory: string }>}
 */
export async function runCode(code, lang, stdin = '') {
  const apiKey = import.meta.env.VITE_JUDGE0_KEY;
  if (!apiKey || apiKey === 'your_rapidapi_key_here') {
    throw new Error('NO_KEY');
  }

  const headers = {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    'X-RapidAPI-Key': apiKey,
  };

  // 1. Submit
  const submitRes = await fetch(`${BASE_URL}/submissions?base64_encoded=true&wait=false`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      source_code: btoa(unescape(encodeURIComponent(code))),
      language_id: LANGUAGE_IDS[lang],
      stdin: stdin ? btoa(unescape(encodeURIComponent(stdin))) : '',
    }),
  });

  if (!submitRes.ok) {
    const err = await submitRes.text();
    throw new Error(`Submit failed: ${submitRes.status} — ${err}`);
  }

  const { token } = await submitRes.json();
  if (!token) throw new Error('No token returned from Judge0');

  // 2. Poll for result (max 20 seconds)
  let result = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 1000));
    const pollRes = await fetch(
      `${BASE_URL}/submissions/${token}?base64_encoded=true&fields=status_id,stdout,stderr,compile_output,time,memory,status`,
      { headers }
    );
    if (!pollRes.ok) continue;
    result = await pollRes.json();
    if (result.status_id >= 3) break; // Done
  }

  if (!result) throw new Error('Timed out waiting for result');

  const statusInfo = STATUS_LABELS[result.status_id] || { label: 'Unknown', color: '#a1a1aa' };

  return {
    status:        statusInfo.label,
    statusColor:   statusInfo.color,
    statusId:      result.status_id,
    stdout:        b64decode(result.stdout),
    stderr:        b64decode(result.stderr),
    compileOutput: b64decode(result.compile_output),
    time:          result.time ? `${result.time}s` : null,
    memory:        result.memory ? `${Math.round(result.memory / 1024)} KB` : null,
  };
}
