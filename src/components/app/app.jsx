import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';

const App = ({headerMovie, movies}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          headerMovie={headerMovie}
          movies={movies}
        />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  headerMovie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    releaseYear: number.isRequired,
  }),
  movies: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        picture: string.isRequired,
      })
  ),
};

export default App;
