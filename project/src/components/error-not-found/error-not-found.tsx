import Footer from '../static-blocks/footer';
import VisuallyHidden from '../static-blocks/visually-hidden';

function ErrorNotFound():JSX.Element {
  return (
    <>
      <VisuallyHidden/>

      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Error</h1>
        </header>

        <div className="sign-in user-page__content">
          <h1 className="page-title user-page__title">404 Page not found</h1>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Домой</button>
          </div>
        </div>


        <Footer/>
      </div>
    </>
  );
}

export default ErrorNotFound;
