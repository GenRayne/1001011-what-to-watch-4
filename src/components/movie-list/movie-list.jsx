import React, {PureComponent} from 'react';
import {shape, string, arrayOf, func} from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withVideoPlayer from '../../hocks/with-video-player.jsx';

class MovieList extends PureComponent {
  constructor() {
    super();

    this.state = {
      activeCardId: null
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  handleCardMouseEnter(movieData) {
    this.setState({activeCardId: movieData.id});
  }

  handleCardMouseLeave() {
    this.setState({activeCardId: null});
  }

  render() {
    const {movies, onMovieClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          const MovieCardWrapped = withVideoPlayer(MovieCard);
          return (
            <MovieCardWrapped
              key={movie.id}
              movie={movie}
              isPlaying={this.state.activeCardId === movie.id}
              onMovieClick={onMovieClick}
              onCardMouseEnter={this.handleCardMouseEnter}
              onCardMouseLeave={this.handleCardMouseLeave}
            />);
        })}
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
