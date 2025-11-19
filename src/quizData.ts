export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const allQuestions: Question[] = [
  // CELO Basics (1-15)
  {
    id: 1,
    question: "What is CELO?",
    options: [
      "A cryptocurrency exchange",
      "An Ethereum L2 blockchain platform for real-world payments",
      "A Bitcoin fork",
      "A decentralized storage network"
    ],
    correctAnswer: 1,
    explanation: "CELO is an Ethereum Layer 2 blockchain designed for fast, low-cost payments worldwide, focused on real-world use cases."
  },
  {
    id: 2,
    question: "What makes CELO a 'frontier chain for global impact'?",
    options: [
      "It's only for enterprise users",
      "It scales real-world solutions for all, focusing on mobile-first accessibility",
      "It's the oldest blockchain",
      "It only works in developed countries"
    ],
    correctAnswer: 1,
    explanation: "CELO is designed as a frontier chain to bring blockchain benefits to everyone globally, with a focus on emerging markets and mobile accessibility."
  },
  {
    id: 3,
    question: "What is the native token of the CELO network?",
    options: [
      "ETH",
      "BTC",
      "CELO",
      "USDC"
    ],
    correctAnswer: 2,
    explanation: "CELO is the native token used for transaction fees, governance, and securing the network through staking."
  },
  {
    id: 4,
    question: "What is CELO's average block time?",
    options: [
      "1 second",
      "5 seconds",
      "10 seconds",
      "15 seconds"
    ],
    correctAnswer: 0,
    explanation: "CELO has an average block time of 1 second, making it one of the fastest blockchains for transaction confirmation."
  },
  {
    id: 5,
    question: "What is the average gas fee on CELO?",
    options: [
      "$0.0004",
      "$0.01",
      "$0.10",
      "$1.00"
    ],
    correctAnswer: 0,
    explanation: "CELO maintains extremely low gas fees averaging $0.0004, making it highly accessible for everyday transactions."
  },
  {
    id: 6,
    question: "What is CELO's maximum transactions per second (TPS)?",
    options: [
      "100",
      "500",
      "1,400",
      "10,000"
    ],
    correctAnswer: 2,
    explanation: "CELO can handle up to 1,400 transactions per second, providing high throughput for scalable applications."
  },
  {
    id: 7,
    question: "How many total transactions has CELO processed?",
    options: [
      "100 million",
      "500 million",
      "Over 1 billion",
      "10 billion"
    ],
    correctAnswer: 2,
    explanation: "CELO has processed over 1 billion total transactions, demonstrating its widespread adoption and usage."
  },
  {
    id: 8,
    question: "What is CELO's monthly stablecoin volume?",
    options: [
      "$500 million",
      "$1 billion",
      "$1.7 billion",
      "$5 billion"
    ],
    correctAnswer: 2,
    explanation: "CELO facilitates $1.7 billion in monthly stablecoin volumes, showing its strong position in digital payments."
  },
  {
    id: 9,
    question: "How many daily active users (DAUs) does CELO have?",
    options: [
      "100K",
      "300K",
      "600K",
      "1M"
    ],
    correctAnswer: 2,
    explanation: "CELO has approximately 600,000 daily active users, demonstrating its growing adoption worldwide."
  },
  {
    id: 10,
    question: "What is CELO's Total Value Secured (TVS)?",
    options: [
      "$100M",
      "$200M",
      "$400M",
      "$1B"
    ],
    correctAnswer: 2,
    explanation: "CELO has approximately $400 million in Total Value Secured across its ecosystem."
  },
  {
    id: 11,
    question: "How much carbon has CELO offset?",
    options: [
      "1,000 tCO2",
      "2,500 tCO2",
      "3,845 tCO2",
      "10,000 tCO2"
    ],
    correctAnswer: 2,
    explanation: "CELO has offset 3,845 tonnes of CO2, making it a carbon-negative blockchain committed to environmental sustainability."
  },
  {
    id: 12,
    question: "What type of blockchain architecture is CELO built on?",
    options: [
      "Standalone Layer 1",
      "Ethereum Layer 2 (L2)",
      "Cosmos SDK",
      "Polkadot Parachain"
    ],
    correctAnswer: 1,
    explanation: "CELO is an Ethereum Layer 2 blockchain, leveraging Ethereum's security and ecosystem while providing enhanced scalability."
  },
  {
    id: 13,
    question: "Which tech stack does CELO use for its L2 infrastructure?",
    options: [
      "Arbitrum",
      "OP-Stack",
      "zkSync",
      "Polygon CDK"
    ],
    correctAnswer: 1,
    explanation: "CELO uses the OP-Stack, a modular, open-source blueprint for highly scalable and interoperable blockchains."
  },
  {
    id: 14,
    question: "What data availability solution does CELO use?",
    options: [
      "Celestia",
      "EigenDA v2",
      "Avail",
      "NEAR DA"
    ],
    correctAnswer: 1,
    explanation: "CELO uses EigenDA v2, a horizontally scalable, modular data availability solution capable of 100mb/s with lower latency."
  },
  {
    id: 15,
    question: "What zero-knowledge technology does CELO implement?",
    options: [
      "Plonky2",
      "zkEVM via Succinct SP1",
      "Halo2",
      "Groth16"
    ],
    correctAnswer: 1,
    explanation: "CELO uses zkEVM via Succinct SP1, a zero-knowledge virtual machine that proves correct execution of RISC-V compiled programs."
  },

  // Stablecoins & Payments (16-30)
  {
    id: 16,
    question: "Which stablecoins are native to CELO?",
    options: [
      "USDT and USDC only",
      "cUSD, cEUR, and cREAL",
      "DAI and FRAX",
      "BUSD and TUSD"
    ],
    correctAnswer: 1,
    explanation: "CELO has native stablecoins: cUSD (US Dollar), cEUR (Euro), and cREAL (Brazilian Real), designed for global accessibility."
  },
  {
    id: 17,
    question: "What unique gas payment feature does CELO offer?",
    options: [
      "No gas fees",
      "Pay gas fees with any ERC20 token including stablecoins",
      "Gas fees in Bitcoin",
      "Free transactions for validators only"
    ],
    correctAnswer: 1,
    explanation: "CELO allows users to pay gas fees with ERC20 tokens (including USDT, USDC, and cUSD), making transactions more accessible."
  },
  {
    id: 18,
    question: "What is MiniPay?",
    options: [
      "A CELO mining tool",
      "A mobile payment app built on CELO",
      "A validator node software",
      "A CELO exchange"
    ],
    correctAnswer: 1,
    explanation: "MiniPay is a mobile payment application built on CELO, enabling fast and low-cost crypto payments directly from mobile phones."
  },
  {
    id: 19,
    question: "What is Valora?",
    options: [
      "A CELO validator",
      "A mobile wallet for CELO",
      "A stablecoin",
      "A smart contract language"
    ],
    correctAnswer: 1,
    explanation: "Valora is a mobile-first wallet designed for the CELO ecosystem, making crypto accessible via mobile phones."
  },
  {
    id: 20,
    question: "What backs CELO's stablecoins?",
    options: [
      "US Dollar reserves only",
      "The CELO Reserve with a basket of crypto assets",
      "Gold reserves",
      "Nothing - they're algorithmic"
    ],
    correctAnswer: 1,
    explanation: "CELO stablecoins are backed by the CELO Reserve, which holds a diversified basket of crypto assets to maintain stability."
  },
  {
    id: 21,
    question: "What is the Mento Protocol?",
    options: [
      "A DeFi lending protocol",
      "The stability mechanism for CELO stablecoins",
      "A NFT marketplace",
      "A cross-chain bridge"
    ],
    correctAnswer: 1,
    explanation: "Mento is the algorithmic stability mechanism that manages CELO's stablecoins (cUSD, cEUR, cREAL) and their reserve."
  },
  {
    id: 22,
    question: "How does CELO enable phone number-based payments?",
    options: [
      "Through centralized KYC",
      "Using the Attestation Service and identity protocol",
      "Phone numbers aren't supported",
      "Via SMS only"
    ],
    correctAnswer: 1,
    explanation: "CELO's Attestation Service allows users to map phone numbers to wallet addresses, enabling easy peer-to-peer payments."
  },
  {
    id: 23,
    question: "What is the purpose of CELO's Proof of Ship program?",
    options: [
      "To verify cargo shipments",
      "To help builders get their apps funded",
      "To mine CELO tokens",
      "To validate transactions"
    ],
    correctAnswer: 1,
    explanation: "Proof of Ship is CELO's program to help builders get their applications funded and build their onchain reputation."
  },
  {
    id: 24,
    question: "Which of these can you do with CELO stablecoins?",
    options: [
      "Only hold them",
      "Send, receive, and pay for goods and services globally",
      "Mine them",
      "They don't exist yet"
    ],
    correctAnswer: 1,
    explanation: "CELO stablecoins can be used for real-world payments, remittances, and commerce globally with low fees."
  },
  {
    id: 25,
    question: "What makes CELO ideal for remittances?",
    options: [
      "High fees",
      "Fast transactions (1 sec) and ultra-low fees ($0.0004)",
      "Requires banks",
      "Slow settlement"
    ],
    correctAnswer: 1,
    explanation: "CELO's 1-second block time and $0.0004 average fee make it ideal for global remittances and cross-border payments."
  },
  {
    id: 26,
    question: "What is Celo Mondo?",
    options: [
      "A video game",
      "The CELO ecosystem portal for staking and governance",
      "A new token",
      "A wallet app"
    ],
    correctAnswer: 1,
    explanation: "Celo Mondo is the ecosystem portal where users can stake CELO, participate in governance, and use the bridge."
  },
  {
    id: 27,
    question: "Can you use CELO for DeFi applications?",
    options: [
      "No, CELO is only for payments",
      "Yes, CELO supports full DeFi ecosystem including lending, DEXs, and more",
      "Only for NFTs",
      "It's not a smart contract platform"
    ],
    correctAnswer: 1,
    explanation: "CELO is EVM-compatible and supports a full DeFi ecosystem with protocols like Ubeswap, Moola Market, and more."
  },
  {
    id: 28,
    question: "What major DeFi protocol recently deployed on CELO?",
    options: [
      "Compound",
      "Aave v3",
      "MakerDAO",
      "Curve"
    ],
    correctAnswer: 1,
    explanation: "Aave v3 deployed on CELO, expanding DeFi accessibility to millions of real-world users with ultra-low gas fees."
  },
  {
    id: 29,
    question: "What is unique about CELO's approach to financial inclusion?",
    options: [
      "Requires expensive hardware",
      "Mobile-first design with phone number addresses and stablecoins",
      "Only works in wealthy countries",
      "Requires traditional banks"
    ],
    correctAnswer: 1,
    explanation: "CELO's mobile-first approach, phone number mapping, and stablecoins make crypto accessible to anyone with a smartphone."
  },
  {
    id: 30,
    question: "What programming language is used for CELO smart contracts?",
    options: [
      "Rust",
      "Solidity (EVM-compatible)",
      "Python",
      "Go"
    ],
    correctAnswer: 1,
    explanation: "CELO uses Solidity for smart contracts, making it fully EVM-compatible and easy for Ethereum developers to build on."
  },

  // Validators & Consensus (31-40)
  {
    id: 31,
    question: "What consensus mechanism does CELO use?",
    options: [
      "Proof of Work",
      "Byzantine Fault Tolerant Proof of Stake",
      "Delegated Proof of Stake",
      "Proof of Authority"
    ],
    correctAnswer: 1,
    explanation: "CELO uses a BFT (Byzantine Fault Tolerant) Proof of Stake consensus mechanism for security and efficiency."
  },
  {
    id: 32,
    question: "How many validators can participate in CELO consensus?",
    options: [
      "21",
      "51",
      "110",
      "Unlimited"
    ],
    correctAnswer: 2,
    explanation: "CELO allows up to 110 validators to participate in consensus, balancing decentralization with performance."
  },
  {
    id: 33,
    question: "How can you become a CELO validator?",
    options: [
      "Purchase a validator license",
      "Stake CELO tokens and get elected by the community",
      "Get permission from CELO Foundation",
      "Mine blocks"
    ],
    correctAnswer: 1,
    explanation: "Anyone can become a CELO validator by staking CELO tokens and receiving votes from the community."
  },
  {
    id: 34,
    question: "What is the minimum amount of CELO needed to vote for validators?",
    options: [
      "No minimum",
      "100 CELO",
      "1,000 CELO",
      "10,000 CELO"
    ],
    correctAnswer: 0,
    explanation: "CELO has no minimum voting requirement, making governance accessible to all token holders."
  },
  {
    id: 35,
    question: "How often does CELO's validator set change?",
    options: [
      "Every block",
      "Every epoch (approximately 24 hours)",
      "Every week",
      "Never"
    ],
    correctAnswer: 1,
    explanation: "CELO's validator set is elected every epoch, which occurs approximately every 24 hours."
  },
  {
    id: 36,
    question: "What rewards do CELO validators receive?",
    options: [
      "No rewards",
      "Block rewards and transaction fees",
      "Only transaction fees",
      "Fixed salary"
    ],
    correctAnswer: 1,
    explanation: "CELO validators earn rewards from new block emissions and a share of transaction fees."
  },
  {
    id: 37,
    question: "Can you delegate your CELO tokens to validators?",
    options: [
      "No delegation is possible",
      "Yes, through validator groups",
      "Only to CELO Foundation",
      "Only if you hold 10,000+ CELO"
    ],
    correctAnswer: 1,
    explanation: "CELO allows token holders to delegate their stake to validator groups to participate in securing the network."
  },
  {
    id: 38,
    question: "What is a Validator Group in CELO?",
    options: [
      "A chat group for validators",
      "An organization that runs multiple validators",
      "A social media community",
      "A type of smart contract"
    ],
    correctAnswer: 1,
    explanation: "Validator Groups are entities that organize and operate multiple validators, making it easier for delegators to stake."
  },
  {
    id: 39,
    question: "What happens if a CELO validator misbehaves?",
    options: [
      "Nothing",
      "They get slashed (penalized) and lose staked tokens",
      "They receive a warning",
      "They get bonus rewards"
    ],
    correctAnswer: 1,
    explanation: "Malicious or negligent validators face slashing penalties, where they lose a portion of their staked CELO."
  },
  {
    id: 40,
    question: "How does CELO maintain fast block times with many validators?",
    options: [
      "By reducing security",
      "Through BFT consensus with efficient validator rotation",
      "By limiting transactions",
      "Using centralized servers"
    ],
    correctAnswer: 1,
    explanation: "CELO's BFT consensus with efficient validator rotation enables 1-second blocks while maintaining decentralization."
  },

  // Governance & Community (41-50)
  {
    id: 41,
    question: "How is CELO governed?",
    options: [
      "By the CELO Foundation only",
      "Through on-chain governance where CELO holders vote on proposals",
      "By Bitcoin miners",
      "No governance exists"
    ],
    correctAnswer: 1,
    explanation: "CELO uses on-chain governance where CELO token holders can vote on protocol upgrades and parameter changes."
  },
  {
    id: 42,
    question: "Where can you participate in CELO governance?",
    options: [
      "Only through email",
      "On Celo Mondo platform",
      "Governance is not public",
      "Only validators can participate"
    ],
    correctAnswer: 1,
    explanation: "CELO governance is accessible through Celo Mondo, where anyone holding CELO can vote on proposals."
  },
  {
    id: 43,
    question: "What is the CELO Foundation's role?",
    options: [
      "Controls all decisions",
      "Supports ecosystem growth and development",
      "Mines all blocks",
      "Owns all CELO tokens"
    ],
    correctAnswer: 1,
    explanation: "The CELO Foundation supports ecosystem growth through grants, partnerships, and community initiatives."
  },
  {
    id: 44,
    question: "What famous quote is associated with CELO?",
    options: [
      "To the moon",
      "Improving worldwide access to basic payments/finance - Vitalik Buterin",
      "Buy Bitcoin",
      "HODL forever"
    ],
    correctAnswer: 1,
    explanation: "Vitalik Buterin praised CELO for improving worldwide access to payments and finance, highlighting its real-world impact."
  },
  {
    id: 45,
    question: "What achievement did CELO accomplish with its L2 migration?",
    options: [
      "Increased fees",
      "Halved inflation, cut block times to 1s, integrated with Ethereum",
      "Removed all validators",
      "Became centralized"
    ],
    correctAnswer: 1,
    explanation: "CELO's L2 migration halved inflation, achieved 1-second blocks, removed 300k+ lines of legacy code, and integrated with Ethereum."
  },
  {
    id: 46,
    question: "How many builders/projects are in the CELO ecosystem?",
    options: [
      "Less than 100",
      "Around 500",
      "Over 1,000",
      "Thousands"
    ],
    correctAnswer: 3,
    explanation: "CELO has a thriving ecosystem with thousands of builders creating real-world blockchain solutions."
  },
  {
    id: 47,
    question: "What is CELO's approach to carbon emissions?",
    options: [
      "Ignores environmental impact",
      "Carbon-negative through offset programs",
      "Carbon-neutral only",
      "Plans to address it later"
    ],
    correctAnswer: 1,
    explanation: "CELO is committed to being carbon-negative, having offset over 3,845 tonnes of CO2 emissions."
  },
  {
    id: 48,
    question: "Which community platforms does CELO use?",
    options: [
      "Only email",
      "Discord, X (Twitter), Forum, and Lemonade Social",
      "Facebook only",
      "No community platforms"
    ],
    correctAnswer: 1,
    explanation: "CELO has active communities on Discord, X, the CELO Forum, and Lemonade Social for builders to connect."
  },
  {
    id: 49,
    question: "What is CELO's vision?",
    options: [
      "Replace Bitcoin",
      "Build a trillion-dollar onchain economy for real-world solutions",
      "Become the fastest blockchain",
      "Only serve enterprises"
    ],
    correctAnswer: 1,
    explanation: "CELO's vision is to build a purpose-driven, trillion-dollar onchain economy focused on real-world impact."
  },
  {
    id: 50,
    question: "What makes CELO different from other L2s?",
    options: [
      "It's slower",
      "Mobile-first focus, ultra-low fees, gas payment in stablecoins, real-world adoption",
      "It's more expensive",
      "It doesn't support smart contracts"
    ],
    correctAnswer: 1,
    explanation: "CELO stands out with its mobile-first design, $0.0004 gas fees, stablecoin gas payments, and focus on real-world use cases."
  },

  // Advanced & Technical (51-60)
  {
    id: 51,
    question: "What is CELO's EVM compatibility level?",
    options: [
      "Not EVM-compatible",
      "Fully EVM-compatible",
      "Partially compatible",
      "Uses a different VM"
    ],
    correctAnswer: 1,
    explanation: "CELO is fully EVM-compatible, allowing seamless deployment of Ethereum smart contracts and dApps."
  },
  {
    id: 52,
    question: "What tools can Ethereum developers use on CELO?",
    options: [
      "None",
      "All Ethereum tools: Hardhat, Truffle, Remix, Web3.js, Ethers.js",
      "Only custom CELO tools",
      "Must learn new programming languages"
    ],
    correctAnswer: 1,
    explanation: "CELO's EVM compatibility means developers can use familiar Ethereum tools like Hardhat, Remix, and Web3.js."
  },
  {
    id: 53,
    question: "What is Celoscan?",
    options: [
      "A wallet",
      "CELO's block explorer for viewing transactions and addresses",
      "A mining tool",
      "An exchange"
    ],
    correctAnswer: 1,
    explanation: "Celoscan is CELO's block explorer, similar to Etherscan, for viewing on-chain data and transactions."
  },
  {
    id: 54,
    question: "Can you bridge assets from Ethereum to CELO?",
    options: [
      "No bridging available",
      "Yes, through the CELO bridge on Mondo",
      "Only through centralized exchanges",
      "Bridging takes weeks"
    ],
    correctAnswer: 1,
    explanation: "CELO offers native bridging through Celo Mondo, allowing users to move assets between Ethereum and CELO."
  },
  {
    id: 55,
    question: "What AI capabilities does CELO support?",
    options: [
      "No AI support",
      "AI agents, MCP servers, and intelligent onchain applications",
      "Only chatbots",
      "AI is banned"
    ],
    correctAnswer: 1,
    explanation: "CELO provides AI-focused tools and frameworks for launching AI agents and building intelligent applications for the onchain economy."
  },
  {
    id: 56,
    question: "What is the CELO Reserve backed by?",
    options: [
      "Only CELO tokens",
      "A diversified basket of crypto assets including BTC, ETH, and CELO",
      "US Dollars in a bank",
      "Gold bars"
    ],
    correctAnswer: 1,
    explanation: "The CELO Reserve holds a diversified basket of crypto assets to back and stabilize CELO's stablecoins."
  },
  {
    id: 57,
    question: "How does CELO handle network upgrades?",
    options: [
      "Through centralized decision-making",
      "Via on-chain governance voting by token holders",
      "Automatic without voting",
      "Cannot be upgraded"
    ],
    correctAnswer: 1,
    explanation: "CELO uses decentralized on-chain governance where token holders vote to approve protocol upgrades."
  },
  {
    id: 58,
    question: "What is the Attestation Service?",
    options: [
      "A certificate authority",
      "A service that verifies phone numbers and maps them to wallet addresses",
      "A document storage system",
      "An identity card issuer"
    ],
    correctAnswer: 1,
    explanation: "The Attestation Service enables CELO's phone number mapping feature by verifying phone ownership through SMS."
  },
  {
    id: 59,
    question: "Can you run a full CELO node?",
    options: [
      "No, nodes are restricted",
      "Yes, anyone can run a full node or light client",
      "Only with special permission",
      "Nodes don't exist"
    ],
    correctAnswer: 1,
    explanation: "CELO is permissionless; anyone can run a full node, light client, or validator to support the network."
  },
  {
    id: 60,
    question: "What makes CELO attractive for developers?",
    options: [
      "High fees",
      "EVM compatibility, low fees, fast blocks, mobile focus, and grant programs",
      "Limited documentation",
      "No developer support"
    ],
    correctAnswer: 1,
    explanation: "CELO offers EVM compatibility, ultra-low fees, 1-second blocks, mobile-first design, and robust developer support with grants."
  }
];

// Shuffle function to randomize question order (Fisher-Yates algorithm)
export function shuffleQuestions(questions: Question[] = allQuestions, count: number = 10): Question[] {
  const questionsToShuffle = questions.length > 0 ? questions : allQuestions;
  const shuffled = [...questionsToShuffle];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}
