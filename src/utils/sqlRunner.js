/**
 * sqlRunner.js — executes SQL in-browser via SQLite WebAssembly.
 * WASM binary served locally from /public/sql-wasm.wasm (no CDN needed).
 */

let _SQL = null;

async function getSQL() {
  if (_SQL) return _SQL;
  const initSqlJs = (await import('sql.js')).default;
  _SQL = await initSqlJs({
    // Use local WASM copied to /public — no CDN, always works
    locateFile: () => '/sql-wasm.wasm',
  });
  return _SQL;
}

/**
 * Run a SQL query against an in-memory SQLite database seeded by schemaDef.
 * @param {string} userQuery
 * @param {{ setup: string }|null} schemaDef
 * @returns {{ columns: string[], rows: any[][], error: string|null, rowCount: number }}
 */
export async function runSQL(userQuery, schemaDef) {
  const SQL = await getSQL();
  const db  = new SQL.Database();
  try {
    if (schemaDef?.setup) db.run(schemaDef.setup);
    const results = db.exec(userQuery.trim());
    if (!results?.length) {
      return { columns: [], rows: [], error: null, rowCount: 0, message: 'Query executed successfully (no rows returned).' };
    }
    const { columns, values } = results[results.length - 1];
    return { columns, rows: values, error: null, rowCount: values.length };
  } catch (err) {
    return { columns: [], rows: [], error: err.message, rowCount: 0 };
  } finally {
    db.close();
  }
}
