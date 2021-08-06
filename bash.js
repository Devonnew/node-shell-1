process.stdout.write('prompt > ')

const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const splicedCmd = cmd.split(' ')

    if (splicedCmd[0] === "pwd") {
        pwd();
    }
    if (splicedCmd[0] === "ls") {
        ls();
    }
    if (splicedCmd[0] === "cat") {
        cat(splicedCmd[1]);
    }
    // process.stdout.write('You typed: ' + cmd);
});
