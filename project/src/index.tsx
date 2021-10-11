import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilmInfo = { promoFilmName: 'The Grand Budapest Hotel', promoFilmDate: 2014, promoFilmGenre: 'Drama' };

ReactDOM.render(
  <React.StrictMode>
    <App {...promoFilmInfo}/>
  </React.StrictMode>,
  document.getElementById('root'));
