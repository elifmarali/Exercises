#!/usr/bin/env node
/**
 * Örnek içerik üretici: JSON dosyalarını oluşturur.
 * node _scripts/seed-content.js [tech] [topic]
 * Örnek: node _scripts/seed-content.js javascript 01-variables-and-data-types
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SEED = {
  'javascript': {
    '01-variables-and-data-types': require('./seeds/js-01-variables').questions,
    '02-operators-and-expressions': require('./seeds/js-02-operators').questions,
    '03-control-flow': require('./seeds/js-03-control-flow').questions,
    '04-functions': require('./seeds/js-04-functions').questions,
    '05-scope-and-closures': require('./seeds/js-05-scope-closures').questions,
    '06-arrays-and-iteration': require('./seeds/js-06-arrays').questions,
    '07-objects-and-prototypes': require('./seeds/js-07-objects').questions,
    '08-es6-modules': require('./seeds/js-08-modules').questions,
    '09-asynchronous-javascript': require('./seeds/js-09-async').questions,
    '10-error-handling': require('./seeds/js-10-error-handling').questions,
    '11-this-and-context': require('./seeds/js-11-this').questions,
    '12-type-coercion-and-equality': require('./seeds/js-12-coercion').questions,
    '13-design-patterns': require('./seeds/js-13-patterns').questions,
    '14-memory-and-performance': require('./seeds/js-14-memory').questions,
    '15-regex-and-strings': require('./seeds/js-15-regex-strings').questions,
    '16-modern-js-features': require('./seeds/js-16-modern').questions,
    'pratik-01-tip-operator': require('./seeds/js-pratik-01-tip-operator').questions,
    'pratik-02-fonksiyon-dizi-obje': require('./seeds/js-pratik-02-fonksiyon-dizi-obje').questions,
    'pratik-03-async-promise-hata': require('./seeds/js-pratik-03-async-promise-hata').questions,
    'pratik-04-modul-dom-event': require('./seeds/js-pratik-04-modul-dom-event').questions,
  },
  'react': {
    '01-components-and-tsx': require('./seeds/react-01-components').questions,
    '02-props-and-state': require('./seeds/react-02-props-state').questions,
    '03-hooks-basics': require('./seeds/react-03-hooks-basics').questions,
    '04-hooks-advanced': require('./seeds/react-04-hooks-advanced').questions,
    '05-lifecycle-and-effects': require('./seeds/react-05-lifecycle-effects').questions,
    '06-context-and-state-management': require('./seeds/react-06-context').questions,
    '07-routing': require('./seeds/react-07-routing').questions,
    '08-forms-and-validation': require('./seeds/react-08-forms').questions,
    '09-api-and-data-fetching': require('./seeds/react-09-api-fetching').questions,
    '10-performance-optimization': require('./seeds/react-10-performance').questions,
    '11-testing': require('./seeds/react-11-testing').questions,
    '12-typescript-in-react': require('./seeds/react-12-typescript').questions,
    '13-patterns-and-architecture': require('./seeds/react-13-patterns').questions,
    '14-security-and-best-practices': require('./seeds/react-14-security').questions,
    'pratik-01-bilesen-jsx': require('./seeds/react-pratik-01-bilesen-jsx').questions,
    'pratik-02-state-form': require('./seeds/react-pratik-02-state-form').questions,
    'pratik-03-effect-api': require('./seeds/react-pratik-03-effect-api').questions,
    'pratik-04-performans-test': require('./seeds/react-pratik-04-performans-test').questions,
  },
  'nextjs': {
    '01-fundamentals-and-routing': require('./seeds/next-01-fundamentals').questions,
    '02-pages-and-app-router': require('./seeds/next-02-pages-app').questions,
    '03-data-fetching-and-caching': require('./seeds/next-03-data-fetching').questions,
    '04-api-routes-and-server-actions': require('./seeds/next-04-api-routes').questions,
    '05-middleware-and-auth': require('./seeds/next-05-middleware-auth').questions,
    '06-styling-and-assets': require('./seeds/next-06-styling').questions,
    '07-deployment-and-optimization': require('./seeds/next-07-deployment').questions,
    '08-ssr-ssg-isr': require('./seeds/next-08-ssr-ssg-isr').questions,
    '09-typescript-and-types': require('./seeds/next-09-typescript').questions,
    '10-performance-and-security': require('./seeds/next-10-performance-security').questions,
    '11-testing': require('./seeds/next-11-testing').questions,
    '12-advanced-patterns': require('./seeds/next-12-advanced').questions,
    'pratik-01-routing-pages': require('./seeds/next-pratik-01-routing-pages').questions,
    'pratik-02-data-fetch': require('./seeds/next-pratik-02-data-fetch').questions,
    'pratik-03-api-middleware': require('./seeds/next-pratik-03-api-middleware').questions,
    'pratik-04-deploy-env': require('./seeds/next-pratik-04-deploy-env').questions,
  },
  'nodejs': {
    '01-fundamentals-and-modules': require('./seeds/node-01-fundamentals').questions,
    '02-event-loop-and-async': require('./seeds/node-02-event-loop').questions,
    '03-streams-and-buffers': require('./seeds/node-03-streams').questions,
    '04-file-system-and-path': require('./seeds/node-04-fs-path').questions,
    '05-http-and-express': require('./seeds/node-05-http-express').questions,
    '06-api-design-and-rest': require('./seeds/node-06-api-rest').questions,
    '07-middleware-and-error-handling': require('./seeds/node-07-middleware-errors').questions,
    '08-security': require('./seeds/node-08-security').questions,
    '09-performance-and-scalability': require('./seeds/node-09-performance').questions,
    '10-testing': require('./seeds/node-10-testing').questions,
    '11-databases-and-orm': require('./seeds/node-11-databases').questions,
    '12-authentication-and-sessions': require('./seeds/node-12-auth-sessions').questions,
    '13-deployment': require('./seeds/node-13-deployment').questions,
    'pratik-01-modul-fs': require('./seeds/node-pratik-01-modul-fs').questions,
    'pratik-02-http-express': require('./seeds/node-pratik-02-http-express').questions,
    'pratik-03-async-stream': require('./seeds/node-pratik-03-async-stream').questions,
    'pratik-04-api-guvenlik': require('./seeds/node-pratik-04-api-guvenlik').questions,
  },
};

function writeTopic(tech, topic) {
  const list = SEED[tech]?.[topic];
  if (!list) return false;
  const outPath = path.join(ROOT, 'content', tech, `${topic}.json`);
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const data = { topic, questions: list.map((q, i) => ({ id: i + 1, slug: q.slug, question: q.question, answer: q.answer })) };
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('✓', outPath, '→', data.questions.length, 'soru');
  return true;
}

function main() {
  const [a, b] = process.argv.slice(2);
  if (a === '--all') {
    let n = 0;
    for (const tech of Object.keys(SEED)) {
      for (const topic of Object.keys(SEED[tech])) {
        if (writeTopic(tech, topic)) n++;
      }
    }
    console.log('Toplam', n, 'konu yazıldı.');
    return;
  }
  const tech = a, topic = b;
  if (!tech || !topic) {
    console.error('Kullanım: node seed-content.js <tech> <topic> | node seed-content.js --all');
    process.exit(1);
  }
  if (!writeTopic(tech, topic)) {
    console.error('Bilinmeyen tech/topic:', tech, topic);
    process.exit(1);
  }
}

main();
