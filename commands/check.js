const CryptoAPI = require('../lib/CryptoApi');

const check = {
  async price(cmd) {
    try {
      const api = new CryptoAPI();  
      const priceOutputData = await api.getPriceData(cmd.coin || 'bitcoin'); 
      console.log("Crypto Prices (USD):", priceOutputData);
    } catch (err) {
      console.error("Error fetching price:", err.message);
    }
  }
};

module.exports = check;