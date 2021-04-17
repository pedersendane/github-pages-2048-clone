import React from 'react';
export default function HighScoreBoard(props) {
    const highScore = (props) => {
        const { highScore } = props;
        if (highScore.length > 0) {
            return (
                highScore.map((score) => {
                    return (
                        <div className='high-score' key={score.id}>
                            <h3 className='score'>High Score: <span id='high-score'>{score.score}</span></h3>
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