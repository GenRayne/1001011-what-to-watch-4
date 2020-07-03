import React from 'react';
import {shallow} from 'enzyme';
import MovieCard from './movie-card.jsx';
import {someMovie} from '../../mocks/movies-test.js';

const randomHandler = () => {};

describe(`MovieCard title click`, () => {
  it(`presses card title`, () => {
    const handleTitleClick = jest.fn();

    const movieCard = shallow(
        <MovieCard
          key={someMovie.id}
          movie={someMovie}
          onTitleClick={handleTitleClick}
          onCardMouseEnter={randomHandler}
          onCardMouseLeave={randomHandler}
        />
    );

    const movieCardTitle = movieCard.find(`a.small-movie-card__link`);
    movieCardTitle.simulate(`click`);

    expect(handleTitleClick).toHaveBeenCalledTimes(1);
  });

  it(`checks if the onMouseEnter handler gets the movie data`, () => {
    const handleCardMouseEnter = jest.fn();

    const movieCard = shallow(
        <MovieCard
          key={someMovie.id}
          movie={someMovie}
          onTitleClick={randomHandler}
          onCardMouseEnter={handleCardMouseEnter}
          onCardMouseLeave={randomHandler}
        />
    );

    movieCard.simulate(`mouseEnter`);

    expect(handleCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleCardMouseEnter).toHaveBeenCalledWith(someMovie);
  });
});
