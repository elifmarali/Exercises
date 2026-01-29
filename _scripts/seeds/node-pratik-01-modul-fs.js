"use strict";
const questions = [
  {
    slug: "yaz-read-json",
    question: `\`readJson(path: string): Promise<object>\` yaz. \`fs.promises.readFile\` + \`JSON.parse\`. Hata fırlatmadan önce logla.`,
    answer: `\`\`\`js
async function readJson(path) {
  try {
    const buf = await require('fs').promises.readFile(path, 'utf8');
    return JSON.parse(buf);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
\`\`\``,
  },
  {
    slug: "yaz-write-json",
    question: `\`writeJson(path, obj)\` yaz. \`fs.promises.writeFile\` ile \`JSON.stringify(obj, null, 2)\` yaz. \`utf8\` encoding.`,
    answer: `\`\`\`js
async function writeJson(path, obj) {
  await require('fs').promises.writeFile(path, JSON.stringify(obj, null, 2), 'utf8');
}
\`\`\``,
  },
  {
    slug: "yaz-list-dir-recursive",
    question: `\`listFiles(dir: string): Promise<string[]>\` yaz. Verilen dizindeki **tüm** dosya path’lerini (recursive) dizi olarak döndür. Sadece dosya; dizinleri dahil etme.`,
    answer: `\`\`\`js
const fs = require('fs').promises;
const path = require('path');
async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await listFiles(full)));
    else files.push(full);
  }
  return files;
}
\`\`\``,
  },
  {
    slug: "yaz-require-dir",
    question: `\`requireDir(dirPath)\`: \`dirPath\` altındaki her \`.js\` dosyasını \`require\` edip \`{ filename: module }\` obje döndür. Sync yeterli.`,
    answer: `\`\`\`js
const fs = require('fs');
const path = require('path');
function requireDir(dirPath) {
  const out = {};
  for (const f of fs.readdirSync(dirPath)) {
    if (!f.endsWith('.js')) continue;
    const name = path.basename(f, '.js');
    out[name] = require(path.join(dirPath, f));
  }
  return out;
}
\`\`\``,
  },
  {
    slug: "yaz-exists",
    question: `\`exists(filePath): Promise<boolean>\` yaz. \`fs.access\` veya \`fs.stat\` ile; hata yoksa \`true\`, \`ENOENT\` ise \`false\`.`,
    answer: `\`\`\`js
async function exists(filePath) {
  try {
    await require('fs').promises.access(filePath);
    return true;
  } catch (e) {
    if (e.code === 'ENOENT') return false;
    throw e;
  }
}
\`\`\``,
  },
  {
    slug: "yaz-copy-file",
    question: `\`copyFile(src, dest)\` yaz. \`fs.promises\` kullan; \`copyFile\` API’sı var mı kontrol et, varsa onu kullan.`,
    answer: `\`await require('fs').promises.copyFile(src, dest);\` Node 8.5+ destekler.`,
  },
  {
    slug: "yaz-mkdirp",
    question: `\`mkdirp(dirPath)\`: dizin yoksa oluştur; gerekirse üst dizinleri de (recursive). \`fs.promises.mkdir\` kullan.`,
    answer: `\`await require('fs').promises.mkdir(dirPath, { recursive: true });\`.`,
  },
  {
    slug: "yaz-read-lines",
    question: `\`readLines(filePath): Promise<string[]>\` yaz. Dosyayı okuyup satırlara böl (\`\\n\`), boş satırları da dahil et.`,
    answer: `\`\`\`js
async function readLines(filePath) {
  const s = await require('fs').promises.readFile(filePath, 'utf8');
  return s.split('\\n');
}
\`\`\``,
  },
  {
    slug: "yaz-path-join-safe",
    question: `\`safeJoin(base, ...parts)\` yaz. \`path.join\` kullan; sonuç \`base\` ile başlamıyorsa (path traversal) \`null\` dön.`,
    answer: `\`\`\`js
const path = require('path');
function safeJoin(base, ...parts) {
  const resolved = path.resolve(base, ...parts);
  return resolved.startsWith(path.resolve(base)) ? resolved : null;
}
\`\`\``,
  },
  {
    slug: "yaz-walk-and-transform",
    question: `\`transformFiles(dir, fn)\`: \`dir\` altındaki her \`.txt\` dosyasını oku, \`fn(content)\` ile dönüştür, aynı path’e yaz. Async, recursive.`,
    answer: `\`listFiles\` ile \`.txt\`’leri bul; her biri için \`readFile\` → \`fn(c)\` → \`writeFile\`. Promise.all veya sıralı fark etmez.`,
  },
];
module.exports = { questions };
