import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'gatsby';

const IndexPage: FunctionComponent = () => {
  return (
    <Fragment>
      <Link to="/info/">To Info</Link>
    </Fragment>
  );
};

export default IndexPage;
