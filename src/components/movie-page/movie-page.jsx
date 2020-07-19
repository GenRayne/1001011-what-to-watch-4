import React from 'react';
import IconsSprite from '../icons-sprite/icons-sprite.jsx';
import {shape, string, number, array, func} from 'prop-types';
import {getRatingLevel} from '../../utils.js';
import MovieList from '../movie-list/movie-list.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageHeader from '../page-header/page-header.jsx';
import {movies} from '../../mocks/movies.js';

const MOVIES = movies.slice(0, 4);

const MoviePage = ({movie, onMovieClick}) => {
  const {title, genre, year, picture, poster, rating, ratingsNumber, director, actors, description} = movie;

  let ratingLevel = getRatingLevel(rating);

  return (
    <>
      <div className="visually-hidden">
        <IconsSprite />
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={picture} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`Poster for ${title}`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{ratingLevel}</span>
                  <span className="movie-rating__count">{ratingsNumber} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {actors}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={MOVIES} onMovieClick={onMovieClick} />
        </section>
      </PageContent>
    </>
  );
};

MoviePage.propTypes = {
  movie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
    picture: string.isRequired,
    poster: string.isRequired,
    rating: number.isRequired,
    ratingsNumber: number.isRequired,
    director: string.isRequired,
    actors: array.isRequired,
    description: string.isRequired,
  }).isRequired,
  onMovieClick: func.isRequired,
};

export default MoviePage;
