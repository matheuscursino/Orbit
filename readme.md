# Orbit
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Solana](https://img.shields.io/badge/Solana-000?style=for-the-badge&logo=Solana&logoColor=9945FF)
![Web3](https://img.shields.io/badge/web3%20js-F16822?style=for-the-badge&logo=web3.js&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Unlicense](https://img.shields.io/badge/Unlicense-green?style=for-the-badge&logo=unlicense&logoColor=white)

## Orbit - A Simple and Powerful SOL Tool

Orbit is a command-line tool designed to simplify interactions with the Solana blockchain. With a variety of functions, Orbit makes it easy (and cool) to manage Solana wallets and transactions.

![Orbit](https://i.imgur.com/p6EDCvN.png)

## Features

- 🔑 **Wallet Generator** – Create a new Solana wallet with a mnemonic phrase and passphrase.
- 💰 **Account Balance Checker** – Check the balance of any Solana address.
- 🔄 **Wallet Restorer** – Restore a wallet using a mnemonic phrase.
- 🚀 **SOL Sender** – Send SOL to other addresses securely.

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Install Dependencies

```sh
npm install
```

## How to Run

Clone the repository:

```sh
git clone https://github.com/matheuscursino/Orbit.git
cd Orbit
```

Install dependencies:

```sh
npm install
```

Run the application:

```sh
npm start
```

Alternatively, you can run:

```sh
cd src
node main.js
```


Follow the on-screen prompts to select the desired operation.

## Usage

### Create a Wallet

1. Select **Create Solana Wallet** from the menu.
2. Orbit will generate a new wallet with:
   - Public Address
   - Private Key
   - Mnemonic Phrase (for recovery)
3. Store your private key securely!

### Restore a Wallet

1. Select **Restore Wallet from Mnemonic**.
2. Enter your 12-word mnemonic phrase.
3. Your wallet will be restored and displayed.

### Check Account Balance

1. Select **Check Account Balance**.
2. Enter the Solana wallet address.
3. The balance (in SOL) will be displayed.

### Send SOL

1. Select **Create a Transaction**.
2. Enter your private key.
3. Enter the recipient's address.
4. Enter the amount of SOL to send.
5. Confirm the transaction and get the transaction signature.

## Support

If you have any questions, suggestions, or issues:
- Open an [Issue](https://github.com/matheuscursino/Orbit/issues)

## License

This project is licensed under **Unlicense** – Free and Open Source.

---

🚀 Made with ❤️ for the Solana community!

