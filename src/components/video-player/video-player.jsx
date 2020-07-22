import React, {PureComponent, createRef} from 'react';
import {string, bool} from 'prop-types';

const Video = {
  WIDTH: 280,
  HEIGHT: 175,
  START_TIME: 0,
};

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const video = this.videoRef.current;

    const {preview} = this.props;
    video.src = preview;

    video.oncanplaythrough = () => this.setState({isLoading: false});
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = null;
    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    const {isPlaying} = this.props;

    if (isPlaying) {
      video.currentTime = Video.START_TIME;
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    return (
      <video
        width={Video.WIDTH}
        height={Video.HEIGHT}
        ref={this.videoRef}
        loop
        muted
      />
    );
  }
}

VideoPlayer.propTypes = {
  preview: string.isRequired,
  isPlaying: bool.isRequired,
};

export default VideoPlayer;
