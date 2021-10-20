import Footer from '../static-blocks/footer';
import VisuallyHidden from '../static-blocks/visually-hidden';
import ListOfFilms from '../list-of-films/listOfFilms';
import {Link, useHistory, useParams} from 'react-router-dom';
import {films} from '../../mocks/films';

function MoviePageReviews(): JSX.Element {
  const history = useHistory();
  const {id}: any = useParams();
  const curId = Number(id);
  const curFilm = films[curId-1];
  return (
    <>
      <VisuallyHidden/>

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{curFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{curFilm.genre}</span>
                <span className="film-card__year">{curFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="small-film-card__link" onClick = {()=>history.push(`/films/${curId}/review/add-reviewn`)} to={`/films/${curId}/review/add-review`}> <a href="add-review.html" className="btn film-card__button">Add review</a></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">

                <div className="film-card__reviews-col">
                  {curFilm.reviews?.map((review, id) => {
                    if (id % 2 === 0) {
                      return (
                        <div className="review">
                          <blockquote className="review__quote">
                            <p className="review__text">{review.text}</p>

                            <footer className="review__details">
                              <cite className="review__author">{review.name}</cite>
                              <time className="review__date" dateTime="2016-12-20">{review.date}</time>
                            </footer>
                          </blockquote>

                          <div className="review__rating">{review.rate}</div>
                        </div>
                      );
                    }
                  },
                  )}
                </div>
                <div className="film-card__reviews-col">
                  {curFilm.reviews?.map((review, id) => {
                    if (id % 2 !== 0) {
                      return (
                        <div className="review">
                          <blockquote className="review__quote">
                            <p className="review__text">{review.text}</p>

                            <footer className="review__details">
                              <cite className="review__author">{review.name}</cite>
                              <time className="review__date" dateTime="2016-12-20">{review.date}</time>
                            </footer>
                          </blockquote>

                          <div className="review__rating">{review.rate}</div>
                        </div>
                      );
                    }
                  },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <ListOfFilms films={films}/>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MoviePageReviews;
