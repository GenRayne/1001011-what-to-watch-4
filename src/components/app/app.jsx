import React from 'react';
import Main from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({title, genre, releaseYear}) => (
  <Main
    title={title}
    genre={genre}
    releaseYear={releaseYear}
  />
);

export default App;
