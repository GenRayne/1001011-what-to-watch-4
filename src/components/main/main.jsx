import React, {PureComponent} from 'react';
import {arrayOf, shape, string, number, func} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import IconsSprite from '../icons-sprite/icons-sprite.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageHeader from '../page-header/page-header.jsx';

class Main extends PureComponent {
  render() {
    const {headerMovie, movies, onMovieClick} = this.props;
    const {title, genre, year} = headerMovie;

    return (
      <>
        <div className="visually-hidden">
          <IconsSprite />
        </div>

        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <PageHeader />

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageContent>
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              <li className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">All genres</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Comedies</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Crime</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Documentary</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Dramas</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Horror</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Kids & Family</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Romance</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Sci-Fi</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Thrillers</a>
              </li>
            </ul>

            <MovieList
              movies={movies}
              onMovieClick={onMovieClick}
            />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>
        </PageContent>
      </>
    );
  }
}

Main.propTypes = {
  headerMovie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
  }),
  movies: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        picture: string.isRequired,
      })
  ),
  onMovieClick: func.isRequired,
};

export default Main;
