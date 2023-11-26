import * as React from "react";
import { Helmet } from "react-helmet";

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";
import * as S from "../components/AuthorSegment/styles";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  if (!config.user) return <>no user</>;

  // const authorFullName = `${config.user.firstName} ${config.user.lastName}`;

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
      </div>
      <S.Wrapper aria-label="About the author">준비중입니다.</S.Wrapper>
    </Layout>
  );
};

export default AboutPage;
