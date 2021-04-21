import React from 'react';
import AboutSection from './About';
function formatDate(props) {
    var date = new Date(props)
    var formatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    var dateString = date.toLocaleDateString('en-US', formatOptions);
    // => "02/17/2017, 11:32 PM"

    dateString = dateString.replace(',', '')
        .replace('PM', 'p.m.')
        .replace('AM', 'a.m.');
    // => "02/17/2017 11:32 p.m."
    console.log(dateString);
    return dateString;
}

export default function HighScoreBoard(props) {
    const highScore = (props) => {
            const {
                highScore
            } = props;
            if (highScore.length > 0) {
                return (

                    highScore
                    .sort((a, b) => (parseInt(a.score) < parseInt(b.score)) ? 1 : -1)
                    .slice(0, 20)
                    .map((score, index) => {
                        /*return (
                            <div className = 'high-score' key = {score.id} >
                                <h5>High Score {index + 1}:&nbsp;
                                <span className="userScore" >{score.score}</span>&nbsp;
                                by <span className={`userName ${score.id}`}>{score.name}</span >
                                </h5>
                            </div>

                        )
                        */
                        return (<div className='high-score' key={score.id} >
                            <span className={`userName ${score.id}`}>{score.name}</span >:&nbsp;
                            <span className="userScore" ><strong>{score.score}</strong></span>&nbsp;
                            points&nbsp;on&nbsp;<span>{formatDate(score.createdAt)}</span>
                        </div>)
                    })

                )
            } else {
                return ( <p> No Highscores Found </p>)
                }

            }
            return ( <>
                <details id='highscoreDetails' onToggle={(e) => {
                    if (e.target.attributes.open) {
                        e.target.scrollIntoView();
                    } else {
                        document.getElementById('boardDiv').scrollIntoView();
                    }
                }}>
                    <summary > High Scores </summary>
                    <main>
                        {highScore(props)} 
                    </main>
                </details>
                <AboutSection/>

                </>)
            }