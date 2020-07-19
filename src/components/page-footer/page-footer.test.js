import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from './page-footer.jsx';

describe(`render PageFooter`, () => {
  it(`renders PageFooter`, () => {
    const tree = renderer
      .create(
          <PageFooter />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
