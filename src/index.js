import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="FrontPage container">
      <App />
      <div className="container">
        <p>
          <a href="https://github.com/duygugurbuzyildiz/weather-project-react" target="_blank" rel="noreferrer">
            Open-source code
          </a>
          , by Duygu Gurbuz Yildiz from 
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer"> SheCodes
          </a>.
        </p>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

