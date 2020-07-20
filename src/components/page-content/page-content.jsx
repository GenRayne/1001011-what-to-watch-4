import React from 'react';
import {node} from 'prop-types';
import PageFooter from '../page-footer/page-footer.jsx';

const PageContent = ({children}) => {
  return (
    <div className="page-content">
      {children}

      <PageFooter />
    </div>
  );
};

PageContent.propTypes = {
  children: node.isRequired,
};

export default PageContent;
