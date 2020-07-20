import {getRatingLevel} from './utils.js';
import {RatingLevel} from './const.js';

describe(`getRatingLevel`, () => {
  it(`gets Bad for 0`, () => {
    expect(getRatingLevel(0)).toEqual(RatingLevel.BAD);
  });

  it(`gets Normal for 3`, () => {
    expect(getRatingLevel(3)).toEqual(RatingLevel.NORMAL);
  });

  it(`gets Good for 5`, () => {
    expect(getRatingLevel(5)).toEqual(RatingLevel.GOOD);
  });

  it(`gets Very Good for 8`, () => {
    expect(getRatingLevel(8)).toEqual(RatingLevel.VERY_GOOD);
  });

  it(`gets Awesome for 10 or another value`, () => {
    expect(getRatingLevel(10)).toEqual(RatingLevel.AWESOME);
    expect(getRatingLevel(999)).toEqual(RatingLevel.AWESOME);
    expect(getRatingLevel(undefined)).toEqual(RatingLevel.AWESOME);
  });
});
