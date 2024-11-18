# Automated Token Trading Bot

This project implements an automated trading bot for Uniswap V2-based decentralized exchanges using the **ethers.js** library. The bot can swap tokens based on predefined rules and private keys.

---

## Features

- Automatically monitors blockchain blocks.
- Executes trades using the Uniswap V2 router.
- Supports both native tokens and ERC-20 tokens.
- Trades a percentage of wallet balances based on configuration.
- Alternates between buying and selling tokens for predefined private keys.

---

## Prerequisites

- **Node.js** (version >= 16.0.0)
- **npm** or **yarn** installed

---

## Environment Variables

Before running the bot, define the following environment variables in a `.env` file:

```ini
# List of private keys (in JSON format)
PRIVATE_KEYS_ARRAY=["0xYourPrivateKey1", "0xYourPrivateKey2"]

# Percentage of funds to use in trades
PER_OF_NATIVE_TO_TRADE=0.1

# Token addresses for trading
TOKEN_0=0xYourToken0Address
TOKEN_1=0xYourToken1Address
```
