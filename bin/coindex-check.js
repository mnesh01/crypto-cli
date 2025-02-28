const { Command } = require('commander');
const check = require('../commands/check')

const program = new Command(); 
program
    .command('price')
    .description('check price of coins')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action(cmd => check.price(cmd));

program.parse(process.argv);