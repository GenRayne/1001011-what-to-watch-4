import React from 'react';
import {shallow} from 'enzyme';
import MovieCard from './movie-card.jsx';

const someMovie = {
  id: `0`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
};

describe(`MovieCard title click`, () => {
  it(`presses card title`, () => {
    const handleTitleClick = jest.fn();

    const movieCard = shallow(
        <MovieCard key={someMovie.id} movie={someMovie} onTitleClick={handleTitleClick} />
    );

    const movieCardTitle = movieCard.find(`a.small-movie-card__link`);
    movieCardTitle.simulate(`click`);

    expect(handleTitleClick).toHaveBeenCalledTimes(1);
  });
});
