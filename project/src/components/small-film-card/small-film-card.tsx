import {Film} from '../../types/types';
import {Link, useHistory} from 'react-router-dom';
import {useState} from 'react';

type FilmCard = {
  film: Film;
}

function SmallFilmCard({film}:FilmCard): JSX.Element {
  const history = useHistory();
  const filmName = film.name;

  const [isActive, setActive] = useState(false);
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => {setActive(true);}} onMouseLeave={() => {setActive(false);}}>


      <div className="small-film-card__image">
        <img src={film.poster} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" onClick = {()=>history.push(`/films/${film.id}`)} to={`/films/${film.id}`} {...film}>{filmName}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
