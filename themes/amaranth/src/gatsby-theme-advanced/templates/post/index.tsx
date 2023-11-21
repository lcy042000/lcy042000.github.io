import React from "react";
import styled from "styled-components";

import { SEO, Types, PostTemplateProps } from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import Article from "../../../components/Article";

const Wrapper = styled.div`
  display: grid;

  grid-gap: 60px;
`;

const PostTemplate = ({ data }: PostTemplateProps): JSX.Element => {
  const post = Types.queryIntoPost(data);

  return (
    <Layout>
      <Wrapper>
        <SEO post={post} />
        <Article post={post} />
      </Wrapper>
    </Layout>
  );
};

export default PostTemplate;
