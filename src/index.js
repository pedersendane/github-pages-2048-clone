import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { GetScores } from './Scores'
ReactDOM.render(
  <React.StrictMode>
    <GetScores />
  </React.StrictMode>, document.getElementById('highscoreDiv'));
ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('boardDiv')
);

//run 'yarn run deploy' to deploy changes to website
/*body:
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
font-family: "Clear Sans", sans-serif;
font-size: 21px;
background: #bdc3c7;
background: linear-gradient(to top, #2c3e50, #bdc3c7);
position: relative;
overflow-x: hidden;
*/

