import React, {PureComponent} from 'react';
import {arrayOf, shape, string, number, array} from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

const ActiveScreen = {
  MAIN: `main`,
  MOVIE: `movie`
};

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      activeScreen: ActiveScreen.MAIN,
      selectedMovie: null,
    };

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  handleMovieClick(movie) {
    this.setState({
      activeScreen: ActiveScreen.MOVIE,
      selectedMovie: movie,
    });
  }

  renderScreen() {
    const {headerMovie, movies} = this.props;

    switch (this.state.activeScreen) {
      case ActiveScreen.MAIN:
        return (
          <Main
            headerMovie={headerMovie}
            movies={movies}
            onMovieClick={this.handleMovieClick}
          />
        );
      case ActiveScreen.MOVIE:
        return (
          <MoviePage
            movie={this.state.selectedMovie}
            onMovieClick={this.handleMovieClick}
          />
        );
      default:
        return undefined;
    }
  }

  render() {
    const {movies} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderScreen()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage
              movie={movies[0]}
              onMovieClick={this.handleMovieClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  headerMovie: shape({
    id: string.isRequired,
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
  }),
  movies: arrayOf(
      shape({
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
      })
  ),
};

export default App;
