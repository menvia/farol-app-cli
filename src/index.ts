import * as fs from 'fs';
import webProcessor from './web-processor';

const farolConfigFilePath = 'farol.json';

exports.run = async args => {
  if (!fs.existsSync(farolConfigFilePath)) {
    console.log('No farol.json file detected.');
  } else {
    const farolConfig = JSON.parse(fs.readFileSync('farol.json', 'utf8'));
    if (farolConfig.platform === 'web') {
      webProcessor(args[0], args[1], farolConfig);
    } else {
      const { spawn } = require('child_process');
      const command = 'bundle';
      args[1] = `project:${args[1]}`;

      // add : to naked args
      const possibleNakedArguments = ['offline', 'retry'];
      args = args.map(arg =>
        possibleNakedArguments.some(nakedArg => nakedArg === arg)
          ? `${arg}:`
          : arg
      );

      const params = ['exec', 'fastlane'].concat(args);

      const child = spawn(command, params);

      child.stdout.setEncoding('utf8');
      child.stdout.on('data', console.log);

      child.stderr.setEncoding('utf8');
      child.stderr.on('data', console.log);

      child.on('close', code => {
        if (code !== 0) {
          console.log(`child process exited with code ${code}`);
        }
      });
    }
  }
};
exports.init = () => {
  console.log('Coming soon!');
};
exports.notSupported = () => {
  console.log('Feature not supported!');
};
