// import pug
const pug = require('pug');
const fs = require('fs');
// build index.pug
const buildIndex = pug.compileFile('src/index.pug');
const index = buildIndex();
fs.writeFileSync('public/index.html', index);