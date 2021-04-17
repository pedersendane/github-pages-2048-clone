import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import HighScoreBoard from './HighScoreBoard'

export function GetScores() {

    const [highScore, highScores] = useState('');

    const url = 'http://localhost:8000/high-score';

    useEffect(() => {
        getHighScores();
    }, []);

    const getHighScores = () => {
        axios.get(url)
            .then((response) => {
                const allScores = response.data;
                highScores(allScores)
            })
            .catch(error => console.error(error));
    }
    return ( < HighScoreBoard highScore={highScore}/>)
}

export function PostHighScore(score) {
    const options = {
        method: 'post',
        url: 'http://localhost:8000/new-high-score',
        params: {
          score: parseInt(score),
        }
      };
    axios(options)
        .then((result) => {
            console.log(result);
            return true;
        }).catch((error) => {
            console.log(error)
        })
}