import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { PromoFilmInfo } from './const/const';

ReactDOM.render(
  <React.StrictMode>
    <App {...PromoFilmInfo}/>
  </React.StrictMode>,
  document.getElementById('root'));
