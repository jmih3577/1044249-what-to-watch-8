import SmallFilmCard from '../small-film-card/small-film-card';
import PromoFilm from '../promo-film/promo-film';
import VisuallyHidden from '../static-blocks/visually-hidden';
import Footer from '../static-blocks/footer';
import { AppProps } from '../../types/types';

function Main(promoFilmInfo:AppProps): JSX.Element {
  //let filmNameList: string[] = ['Fantastic Beasts: The Crimes of Grindelwald', 'Bohemian Rhapsody', 'Macbeth', 'Aviator', 'We need to talk about Kevin', 'What We Do in the Shadows', 'Revenant', 'Johnny English', 'Shutter Island', 'Pulp Fiction', 'No Country for Old Men', 'Snatch', 'Moonrise Kingdom', 'Seven Years in Tibet', 'Midnight Special', 'War of the Worlds', 'Dardjeeling Limited', 'Orlando', 'Mindhunter', 'Midnight Special'];
  return (
    <>
      <VisuallyHidden/>
      <PromoFilm {...promoFilmInfo} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard filmName={'Fantastic Beasts: The Crimes of Grindelwald'} />
            <SmallFilmCard filmName={'Bohemian Rhapsody'} />
            <SmallFilmCard filmName={'Macbeth'} />
            <SmallFilmCard filmName={'Aviator'} />
            <SmallFilmCard filmName={'We need to talk about Kevin'} />
            <SmallFilmCard filmName={'What We Do in the Shadows'} />
            <SmallFilmCard filmName={'Revenant'} />
            <SmallFilmCard filmName={'Johnny English'} />
            <SmallFilmCard filmName={'Shutter Island'} />
            <SmallFilmCard filmName={'Pulp Fiction'} />
            <SmallFilmCard filmName={'No Country for Old Men'} />
            <SmallFilmCard filmName={'Snatch'} />
            <SmallFilmCard filmName={'Moonrise Kingdom'} />
            <SmallFilmCard filmName={'Seven Years in Tibet'} />
            <SmallFilmCard filmName={'Midnight Special'} />
            <SmallFilmCard filmName={'War of the Worlds'} />
            <SmallFilmCard filmName={'Dardjeeling Limited'} />
            <SmallFilmCard filmName={'Orlando'} />
            <SmallFilmCard filmName={'Mindhunter'} />
            <SmallFilmCard filmName={'Midnight Special'} />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Main;
