import React, { Fragment, FunctionComponent } from 'react';
import Text from 'components/Text';
import { Link } from 'gatsby';

const IndexPage: FunctionComponent = () => {
  return (
    <Fragment>
      <Text text="HOME" />
      <Link to="/info/">To Info</Link>
    </Fragment>
  );
};

export default IndexPage;
