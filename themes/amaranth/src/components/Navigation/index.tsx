import React from "react";
import { useConfig } from "gatsby-theme-advanced";

import * as S from "./style";
import DropdownMenu from "./DropdownMenu";
import { LeecyLogo } from "../../icons";

const Navigation = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.HomeButton to="/">
        <LeecyLogo />
        <S.SiteTitle>{config.website.titleShort}</S.SiteTitle>
      </S.HomeButton>
      <S.NavGrid>
        <DropdownMenu />
        <S.NavButton noBasePath to="/about">
          About
        </S.NavButton>
      </S.NavGrid>
    </S.Wrapper>
  );
};

export default Navigation;
