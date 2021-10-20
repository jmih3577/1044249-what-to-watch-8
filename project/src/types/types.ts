import { RouteProps } from 'react-router-dom';

export type AppProps = { promoFilmName: string; promoFilmDate: number; promoFilmGenre: string; };
export type PrivateRouteProps = RouteProps & {
    render:() => JSX.Element;
    authorizationStatus: boolean;
};

export type AppScreenProps = {
  promoFilm: AppProps;
  films: Films;
}

export type Review = {
  name?: string;
  text?: string;
  date?: string;
  rate?: number;
}

export type Film = {
  name: string;
  genre?: string;
  year?: number;
  id?: string;
  video?: string;
  poster?: string;
  reviews?: Reviews;
}
export type Films = Film[];

export type Reviews = Review[];

export type ListOfFilmsType = {
  films: Films;
}
