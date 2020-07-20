import React, {PureComponent} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor() {
    super();

    this.state = {
      activeCard: null
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  handleCardMouseEnter(movieData) {
    this.setState({activeCard: movieData});
  }

  handleCardMouseLeave() {
    this.setState({activeCard: null});
  }

  render() {
    const {movies, onMovieClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={onMovieClick}
            onCardMouseEnter={this.handleCardMouseEnter}
            onCardMouseLeave={this.handleCardMouseLeave}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        picture: string.isRequired,
      })
  ),
  onMovieClick: func.isRequired
};

export default MovieList;
