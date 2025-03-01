# Crypto CLI

Crypto CLI is a command-line interface tool that allows users to fetch real-time cryptocurrency prices using the CoinGecko API. It enables users to check the value of any cryptocurrency in USD with a simple command.

## Features

- Fetch real-time cryptocurrency prices
- Support for multiple cryptocurrencies
- API key management (set, get, delete)
- User-friendly CLI commands

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mnesh01/crypto-cli.git
   cd crypto-cli
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up your API key:

   - Sign up at [CoinGecko](https://www.coingecko.com/)
   - Get a free API key
   - Set the API key using:
     ```sh
     coindex setkey YOUR_API_KEY
     ```

## Usage

### Check Cryptocurrency Price

To check the price of a cryptocurrency:

```sh
coindex check price --coin=bitcoin
```

For multiple coins:

```sh
coindex check price --coin=bitcoin,ethereum,solana
```

### Manage API Key

- **Set API Key:**
  ```sh
  coindex setkey YOUR_API_KEY
  ```
- **Get API Key:**
  ```sh
  coindex getkey
  ```
- **Delete API Key:**
  ```sh
  coindex deletekey
  ```

## File Structure

```
crypto-cli/
│── bin/
│── commands/
│   ├── check.js    # Handles price checking
│   ├── key.js      # Handles API key management
│── lib/
│   ├── CryptoApi.js # Handles API requests
│   ├── KeyManager.js # Manages API keys
│── utils/
│── .env            # Stores API key 
│── package.json    # Project dependencies
│── README.md       # Project documentation
```

## Technologies Used

- Node.js
- Axios (for API requests)
- Commander.js (for CLI handling)
- dotenv (for environment variables)

---


