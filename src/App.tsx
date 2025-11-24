import { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import { shuffleQuestions } from './quizData';
import type { Question } from './quizData';
import { sdk } from '@farcaster/miniapp-sdk';
import './App.css';

interface Answer {
  questionId: number;
  selectedAnswer: number;
}

function App() {
  const [userName, setUserName] = useState<string>('');
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [isFarcasterMiniApp, setIsFarcasterMiniApp] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(() => shuffleQuestions([], 10));

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  // Initialize Farcaster SDK and detect environment
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check if running in Farcaster MiniApp environment using SDK context
        const context = await sdk.context;
        const isFarcasterMiniApp = context?.client?.clientFid !== undefined;

        console.log('Farcaster SDK context:', context);
        console.log('Is Farcaster MiniApp:', isFarcasterMiniApp);

        if (isFarcasterMiniApp) {
          setIsFarcasterMiniApp(true);
          console.log('Calling sdk.actions.ready()');
          await sdk.actions.ready();
          console.log('sdk.actions.ready() called successfully');
        }

        // Detect and auto-connect to MiniPay or Farcaster
        if (window.ethereum) {
          if (window.ethereum.isMiniPay) {
            setIsMiniPay(true);
            try {
              // Auto-connect to MiniPay wallet
              const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
              }) as string[];
              setUserAddress(accounts[0]);
            } catch (error) {
              console.error('Error auto-connecting to MiniPay:', error);
            }
          } else if (isFarcasterMiniApp) {
            // Auto-connect in Farcaster MiniApp
            try {
              const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
              }) as string[];
              setUserAddress(accounts[0]);
            } catch (error) {
              console.error('Error auto-connecting to Farcaster wallet:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error initializing app:', error);
      }
    };

    initializeApp();
  }, []);

  // Connect to MetaMask or other Web3 wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        }) as string[];
        
        // Switch to CELO Mainnet (Chain ID: 42220) or Alfajores Testnet (Chain ID: 44787)
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaef3' }], // 44787 in hex (Alfajores Testnet)
          });
        } catch (switchError: unknown) {
          // Chain doesn't exist, add it
          if (switchError && typeof switchError === 'object' && 'code' in switchError && switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0xaef3',
                chainName: 'Celo Alfajores Testnet',
                nativeCurrency: {
                  name: 'CELO',
                  symbol: 'CELO',
                  decimals: 18
                },
                rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
                blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org/']
              }]
            });
          }
        }
        
        setUserAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please make sure MetaMask is installed.');
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet to connect to CELO!');
    }
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex
    });
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowResult(false);
    } else {
      // Quiz complete
      setQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (question && answer.selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResult(false);
    setQuizComplete(false);
    setHasStarted(false);
    setUserName('');
    // Reshuffle questions for a new quiz attempt
    setQuizQuestions(shuffleQuestions([], 10));
  };

  if (quizComplete) {
    return (
      <div className="app">
        <Results
          score={calculateScore()}
          totalQuestions={quizQuestions.length}
          onRetry={resetQuiz}
          userAddress={userAddress}
          userName={userName}
        />
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="app">
        <div className="welcome-screen">
          <div className="welcome-card">
            <div className="welcome-icon">
              <img src="/celo.png" alt="CELO Logo" style={{width: '80px', height: 'auto'}} />
            </div>
            <h1 className="welcome-title">Welcome to CeloIQ</h1>
            <p className="welcome-description">
              Test your knowledge about the CELO blockchain and earn an exclusive NFT badge for exceptional performance (90%+)
            </p>
            
            <div className="name-input-section">
              <label className="input-label">Enter Your Name</label>
              <input
                type="text"
                className="name-input"
                placeholder="Your name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && userName.trim()) {
                    setHasStarted(true);
                  }
                }}
                autoFocus
              />
            </div>

            <button
              className="start-button"
              onClick={() => setHasStarted(true)}
              disabled={!userName.trim()}
            >
              Begin Intelligence Test
            </button>

            <div className="welcome-features">
              <div className="feature-item">
                <span className="feature-icon"><img src="/celo.png" alt="CELO" style={{width: '32px', height: 'auto'}} /></span>
                <span className="feature-text">10 Questions</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><img src="/celo.png" alt="CELO" style={{width: '32px', height: 'auto'}} /></span>
                <span className="feature-text">NFT Rewards</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><img src="/celo.png" alt="CELO" style={{width: '32px', height: 'auto'}} /></span>
                <span className="feature-text">On-Chain Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="app-title">
              <img src="/celo.png" alt="CELO Logo" className="celo-logo" />
              CeloIQ
            </h1>
            <p className="app-subtitle">Test Your CELO Blockchain Intelligence</p>
          </div>
          
          {/* Hide connect button when in MiniPay or Farcaster MiniApp - wallet is auto-connected */}
          {!isMiniPay && !isFarcasterMiniApp && !userAddress ? (
            <button 
              className="connect-wallet-button" 
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
          ) : userAddress ? (
            <div className="wallet-connected">
              <div className="connected-badge">
                ✓ {isMiniPay ? 'MiniPay' : isFarcasterMiniApp ? 'Farcaster' : 'Connected'}
              </div>
              <div className="wallet-address-display">
                {userAddress.substring(0, 6)}...{userAddress.substring(userAddress.length - 4)}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="app-main">
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
          <p className="progress-text">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </p>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={currentAnswer?.selectedAnswer ?? null}
          onSelectAnswer={handleSelectAnswer}
          showResult={showResult}
        />

        <div className="navigation-buttons">
          <button
            className="nav-button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            ← Previous
          </button>
          
          <button
            className="nav-button primary"
            onClick={handleNext}
            disabled={!showResult}
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next →'}
          </button>
        </div>

        {!userAddress && !isFarcasterMiniApp && (
          <div className="wallet-reminder">
            <img src="/celo.png" alt="CELO" style={{width: '20px', height: 'auto', verticalAlign: 'middle', marginRight: '8px'}} />
            Connect your wallet to save your score on the CELO blockchain!
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Built with ❤️ for the CELO community | 
          <a href="https://docs.celo.org" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
