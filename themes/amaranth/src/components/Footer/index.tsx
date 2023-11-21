import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";
import { Caption, H3 } from "../../theme";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <H3>LINKS</H3>
        <UserLinks />
      </S.LinkGrid>
      <S.Info>
        <Caption>{config.website.copyright}</Caption>
        <Caption>made by React.js & gatsby</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
