const axios = require('axios');

class CryptoAPI {
    constructor() {
        this.baseUrl = 'https://api.coingecko.com/api/v3';
    }

    async getCoinGeckoId(coinName) {
        try {
            const res = await axios.get(`${this.baseUrl}/coins/list`);
            const coinList = res.data;
            
            // Find the correct CoinGecko ID by matching the name
            const coin = coinList.find(c => c.name.toLowerCase() === coinName.toLowerCase());
            return coin ? coin.id : null;
        } catch (err) {
            console.error("Error fetching coin list:", err.message);
            return null;
        }
    }

    async getPriceData(cryptoIds) {
        if (typeof cryptoIds === 'string') {
            cryptoIds = cryptoIds.split(',');
        }

        const coinIds = await Promise.all(cryptoIds.map(async (coin) => {
            const id = await this.getCoinGeckoId(coin.trim());
            return id || coin.toLowerCase();  // Use found ID, else default to lowercase input
        }));

        try {
            const res = await axios.get(`${this.baseUrl}/simple/price`, {
                params: {
                    ids: coinIds.join(','),
                    vs_currencies: 'usd'
                }
            });
            return res.data;
        } catch (err) {
            console.error("API Request Failed:", err.response ? JSON.stringify(err.response.data, null, 2) : err.message);
        }
    }
}

module.exports = CryptoAPI;
