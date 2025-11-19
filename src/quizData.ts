export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is CELO?",
    options: [
      "A cryptocurrency exchange",
      "A mobile-first blockchain platform focused on making crypto accessible to anyone",
      "A Bitcoin fork",
      "A decentralized storage network"
    ],
    correctAnswer: 1,
    explanation: "CELO is a mobile-first blockchain platform that aims to make financial tools accessible to anyone with a mobile phone."
  },
  {
    id: 2,
    question: "What is the native token of the CELO blockchain?",
    options: [
      "ETH",
      "BTC",
      "CELO",
      "USDC"
    ],
    correctAnswer: 2,
    explanation: "CELO is the native token of the CELO blockchain, used for transaction fees, governance, and staking."
  },
  {
    id: 3,
    question: "Which of these is a stablecoin on the CELO platform?",
    options: [
      "cUSD",
      "USDT",
      "DAI",
      "BUSD"
    ],
    correctAnswer: 0,
    explanation: "cUSD (CELO Dollar) is a stablecoin native to the CELO platform, pegged to the US Dollar."
  },
  {
    id: 4,
    question: "What consensus mechanism does CELO use?",
    options: [
      "Proof of Work (PoW)",
      "Proof of Stake (PoS)",
      "Delegated Proof of Stake (DPoS)",
      "Proof of Authority (PoA)"
    ],
    correctAnswer: 1,
    explanation: "CELO uses a Byzantine Fault Tolerant (BFT) Proof of Stake consensus mechanism."
  },
  {
    id: 5,
    question: "What makes CELO unique compared to other blockchains?",
    options: [
      "It only supports Bitcoin transactions",
      "It's focused on mobile accessibility and phone-number-based addresses",
      "It has no transaction fees",
      "It's a private blockchain"
    ],
    correctAnswer: 1,
    explanation: "CELO's unique feature is its mobile-first approach, allowing users to send crypto to phone numbers and making blockchain accessible via mobile phones."
  },
  {
    id: 6,
    question: "What is the block time for CELO blockchain?",
    options: [
      "1 second",
      "5 seconds",
      "10 seconds",
      "15 seconds"
    ],
    correctAnswer: 1,
    explanation: "CELO has an average block time of approximately 5 seconds, making it faster than many other blockchains."
  },
  {
    id: 7,
    question: "Which identity system does CELO implement to map phone numbers to wallet addresses?",
    options: [
      "Phone Registry Protocol",
      "Identity Mapping System",
      "Lightweight Identity Protocol",
      "Mobile Address Resolver"
    ],
    correctAnswer: 2,
    explanation: "CELO uses the Lightweight Identity Protocol which allows users to map their phone numbers to wallet addresses for easier transactions."
  },
  {
    id: 8,
    question: "What is the purpose of the CELO Reserve?",
    options: [
      "To store all transaction fees",
      "To back the value of CELO stablecoins like cUSD and cEUR",
      "To pay validator rewards only",
      "To fund the CELO Foundation exclusively"
    ],
    correctAnswer: 1,
    explanation: "The CELO Reserve is a basket of cryptocurrencies that backs and stabilizes the value of CELO stablecoins (cUSD, cEUR, cREAL), ensuring they maintain their peg."
  },
  {
    id: 9,
    question: "How many validators can participate in CELO's consensus at any given time?",
    options: [
      "Up to 50 validators",
      "Up to 100 validators",
      "Up to 110 validators",
      "Unlimited validators"
    ],
    correctAnswer: 2,
    explanation: "CELO allows up to 110 validators to participate in consensus at any given epoch, ensuring decentralization while maintaining performance."
  },
  {
    id: 10,
    question: "What programming language is primarily used for CELO smart contracts?",
    options: [
      "Rust",
      "Solidity",
      "Python",
      "JavaScript"
    ],
    correctAnswer: 1,
    explanation: "CELO smart contracts are written in Solidity, making it compatible with Ethereum development tools and allowing developers to easily port Ethereum dApps to CELO."
  }
];
