const inquirer = require("inquirer").default;
const colors = require("colors");
const KeyManager = require('../lib/KeyManager');


const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "key",
                message: "Enter the API key ".green + "https://coingecko.com"
            }
        ]);

        const key = keyManager.setKey(input.key);

        if (key) {
            console.log("API key is set".blue);
        }
    },
    show() {
        console.log("Hello from show")
    },
    remove() {
        console.log("Hello from remove")
    }
}

module.exports = key;