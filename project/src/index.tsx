import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App promoFilmName={'The Grand Budapest Hotel'} promoFilmDate={2014} promoFilmGenre={'Drama'}/>
  </React.StrictMode>,
  document.getElementById('root'));
