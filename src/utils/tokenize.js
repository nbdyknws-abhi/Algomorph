/**
 * Lightweight VS Code Dark+ syntax tokenizer for C++, Python, Java, and SQL.
 * Processes code left-to-right, longest-match first.
 * Returns an array of { text, color } tokens per line.
 */

/* ── VS Code Dark+ palette ─────────────────────────── */
export const VS = {
  keyword:      '#569CD6', // blue       – language keywords, primitives
  control:      '#C586C0', // purple     – #include / preprocessor / decorators
  type:         '#4EC9B0', // teal       – class names, STL types, built-in types
  fn:           '#DCDCAA', // yellow     – function / method calls
  string:       '#CE9178', // salmon     – string literals
  number:       '#B5CEA8', // light green– numeric literals
  comment:      '#6A9955', // green      – // /* # -- comments
  operator:     '#D4D4D4', // light grey – operators, punctuation
  variable:     '#9CDCFE', // light blue – variables / params / columns
  plain:        '#D4D4D4', // plain text
};

/* ── Language vocabulary ───────────────────────────── */
const CPP_KW = new Set([
  'alignas','alignof','and','and_eq','asm','auto','bitand','bitor',
  'bool','break','case','catch','char','char8_t','char16_t','char32_t',
  'class','compl','concept','const','consteval','constexpr','constinit',
  'const_cast','continue','co_await','co_return','co_yield','decltype',
  'default','delete','do','double','dynamic_cast','else','enum','explicit',
  'export','extern','false','float','for','friend','goto','if','inline',
  'int','long','mutable','namespace','new','noexcept','not','not_eq',
  'nullptr','operator','or','or_eq','private','protected','public',
  'register','reinterpret_cast','requires','return','short','signed',
  'sizeof','static','static_assert','static_cast','struct','switch',
  'template','this','thread_local','throw','true','try','typedef',
  'typeid','typename','union','unsigned','using','virtual','void',
  'volatile','wchar_t','while','xor','xor_eq',
]);

const CPP_TYPES = new Set([
  'string','wstring','u8string','u16string','u32string',
  'vector','array','deque','list','forward_list',
  'map','multimap','unordered_map','unordered_multimap',
  'set','multiset','unordered_set','unordered_multiset',
  'stack','queue','priority_queue',
  'pair','tuple','optional','variant','any',
  'function','unique_ptr','shared_ptr','weak_ptr',
  'iterator','const_iterator','size_type','value_type',
  'iostream','ostream','istream','stringstream','fstream',
  'ListNode','TreeNode','Node','Graph',
  'INT_MAX','INT_MIN','LLONG_MAX','LLONG_MIN',
]);

const PY_KW = new Set([
  'False','None','True','and','as','assert','async','await',
  'break','class','continue','def','del','elif','else','except',
  'finally','for','from','global','if','import','in','is',
  'lambda','nonlocal','not','or','pass','raise','return',
  'try','while','with','yield','self','cls',
]);

const PY_BUILTINS = new Set([
  'abs','all','any','ascii','bin','bool','breakpoint','bytearray','bytes',
  'callable','chr','classmethod','compile','complex','delattr','dict',
  'dir','divmod','enumerate','eval','exec','filter','float','format',
  'frozenset','getattr','globals','hasattr','hash','help','hex','id',
  'input','int','isinstance','issubclass','iter','len','list','locals',
  'map','max','memoryview','min','next','object','oct','open','ord',
  'pow','print','property','range','repr','reversed','round','set',
  'setattr','slice','sorted','staticmethod','str','sum','super','tuple',
  'type','vars','zip',
  'List','Dict','Set','Tuple','Optional','Union','Any','Callable',
  'Iterable','Iterator','Generator','Sequence','Mapping',
  'deque','defaultdict','Counter','OrderedDict','heapq','math','collections',
  'ListNode','TreeNode','Node',
]);

const JAVA_KW = new Set([
  'abstract','assert','boolean','break','byte','case','catch','char',
  'class','const','continue','default','do','double','else','enum',
  'extends','false','final','finally','float','for','goto','if',
  'implements','import','instanceof','int','interface','long','native',
  'new','null','package','private','protected','public','return','short',
  'static','strictfp','super','switch','synchronized','this','throw',
  'throws','transient','true','try','var','void','volatile','while',
  'record','sealed','permits','yield',
]);

const JAVA_TYPES = new Set([
  'String','Integer','Long','Double','Float','Boolean','Character',
  'Byte','Short','Number','Object','Class','Void',
  'List','ArrayList','LinkedList','Vector',
  'Map','HashMap','TreeMap','LinkedHashMap','Hashtable',
  'Set','HashSet','TreeSet','LinkedHashSet',
  'Queue','Deque','ArrayDeque','PriorityQueue','Stack',
  'Collections','Arrays','Math','System','Objects',
  'StringBuilder','StringBuffer','Scanner',
  'Comparator','Comparable','Iterable','Iterator',
  'Optional','Stream','Collectors',
  'ListNode','TreeNode','Node','Graph',
]);

const SQL_KW = new Set([
  'select', 'from', 'where', 'join', 'left', 'right', 'inner', 'outer', 'cross',
  'on', 'group', 'by', 'having', 'order', 'asc', 'desc', 'limit', 'offset',
  'union', 'all', 'as', 'and', 'or', 'not', 'in', 'is', 'null', 'case', 'when',
  'then', 'else', 'end', 'with', 'update', 'delete', 'set', 'insert', 'into',
  'values', 'exists', 'any', 'some', 'between', 'like', 'ilike', 'over',
  'partition', 'rows', 'range', 'following', 'preceding', 'unbounded', 'current',
  'row', 'true', 'false', 'into', 'as', 'using', 'distinct', 'having', 'offset'
]);

const SQL_FUNCTIONS = new Set([
  'dense_rank', 'rank', 'row_number', 'sum', 'count', 'max', 'min', 'avg',
  'coalesce', 'datediff', 'date_format', 'substring', 'concat', 'group_concat',
  'string_agg', 'extract', 'lead', 'lag', 'ifnull', 'nullif', 'round', 'mod',
  'abs', 'date_add', 'date_sub', 'now', 'curdate', 'year', 'month', 'day', 'str_to_date'
]);

/* ── Core tokenizer ────────────────────────────────── */

/**
 * Tokenize a single line of code.
 * @param {string} line  — raw code string
 * @param {'cpp'|'python'|'java'|'mysql'|'postgresql'|'mssql'} lang
 * @returns {{ text: string, color: string }[]}
 */
export function tokenizeLine(line, lang) {
  if (!line) return [{ text: ' ', color: VS.plain }];

  const tokens = [];
  let pos = 0;
  const len = line.length;

  while (pos < len) {
    let matched = false;

    for (const rule of getRules(lang)) {
      rule.re.lastIndex = 0;
      const m = rule.re.exec(line.slice(pos));
      if (m && m.index === 0) {
        const text = m[0];
        let color = rule.color;

        if (rule.isIdent) {
          color = resolveIdentColor(text, lang, rule.isCall);
        }

        tokens.push({ text, color });
        pos += text.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      tokens.push({ text: line[pos], color: VS.plain });
      pos++;
    }
  }

  return tokens;
}

function resolveIdentColor(word, lang, isCall) {
  if (lang === 'cpp') {
    if (CPP_KW.has(word)) return VS.keyword;
    if (CPP_TYPES.has(word)) return VS.type;
    if (/^[A-Z]/.test(word)) return VS.type;
    if (isCall) return VS.fn;
    return VS.variable;
  }
  if (lang === 'python') {
    if (PY_KW.has(word)) return VS.keyword;
    if (PY_BUILTINS.has(word)) return VS.type;
    if (/^[A-Z]/.test(word)) return VS.type;
    if (isCall) return VS.fn;
    return VS.variable;
  }
  if (lang === 'java') {
    if (JAVA_KW.has(word)) return VS.keyword;
    if (JAVA_TYPES.has(word)) return VS.type;
    if (/^[A-Z]/.test(word)) return VS.type;
    if (isCall) return VS.fn;
    return VS.variable;
  }
  if (lang === 'mysql' || lang === 'postgresql' || lang === 'mssql') {
    const lword = word.toLowerCase();
    if (SQL_KW.has(lword)) return VS.keyword;
    if (SQL_FUNCTIONS.has(lword)) return VS.fn;
    return VS.variable;
  }
  return VS.plain;
}

/* ── Rule sets per language ────────────────────────── */

function getRules(lang) {
  if (lang === 'cpp') return CPP_RULES;
  if (lang === 'python') return PYTHON_RULES;
  if (lang === 'java') return JAVA_RULES;
  if (lang === 'mysql' || lang === 'postgresql' || lang === 'mssql') return SQL_RULES;
  return JAVA_RULES;
}

// C++ rules
const CPP_RULES = [
  { re: /^#\s*(?:include|define|ifdef|ifndef|endif|pragma|undef|if|else|elif)\b.*/, color: VS.control },
  { re: /^\/\/.*/, color: VS.comment },
  { re: /^\/\*.*?\*\//, color: VS.comment },
  { re: /^\/\*.*/, color: VS.comment },
  { re: /^"(?:[^"\\]|\\.)*"/, color: VS.string },
  { re: /^'(?:[^'\\]|\\.)*'/, color: VS.string },
  { re: /^0x[\da-fA-F]+[uUlL]*/,  color: VS.number },
  { re: /^\d+\.?\d*(?:[eE][+-]?\d+)?[fFlLuU]*/, color: VS.number },
  { re: /^[A-Za-z_]\w*(?=\s*\()/, color: VS.fn, isIdent: true, isCall: true },
  { re: /^[A-Za-z_]\w*/, color: VS.variable, isIdent: true, isCall: false },
  { re: /^(?:::|-[->]|[+\-*/%=<>!&|^~?:]+|[.])/, color: VS.operator },
  { re: /^[{}()[\],;]/, color: VS.plain },
  { re: /^\s+/, color: VS.plain },
];

// Python rules
const PYTHON_RULES = [
  { re: /^#.*/, color: VS.comment },
  { re: /^"""[\s\S]*?"""/, color: VS.string },
  { re: /^'''[\s\S]*?'''/, color: VS.string },
  { re: /^f?"(?:[^"\\]|\\.)*"/, color: VS.string },
  { re: /^f?'(?:[^'\\]|\\.)*'/, color: VS.string },
  { re: /^@[A-Za-z_]\w*/, color: VS.control },
  { re: /^0[xXoObB][\da-fA-F_]+/, color: VS.number },
  { re: /^\d[\d_]*\.?[\d_]*(?:[eE][+-]?\d+)?[jJ]?/, color: VS.number },
  { re: /^[A-Za-z_]\w*(?=\s*\()/, color: VS.fn, isIdent: true, isCall: true },
  { re: /^[A-Za-z_]\w*/, color: VS.variable, isIdent: true, isCall: false },
  { re: /^(?:->|[+\-*/%=<>!&|^~?:]+|[.])/, color: VS.operator },
  { re: /^[{}()[\],;]/, color: VS.plain },
  { re: /^\s+/, color: VS.plain },
];

// Java rules
const JAVA_RULES = [
  { re: /^\/\/.*/, color: VS.comment },
  { re: /^\/\*.*?\*\//, color: VS.comment },
  { re: /^\/\*.*/, color: VS.comment },
  { re: /^@[A-Za-z_]\w*/, color: VS.control },
  { re: /^"(?:[^"\\]|\\.)*"/, color: VS.string },
  { re: /^'(?:[^'\\]|\\.)*'/, color: VS.string },
  { re: /^0[xXbB][\da-fA-F_]+[lL]?/, color: VS.number },
  { re: /^\d[\d_]*\.?[\d_]*(?:[eE][+-]?\d+)?[fFdDlL]?/, color: VS.number },
  { re: /^[A-Za-z_]\w*(?=\s*\()/, color: VS.fn, isIdent: true, isCall: true },
  { re: /^[A-Za-z_]\w*/, color: VS.variable, isIdent: true, isCall: false },
  { re: /^(?:->|::|\.\.\.|[+\-*/%=<>!&|^~?:]+|[.])/, color: VS.operator },
  { re: /^[{}()[\],;]/, color: VS.plain },
  { re: /^\s+/, color: VS.plain },
];

// SQL rules
const SQL_RULES = [
  { re: /^--.*/, color: VS.comment },
  { re: /^#.*/, color: VS.comment },
  { re: /^\/\*.*?\*\//, color: VS.comment },
  { re: /^\/\*.*/, color: VS.comment },
  { re: /^'(?:[^'\\]|\\.)*'/, color: VS.string },
  { re: /^"(?:[^"\\]|\\.)*"/, color: VS.string },
  { re: /^`[^`]+`/, color: VS.variable },
  { re: /^\[[^\]]+\]/, color: VS.variable },
  { re: /^\d+\.?\d*(?:[eE][+-]?\d+)?/, color: VS.number },
  { re: /^[A-Za-z_]\w*(?=\s*\()/, color: VS.fn, isIdent: true, isCall: true },
  { re: /^[A-Za-z_]\w*/, color: VS.variable, isIdent: true, isCall: false },
  { re: /^(?:[+\-*/%=<>!&|^~?:]+|[.])/, color: VS.operator },
  { re: /^[{}()[\],;]/, color: VS.plain },
  { re: /^\s+/, color: VS.plain },
];
