const { Command } = require('commander');
const program = new Command();  // ✅ Correct way to use Commander.js
const key = require('../commands/key')
program
    .command('set')
    .description('Set API Key -- Get at https://coingecko.com')
    .action(key.set);

    program
    .command('show')
    .description('Show API Key ')
    .action(key.show);

    program
    .command('remove')
    .description('Remove API key')
    .action(key.remove);



program.parse(process.argv);