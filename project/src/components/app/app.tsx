import Main from '../main/main';

type AppProps = { promoFilmName: string; promoFilmDate: number; promoFilmGenre: string; };

function App({promoFilmName,promoFilmDate,promoFilmGenre}:AppProps): JSX.Element {
  return (
    <Main promoFilmName={promoFilmName} promoFilmDate={promoFilmDate} promoFilmGenre={promoFilmGenre}/>
  );
}

export default App;
