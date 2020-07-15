import React from 'react';
import {shallow} from 'enzyme';
import MovieCard from './movie-card.jsx';
import {someMovie} from '../../mocks/movies-test.js';

const noopHandler = () => {};

describe(`MovieCard click`, () => {
  it(`presses card title and image`, () => {
    const handleMovieClick = jest.fn();

    const movieCard = shallow(
        <MovieCard
          key={someMovie.id}
          movie={someMovie}
          onMovieClick={handleMovieClick}
          onCardMouseEnter={noopHandler}
          onCardMouseLeave={noopHandler}
        />
    );

    const movieCardTitle = movieCard.find(`a.small-movie-card__link`);
    movieCardTitle.simulate(`click`, {preventDefault: noopHandler});

    expect(handleMovieClick).toHaveBeenCalledTimes(1);

    const alt = `Poster for: ${someMovie.title}`;
    const movieCardImage = movieCard.find(`img[alt="${alt}"]`);
    movieCardImage.simulate(`click`, {preventDefault: noopHandler});

    expect(handleMovieClick).toHaveBeenCalledTimes(1);
  });

  it(`checks if the onMouseEnter handler gets the movie data and the onMouseLeave gets called`, () => {
    const handleCardMouseEnter = jest.fn();
    const handleCardMouseLeave = jest.fn();

    const movieCard = shallow(
        <MovieCard
          key={someMovie.id}
          movie={someMovie}
          onMovieClick={noopHandler}
          onCardMouseEnter={handleCardMouseEnter}
          onCardMouseLeave={handleCardMouseLeave}
        />
    );

    movieCard.simulate(`mouseEnter`);

    expect(handleCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleCardMouseEnter).toHaveBeenCalledWith(someMovie);

    movieCard.simulate(`mouseLeave`);

    expect(handleCardMouseLeave).toHaveBeenCalledTimes(1);
  });
});
