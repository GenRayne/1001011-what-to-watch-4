import React from 'react';
import {shape, string} from 'prop-types';

const MovieCard = (movie) => {
  const {title} = movie;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: shape({
    id: string.isRequired,
    title: string.isRequired,
  })
};

export default MovieCard;
