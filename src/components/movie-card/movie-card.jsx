import React, {PureComponent} from 'react';
import {shape, string, func} from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.movie = this.props.movie;

    this.state = {
      activeMovieId: null
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  handleCardMouseEnter() {
    this.props.onCardMouseEnter(this.movie);
    this.setState({activeMovieId: this.movie.id});
  }

  handleCardMouseLeave() {
    this.props.onCardMouseEnter(this.movie);
    this.setState({activeMovieId: null});
  }

  handleMovieClick(evt) {
    evt.preventDefault();
    this.props.onMovieClick(this.movie);
  }

  render() {
    const {id, title, picture, preview} = this.movie;

    const isPlaying = this.state.activeMovieId === id;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleCardMouseEnter}
        onMouseLeave={this.handleCardMouseLeave}
      >
        <a className="small-movie-card__image" href="#" onClick={this.handleMovieClick}>
          {isPlaying
            ? (
              <VideoPlayer
                preview={preview}
                isPlaying={isPlaying}
              />
            ) : (
              <img
                className="small-movie-card__image"
                src={picture}
                alt={`Poster for: ${title}`}
                width="280"
                height="175"
              />
            )
          }
        </a>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" onClick={this.handleMovieClick}>
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

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
