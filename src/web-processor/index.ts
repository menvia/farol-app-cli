import * as fs from 'fs';

const targetDir = 'src/target/';
const themeFile = 'theme.scss';
export default (command, project, farolConfig) => {
  if (command === 'checkout') {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(
      `src/targets/${project}/${themeFile}`,
      `${targetDir}/${themeFile}`
    );
  }
};
