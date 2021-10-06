type SmallFilmCardProps = {
    filmName: string;
};

function SmallFilmCard({ filmName }: SmallFilmCardProps): JSX.Element {
  const imageName: string = 'img/' + filmName.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '') + '.jpg';
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imageName} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmName}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
