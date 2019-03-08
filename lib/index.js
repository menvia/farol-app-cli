// ./lib/index.js

/**
 * Run a farol command
 *
 * @param {Array} args string to show in the console
 */
const run = args => {
  const { spawn } = require('child_process');
  const command = 'bundle';
  args[1] = `project:${args[1]}`;
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
};

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.run = run;
