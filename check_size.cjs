const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && f !== 'node_modules' && f !== '.git') {
      checkDir(fullPath);
    } else if (stat.isFile() && (f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.mp4'))) {
      console.log(fullPath, (stat.size / 1024 / 1024).toFixed(2) + ' MB');
    }
  });
}

checkDir('.');
