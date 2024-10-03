const fs = require('fs');
const path = require('path');

function removeLogFiles() {
  const logsDir = path.join(__dirname, 'Logs');
  if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
      console.log(`Deleting file: ${file}`);
      fs.unlinkSync(path.join(logsDir, file));
    });
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed');
  } else {
    console.log('No Logs directory found');
  }
}

function createLogFiles() {
  const logsDir = path.join(__dirname, 'Logs');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }
  process.chdir(logsDir);
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`Created file: ${fileName}`);
  }
}

// Remove existing logs, then create new logs
removeLogFiles();
createLogFiles();
