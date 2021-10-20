import SmallFilmCard from '../small-film-card/small-film-card';
import {ListOfFilmsType} from '../../types/types';


function ListOfFilms({films}: ListOfFilmsType): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film, id) => {
        const keyValue = `${id}-${film.id}`;
        return (
          <SmallFilmCard key={keyValue} film={film}/>
        );
      })}
    </div>
  );
}

export default ListOfFilms;
