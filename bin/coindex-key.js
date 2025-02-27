const { Command } = require('commander');
const program = new Command();  // ✅ Correct way to use Commander.js

program
    .command('set')
    .description('Set API Key -- Get at https://coingecko.com')
    .action(() => console.log('Hello from set'));

    program
    .command('show')
    .description('Show API Key ')
    .action(() => console.log('Hello from show'));

    program
    .command('remove')
    .description('Remove API key')
    .action(() => console.log('Hello from remove'));



program.parse(process.argv);