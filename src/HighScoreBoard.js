import React from 'react';
import BoardView from './App';
export default function HighScoreBoard(props) {
    const highScore = (props) => {
        const { highScore } = props;
        if (highScore.length > 0) {
            return (
                highScore
                    .sort((a, b) => (a.score < b.score) ? 1 : -1)
                    .map((score, index) => {
                    return (
                        <div className='high-score' key={score.id}>
                            <h5 className='score'>High Score {index + 1}: <span className="userScore">{score.score}</span> by <span className={`userName ${score.id}`}>{score.name}</span></h5>
                        </div>
                    )
                })
            )
        } else {
            return (<p > No Highscore Found </p>)
        }

    }
    return (<>
        {highScore(props)}
    </>)
}