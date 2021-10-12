import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MoviePageReviews from '../movie-page/movie-page-reviews';
import MyList from '../my-list/my-listx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import ErrorNotFound from '../error-not-found/error-not-found';
import Player from '../player/player';
import { AppProps } from '../../types/types';
import PrivateRoute from '../routing/private-route';
import { AuthorizationStatus } from '../../const/const';

function App(promoFilmInfo:AppProps): JSX.Element {
  return (

    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main {...promoFilmInfo}/>
        </Route>
        <Route path='/login' exact>
          <SignIn/>
        </Route>
        <PrivateRoute exact path='/mylist' render={()=><MyList/>} authorizationStatus={AuthorizationStatus.Auth}>
        </PrivateRoute>
        <Route path='/films/:id' exact>
          <MoviePage/>
        </Route>
        <Route path ='/films/:id/review' exact>
          <MoviePageReviews/>
        </Route>
        <Route path='/player/:id' exact>
          <Player/>
        </Route>
        <Route>
          <ErrorNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
