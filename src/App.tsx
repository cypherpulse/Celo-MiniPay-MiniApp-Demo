import { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import { quizQuestions } from './quizData';
import type { Question } from './quizData';
import './App.css';

interface Answer {
  questionId: number;
  selectedAnswer: number;
}

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  // Connect to MetaMask or other Web3 wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        
        // Switch to CELO Mainnet (Chain ID: 42220) or Alfajores Testnet (Chain ID: 44787)
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaef3' }], // 44787 in hex (Alfajores Testnet)
          });
        } catch (switchError: any) {
          // Chain doesn't exist, add it
          if (switchError.code === 4902) {
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
  };

  if (quizComplete) {
    return (
      <div className="app">
        <Results
          score={calculateScore()}
          totalQuestions={quizQuestions.length}
          onRetry={resetQuiz}
          userAddress={userAddress}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="app-title">
              <span className="celo-logo">🌐</span>
              CELO Quiz Challenge
            </h1>
            <p className="app-subtitle">Test your knowledge about the CELO blockchain</p>
          </div>
          
          {!userAddress ? (
            <button 
              className="connect-wallet-button" 
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
          ) : (
            <div className="wallet-connected">
              <div className="connected-badge">✓ Connected</div>
              <div className="wallet-address-display">
                {userAddress.substring(0, 6)}...{userAddress.substring(userAddress.length - 4)}
              </div>
            </div>
          )}
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

        {!userAddress && (
          <div className="wallet-reminder">
            💡 Connect your wallet to save your score on the CELO blockchain!
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
