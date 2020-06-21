import React from 'react';
import renderer from 'react-test-renderer';
import IconsSprite from './icons-sprite.jsx';

describe(`render IconsSprite`, () => {
  it(`renders IconsSprite`, () => {
    const tree = renderer
      .create(
          <IconsSprite />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
