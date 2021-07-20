import React, { Fragment, FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import Text from 'components/Text';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) => {
  return (
    <Fragment>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
      <Link to="/">To Home</Link>
    </Fragment>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
