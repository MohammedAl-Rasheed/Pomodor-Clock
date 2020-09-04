import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 
  githubURL="https://github.com/MohammedAl-Rasheed/Pomodor-Clock.git" 
  defaultBreakLength='5' 
  defaultSessionLength='25' />, 
  document.getElementById('root')
);

registerServiceWorker();