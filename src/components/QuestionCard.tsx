import React from 'react';
import type { Question } from '../quizData';
import './QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  showResult: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult
}) => {
  return (
    <div className="question-card">
      <h2 className="question-number">Question {question.id}</h2>
      <p className="question-text">{question.question}</p>
      
      <div className="options-container">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          
          let className = 'option-button';
          if (showResult) {
            if (isCorrect) {
              className += ' correct';
            } else if (isSelected && !isCorrect) {
              className += ' incorrect';
            }
          } else if (isSelected) {
            className += ' selected';
          }
          
          return (
            <button
              key={index}
              className={className}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}.</span>
              <span className="option-text">{option}</span>
            </button>
          );
        })}
      </div>
      
      {showResult && (
        <div className={`explanation ${selectedAnswer === question.correctAnswer ? 'correct-explanation' : 'incorrect-explanation'}`}>
          <strong>
            {selectedAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
          </strong>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
