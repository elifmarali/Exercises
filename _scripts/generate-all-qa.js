#!/usr/bin/env node
/**
 * Tüm content/<tech>/*.json dosyaları için generate-qa çalıştırır.
 * node _scripts/generate-all-qa.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');

function main() {
  if (!fs.existsSync(CONTENT)) {
    console.log('content/ bulunamadı.');
    return;
  }
  const techs = fs.readdirSync(CONTENT);
  let total = 0;
  for (const tech of techs) {
    const techPath = path.join(CONTENT, tech);
    if (!fs.statSync(techPath).isDirectory()) continue;
    const files = fs.readdirSync(techPath).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      const topic = file.replace(/\.json$/, '');
      try {
        execSync(`node "${path.join(ROOT, '_scripts', 'generate-qa.js')}" "${tech}" "${topic}"`, {
          cwd: ROOT,
          stdio: 'inherit',
        });
        total++;
      } catch (e) {
        console.error('Hata:', tech, topic, e.message);
      }
    }
  }
  console.log('Toplam', total, 'konu işlendi.');
}

main();
