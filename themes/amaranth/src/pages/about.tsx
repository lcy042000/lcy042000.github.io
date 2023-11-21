import * as React from "react";
import { Helmet } from "react-helmet";

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";
import * as S from "../components/AuthorSegment/styles";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  if (!config.user) return <>no user</>;

  const authorFullName = `${config.user.firstName} ${config.user.lastName}`;

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
      </div>
      <S.Wrapper aria-label="About the author">
        <S.Main>
          <S.Avatar src={config.user.avatar} alt={authorFullName} />
          <S.Info>
            <S.AuthorName>{authorFullName}</S.AuthorName>
            <S.AboutText>
              <p>{config.user.about}</p>
            </S.AboutText>
          </S.Info>
        </S.Main>
        <S.Separator />
      </S.Wrapper>
    </Layout>
  );
};

export default AboutPage;
