import React from 'react';
import {shape, string, func} from 'prop-types';

const MovieCard = ({movie, onMovieClick, onCardMouseEnter, onCardMouseLeave}) => {
  const {title, picture} = movie;

  const handleCardHover = () => {
    onCardMouseEnter(movie);
  };

  const handleMovieClick = (evt) => {
    evt.preventDefault();
    onMovieClick(movie);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleCardHover}
      onMouseLeave={onCardMouseLeave}
    >
      <a href="#" onClick={handleMovieClick}>
        <div className="small-movie-card__image">
          <img src={picture} alt={`Poster for: ${title}`} width="280" height="175" />
        </div>
      </a>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={handleMovieClick}>
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: shape({
    id: string.isRequired,
    title: string.isRequired,
    picture: string.isRequired,
  }),
  onMovieClick: func.isRequired,
  onCardMouseEnter: func.isRequired,
  onCardMouseLeave: func.isRequired,
};

export default MovieCard;
