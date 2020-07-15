import React from 'react';
import renderer from 'react-test-renderer';
import PageContent from './page-content.jsx';

const children = <div />;

describe(`render PageContent`, () => {
  it(`renders PageContent`, () => {
    const tree = renderer
      .create(
          <PageContent>
            {children}
          </PageContent>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
