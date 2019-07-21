"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var targetDir = 'src/target/';
var themeFile = 'theme.scss';
exports.default = (function (command, project, farolConfig) {
    if (command === 'checkout') {
        fs.mkdirSync(targetDir, { recursive: true });
        fs.copyFileSync("src/targets/" + project + "/" + themeFile, targetDir + "/" + themeFile);
    }
});
