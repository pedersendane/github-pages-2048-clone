import React, {
    useState,
    useEffect
} from 'react'

import axios from 'axios';
import HighScoreBoard from './HighScoreBoard'

export function GetScores() {

    const [highScore, highScores] = useState('');

    const options = {
        method: 'get',
        //url: 'http://localhost:8000/scores',
        url: 'https://highscore-api.herokuapp.com/scores',
    }
    
    useEffect(() => {
        getHighScores();
    }, []);

    const getHighScores = () => {
        axios(options)
            .then((response) => {
                console.log(response);
                const allScores = response.data;
                highScores(allScores)
            })
            .catch(error => console.error(error));
    }
    return ( < HighScoreBoard highScore={highScore}/>)
}


