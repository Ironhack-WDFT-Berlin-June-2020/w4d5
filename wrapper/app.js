


const chalk = require('chalk');


function consoleColor(color, message) {
    // configuration
    console.log(chalk[color](message));
}

consoleColor('red', 'hello world');