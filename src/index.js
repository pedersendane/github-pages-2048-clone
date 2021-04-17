import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { GetScores } from './Scores'
ReactDOM.render(
  <React.StrictMode>
    <GetScores/>
    <App />
  </React.StrictMode>,
  document.getElementById('boardDiv')
);


