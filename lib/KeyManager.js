const Configstore = require('configstore').default;
const pkg = require('../package.json');

class KeyManager{
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey' , key);
        return key;
    }
    getKey() {
        const key = this.conf.get('apiKey');
    
        if (!key) {
            throw new Error("No API key found -- get a key from https://coingecko.com");
        }
    
        return key;  
    }
}

module.exports = KeyManager;

