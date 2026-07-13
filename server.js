// 小英雄上学积分 —— 极简后端（Node 内置模块，零依赖）
// 功能：托管前端静态文件 + 家庭积分数据 API（存为 data/<家庭码>.json）
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const DATA = path.join(ROOT, 'data');
if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });
const PORT = parseInt(process.env.PORT || '80', 10);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.css': 'text/css; charset=utf-8', '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8'
};

function genCode() {
  // 6 位易读短码（去掉易混的 0/O/1/I/L）
  const alphabet = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
  let s = '';
  const b = crypto.randomBytes(6);
  for (let i = 0; i < 6; i++) s += alphabet[b[i] % alphabet.length];
  return s;
}
function cors(res, code, body, type) {
  res.writeHead(code, {
    'Content-Type': type || 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    'Cache-Control': type && type.indexOf('json') < 0 ? 'public, max-age=300' : 'no-store'
  });
  res.end(body);
}
function readBody(req) {
  return new Promise((resolve) => {
    let b = ''; let n = 0;
    req.on('data', (c) => { n += c.length; if (n > 1e6) req.destroy(); b += c; });
    req.on('end', () => resolve(b));
  });
}

const server = http.createServer(async (req, res) => {
  let p;
  try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch (e) { return cors(res, 400, '{"error":"bad url"}'); }
  if (req.method === 'OPTIONS') return cors(res, 204, '');

  // ---- API ----
  if (p === '/api/family' && req.method === 'POST') {
    const body = await readBody(req);
    let data; try { data = JSON.parse(body || '{}'); } catch (e) { return cors(res, 400, '{"error":"bad json"}'); }
    let code = genCode();
    for (let i = 0; i < 8 && fs.existsSync(path.join(DATA, code + '.json')); i++) code = genCode();
    fs.writeFileSync(path.join(DATA, code + '.json'), JSON.stringify(data));
    return cors(res, 200, JSON.stringify({ id: code }));
  }
  const m = p.match(/^\/api\/family\/([A-Za-z0-9]{4,12})$/);
  if (m) {
    const code = m[1].toUpperCase();
    const f = path.join(DATA, code + '.json');
    if (req.method === 'GET') {
      if (!fs.existsSync(f)) return cors(res, 404, '{"error":"not found"}');
      return cors(res, 200, fs.readFileSync(f));
    }
    if (req.method === 'PUT') {
      const body = await readBody(req);
      try { JSON.parse(body); } catch (e) { return cors(res, 400, '{"error":"bad json"}'); }
      fs.writeFileSync(f, body);
      return cors(res, 200, '{"ok":true}');
    }
  }

  // ---- 静态文件 ----
  if (req.method !== 'GET') return cors(res, 405, '{"error":"method not allowed"}');
  let rel = p === '/' ? '/index.html' : p;
  let fp = path.normalize(path.join(ROOT, rel));
  if (!fp.startsWith(ROOT) || rel.startsWith('/data') || rel.startsWith('/server')) return cors(res, 403, 'forbidden', 'text/plain; charset=utf-8');
  fs.readFile(fp, (e, d) => {
    if (e) return cors(res, 404, 'Not found', 'text/plain; charset=utf-8');
    cors(res, 200, d, MIME[path.extname(fp)] || 'application/octet-stream');
  });
});

server.listen(PORT, () => console.log('小英雄积分服务已启动，端口 ' + PORT));
