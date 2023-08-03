// import pug
const pug = require('pug');
const fs = require('fs');
// build index.pug

const inputFiles = [
  'src/index.pug',
  'src/pages/iframes.pug',
  'src/pages/events.pug',
  'src/frames/frame1.1.pug',
  'src/frames/frame1.2.1.pug',
  'src/frames/frame1.2.pug',
  'src/frames/frame1.pug',
  'src/frames/frame2.1.pug',
  'src/frames/frame2.pug',
  'src/frames/frame3.1.pug',
  'src/frames/frame3.pug',
];

for (const inputFile of inputFiles) {
  const html = pug.renderFile(inputFile);
  const outpuFile = inputFile.replace('src/', 'public/').replace('.pug', '.html');
  try {
    fs.mkdirSync(outpuFile.split('/').slice(0, -1).join('/'), { recursive: true })
  } catch (error) {};
  fs.writeFileSync(outpuFile, html);
}