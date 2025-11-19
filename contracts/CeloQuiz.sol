// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title CeloQuiz
 * @dev A simple quiz contract about CELO blockchain
 */
contract CeloQuiz {
    struct QuizAttempt {
        address participant;
        uint8 score;
        uint256 timestamp;
    }
    
    mapping(address => QuizAttempt[]) public userAttempts;
    mapping(address => uint8) public bestScores;
    QuizAttempt[] public leaderboard;
    
    address public owner;
    uint256 public totalQuestions = 10;
    
    event QuizCompleted(address indexed participant, uint8 score, uint256 timestamp);
    
    constructor() {
        owner = msg.sender;
    }
    
    /**
     * @dev Submit quiz results
     * @param score The score achieved by the participant
     */
    function submitQuiz(uint8 score) external {
        require(score <= totalQuestions, "Invalid score");
        
        QuizAttempt memory attempt = QuizAttempt({
            participant: msg.sender,
            score: score,
            timestamp: block.timestamp
        });
        
        userAttempts[msg.sender].push(attempt);
        
        // Update best score if this is better
        if (score > bestScores[msg.sender]) {
            bestScores[msg.sender] = score;
            _updateLeaderboard(msg.sender, score);
        }
        
        emit QuizCompleted(msg.sender, score, block.timestamp);
    }
    
    /**
     * @dev Update leaderboard with new high score
     */
    function _updateLeaderboard(address participant, uint8 score) private {
        // Remove old entry if exists
        for (uint i = 0; i < leaderboard.length; i++) {
            if (leaderboard[i].participant == participant) {
                // Shift array elements
                for (uint j = i; j < leaderboard.length - 1; j++) {
                    leaderboard[j] = leaderboard[j + 1];
                }
                leaderboard.pop();
                break;
            }
        }
        
        // Add new entry
        leaderboard.push(QuizAttempt({
            participant: participant,
            score: score,
            timestamp: block.timestamp
        }));
        
        // Sort leaderboard (bubble sort for simplicity)
        for (uint i = 0; i < leaderboard.length; i++) {
            for (uint j = i + 1; j < leaderboard.length; j++) {
                if (leaderboard[j].score > leaderboard[i].score) {
                    QuizAttempt memory temp = leaderboard[i];
                    leaderboard[i] = leaderboard[j];
                    leaderboard[j] = temp;
                }
            }
        }
    }
    
    /**
     * @dev Get user's quiz attempts
     */
    function getUserAttempts(address user) external view returns (QuizAttempt[] memory) {
        return userAttempts[user];
    }
    
    /**
     * @dev Get top N scores from leaderboard
     */
    function getLeaderboard(uint256 limit) external view returns (QuizAttempt[] memory) {
        uint256 length = leaderboard.length < limit ? leaderboard.length : limit;
        QuizAttempt[] memory topScores = new QuizAttempt[](length);
        
        for (uint i = 0; i < length; i++) {
            topScores[i] = leaderboard[i];
        }
        
        return topScores;
    }
    
    /**
     * @dev Get user's best score
     */
    function getBestScore(address user) external view returns (uint8) {
        return bestScores[user];
    }
}
