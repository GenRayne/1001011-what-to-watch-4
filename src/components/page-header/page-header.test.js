import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header.jsx';

describe(`render PageHeader`, () => {
  it(`renders PageHeader`, () => {
    const tree = renderer
      .create(
          <PageHeader />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
