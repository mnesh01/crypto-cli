const CryptoAPI = require('../lib/CryptoApi');

const check = {
  async price(cmd) {
    try {
      const api = new CryptoAPI();  // No need for KeyManager
      const priceOutputData = await api.getPriceData(cmd.coin || 'bitcoin');  // Default to Bitcoin if no coin is provided
      console.log("Crypto Prices (USD):", priceOutputData);
    } catch (err) {
      console.error("Error fetching price:", err.message);
    }
  }
};

module.exports = check;