import React from 'react';
import {
    v4 as uuidv4
} from 'uuid';
import axios from 'axios';
import { GetScores } from './Scores';

export default class HighScoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            score: this.props.score
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        const score = this.state.score.toString();
        const userNames = document.getElementsByClassName('userName');
        var names = [];
        var ids = [];
        for (var name in userNames) {
            if (userNames[name].innerHTML) {
                names.push(userNames[name].innerHTML);
                console.log(names);

                var className = userNames[name].className;
                ids.push(className.substring(9, className.length));
                console.log(ids)
            }
        }                       

        if (this.state.value === '') {
            alert("Please enter your name")
        }
        else {
              
            const params = {
                name: this.state.value,
                score: score
              };
              const data = Object.keys(params)
                .map((key) => `${key}=${encodeURIComponent(params[key])}`)
                .join('&');
              
              console.log(data);
              // => format=json&option=value
            var options;
            if (names.includes(this.state.value)) {
                var indexOfName = names.indexOf(this.state.value)
                var id = ids[indexOfName]
                 options = {
                    method: 'put',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    data,
                    url: 'https://highscore-api.herokuapp.com/scores/' + id,
                };
            } else {
                 options = {
                    method: 'POST',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    data,
                    url: 'https://highscore-api.herokuapp.com/scores',
                };
            }
              axios(options)  
                .then((result) => {
            console.log(result);
            alert(this.state.value + ' submitted a high-score of: ' + this.state.score);
            //event.preventDefault();
        }).catch((error) => {
            console.log(error);
            alert("Sorry, it looks like there was an error submitting your score.")
        })

    }
}

    render() {
    return ( <>
        <label > Enter your name to submit your high score:
        <input type = "text"
        value = {
            this.state.value
        }
        onChange = {
            this.handleChange
        }
            /> </label>
        <br />
        <button type = "button"
        className = "tryAgain"
        onClick = {
            this.handleSubmit
        } > Submit </button>
    </>
    );
}
}