import React, {PureComponent} from 'react';
import {func, shape, string} from 'prop-types';
import VideoPlayer from '../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.movie = this.props.movie;

      this.state = {
        activePlayerId: null
      };

      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    handleCardMouseEnter() {
      this.props.onCardMouseEnter(this.movie);
      this.setState({activeMovieId: this.movie.id});
    }

    handleCardMouseLeave() {
      this.props.onCardMouseLeave();
      this.setState({activeMovieId: null});
    }

    render() {
      const {activePlayerId} = this.state;

      return (
        <Component
          {...this.props}
          onCardMouseEnter={this.handleCardMouseEnter}
          onCardMouseLeave={this.handleCardMouseLeave}
          isPlaying={Boolean(this.isPlaying)}
          renderPlayer={
            (id, preview) => {
              this.isPlaying = activePlayerId === id;

              return (
                <VideoPlayer
                  preview={preview}
                  isPlaying={activePlayerId === id}
                />
              );
            }
          }
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {
    movie: shape({
      id: string.isRequired,
    }),
    onCardMouseEnter: func.isRequired,
    onCardMouseLeave: func.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
