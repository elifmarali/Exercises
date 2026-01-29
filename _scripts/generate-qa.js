#!/usr/bin/env node
/**
 * Q&A arşivi üretici.
 * Kullanım: node _scripts/generate-qa.js <tech> <topicFolder> [jsonPath]
 * Örnek:   node _scripts/generate-qa.js javascript 01-variables-and-data-types
 * JSON:    content/<tech>/<topicFolder>.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function main() {
  const [tech, topicFolder, jsonPathArg] = process.argv.slice(2);
  if (!tech || !topicFolder) {
    console.error('Kullanım: node generate-qa.js <tech> <topicFolder> [jsonPath]');
    process.exit(1);
  }

  const jsonPath = jsonPathArg
    ? path.resolve(ROOT, jsonPathArg)
    : path.join(ROOT, 'content', tech, `${topicFolder}.json`);

  if (!fs.existsSync(jsonPath)) {
    console.error('JSON bulunamadı:', jsonPath);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const questions = data.questions || [];
  const outDir = path.join(ROOT, tech, topicFolder);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let created = 0;
  for (const q of questions) {
    const id = String(q.id ?? created + 1).padStart(3, '0');
    const slug = (q.slug || `q-${id}`).replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const dirName = `${id}-${slug}`;
    const dir = path.join(outDir, dirName);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'README.md'), q.question || '', 'utf8');
    fs.writeFileSync(path.join(dir, 'CEVAP.md'), q.answer || '', 'utf8');
    created++;
  }

  console.log(`✓ ${created} soru oluşturuldu: ${tech}/${topicFolder}`);
}

main();
