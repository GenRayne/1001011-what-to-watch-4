import React, {PureComponent} from 'react';
import {shape, string, func, bool} from 'prop-types';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.movie = this.props.movie;

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  handleCardMouseEnter() {
    this.props.onCardMouseEnter(this.movie);
  }

  handleCardMouseLeave() {
    this.props.onCardMouseLeave();
  }

  handleMovieClick(evt) {
    evt.preventDefault();
    this.props.onMovieClick(this.movie);
  }

  render() {
    const {id, title, picture, preview} = this.movie;

    // У меня тут было условие отображения плеера либо картинки по isPlaying,
    // но теперь не очень понятно, как это сделать, т.к. оно теперь вычисляется в хоке
    // const isPlaying = this.state.activeMovieId === id;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleCardMouseEnter}
        onMouseLeave={this.handleCardMouseLeave}
      >
        <a className="small-movie-card__image" href="#" onClick={this.handleMovieClick}>
          {this.props.isPlaying
            ? (
              this.props.renderPlayer(id, preview)
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
  }).isRequired,
  isPlaying: bool.isRequired,
  onMovieClick: func.isRequired,
  onCardMouseEnter: func.isRequired,
  onCardMouseLeave: func.isRequired,
  renderPlayer: func.isRequired,
};

export default MovieCard;
