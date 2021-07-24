import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyles';
import Footer from 'components/Common/Footer';

interface TemplateProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
