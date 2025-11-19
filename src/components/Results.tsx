import React from 'react';
import NFTCard from './NFTCard';
import './Results.css';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  userAddress?: string;
  userName: string;
}

const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  onRetry,
  userAddress,
  userName
}) => {
  const percentage = (score / totalQuestions) * 100;
  const earnedNFT = percentage >= 90;
  
  const getMessage = () => {
    if (percentage === 100) return "Perfect! You're a CELO expert! 🎉";
    if (percentage >= 90) return "Outstanding! You've earned the CELO Master NFT! 🏆";
    if (percentage >= 80) return "Excellent! You know CELO well! 🌟";
    if (percentage >= 60) return "Good job! Keep learning about CELO! 👍";
    if (percentage >= 40) return "Not bad! Review the CELO docs to improve! 📚";
    return "Keep trying! Learn more about CELO! 💪";
  };
  
  const getEmoji = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 80) return "🎯";
    if (percentage >= 60) return "👏";
    if (percentage >= 40) return "📖";
    return "🔄";
  };
  
  return (
    <div className="results-container">
      {earnedNFT && (
        <NFTCard
          name={userName}
          score={score}
          totalQuestions={totalQuestions}
        />
      )}
      
      <div className="results-card">
        <div className="results-emoji">{getEmoji()}</div>
        <h2 className="results-title">Quiz Complete!</h2>
        
        <div className="score-display">
          <div className="score-number">
            {score} / {totalQuestions}
          </div>
          <div className="score-percentage">{percentage.toFixed(0)}%</div>
        </div>
        
        <p className="results-message">{getMessage()}</p>
        
        {userAddress && (
          <div className="wallet-info">
            <p className="connected-text">Connected with</p>
            <p className="wallet-address">
              {userAddress.substring(0, 6)}...{userAddress.substring(userAddress.length - 4)}
            </p>
            <p className="blockchain-note">
              Your score has been recorded on the CELO blockchain! ⛓️
            </p>
          </div>
        )}
        
        <div className="results-actions">
          <button className="retry-button" onClick={onRetry}>
            Try Again
          </button>
          <a 
            href="https://docs.celo.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="learn-button"
          >
            Learn More About CELO
          </a>
        </div>
        
        <div className="celo-info">
          <h3>About CELO</h3>
          <p>
            CELO is a mobile-first blockchain platform that makes decentralized financial 
            tools accessible to anyone with a mobile phone. Learn more at{' '}
            <a href="https://celo.org" target="_blank" rel="noopener noreferrer">
              celo.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
