import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {PromoFilmInfo} from './const/const';
import {films} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={PromoFilmInfo} films={films}/>
  </React.StrictMode>,
  document.getElementById('root'));
