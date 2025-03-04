const inquirer = require("inquirer").default;
const colors = require("colors");
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation')


const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "key",
                message: "Enter the API key ".green + "https://coingecko.com",
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input.key);

        if (key) {
            console.log("API key is set".blue);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            
            console.log('Current API key', key.yellow);
        } catch (error) {
            console.error(error.message.red)   
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            
            console.log("Key removed".blue);

        } catch (error) {
            console.error(error.message.red)   
        }
    },
}
module.exports = key;