import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePageReviews from '../movie-page/movie-page-reviews';
import MyList from '../my-list/my-listx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import ErrorNotFound from '../error-not-found/error-not-found';
import Player from '../player/player';
import {AppScreenProps} from '../../types/types';
import PrivateRoute from '../routing/private-route';
import {AuthorizationStatus} from '../../const/const';
import AddReview from '../add-review/add-review';


function App({promoFilm, films}: AppScreenProps): JSX.Element {

  return (

    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main promoFilm={promoFilm} films={films}/>
        </Route>
        <Route path='/login' exact>
          <SignIn/>
        </Route>
        <PrivateRoute exact path='/mylist' render={() => <MyList films={films}/>} authorizationStatus={AuthorizationStatus.Auth}>
        </PrivateRoute>
        <Route path='/films/:id' exact>
          <MoviePage/>
        </Route>
        <Route path='/films/:id/review' exact>
          <MoviePageReviews/>
        </Route>
        <Route path='/player/:id' exact>
          <Player/>
        </Route>
        <Route path='/films/:id/review/add-review' exact>
          <AddReview/>
        </Route>
        <Route>
          <ErrorNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
