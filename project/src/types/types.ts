import { RouteProps } from 'react-router-dom';

export type AppProps = { promoFilmName: string; promoFilmDate: number; promoFilmGenre: string; };
export type PrivateRouteProps = RouteProps & {
    render:() => JSX.Element;
    authorizationStatus: boolean;
};
