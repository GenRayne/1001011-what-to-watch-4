import {RatingLevel} from './const.js';

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return RatingLevel.BAD;
  }
  if (rating >= 3 && rating < 5) {
    return RatingLevel.NORMAL;
  }
  if (rating >= 5 && rating < 8) {
    return RatingLevel.GOOD;
  }
  if (rating >= 8 && rating < 10) {
    return RatingLevel.VERY_GOOD;
  }
  if (rating === 10) {
    return RatingLevel.AWESOME;
  }
  return undefined;
};
