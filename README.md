# CELO Quiz App 🌐

A fun and interactive quiz application about the CELO blockchain built with React, TypeScript, and Vite. Test your knowledge about CELO and connect your wallet to the CELO network!

## Features

- ✨ Interactive quiz with 5 questions about CELO blockchain
- 🔐 MetaMask wallet integration
- 🌐 Automatic CELO Alfajores Testnet connection
- 📊 Score tracking and results display
- 🎨 Beautiful, responsive UI with animations
- ⛓️ Smart contract ready for on-chain score storage

## Prerequisites

- Node.js (v20 or higher)
- MetaMask or another Web3 wallet browser extension
- Git (v2.38 or higher)

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run the Development Server

```bash
npm run dev
# or
pnpm run dev
```

The app will open at `http://localhost:5173`

### 3. Connect Your Wallet

1. Click the "Connect Wallet" button in the header
2. Approve the connection in MetaMask
3. The app will automatically switch to CELO Alfajores Testnet
4. If you don't have the network configured, it will be added automatically

## Quiz Questions

The quiz includes questions about:
- What is CELO?
- CELO's native token
- CELO stablecoins (cUSD)
- Consensus mechanism
- Unique features of CELO

## CELO Network Configuration

### Alfajores Testnet (Default)
- Chain ID: 44787 (0xaef3)
- RPC URL: https://alfajores-forno.celo-testnet.org
- Block Explorer: https://alfajores-blockscout.celo-testnet.org/
- Faucet: https://faucet.celo.org

### Mainnet
- Chain ID: 42220 (0xa4ec)
- RPC URL: https://forno.celo.org
- Block Explorer: https://explorer.celo.org/

## Learn More About CELO

- [CELO Documentation](https://docs.celo.org)
- [CELO Website](https://celo.org)
- [CELO Discord](https://chat.celo.org)
- [CELO GitHub](https://github.com/celo-org)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
