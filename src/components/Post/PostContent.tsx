import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  //Renderer style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
`;

//dangerouslySetInnerHTML = innrHtml을 React에 맞게 사용하는 방법이고 스크립팅 공격이 노출이 있어서 이런 이름으로 지었음.
const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
