import React from "react";
import styled from "styled-components";

import { MailSend } from "@styled-icons/boxicons-regular";
import { Github } from "@styled-icons/boxicons-logos";
import { StyledIcon } from "@styled-icons/styled-icon";

import { Types, useConfig } from "gatsby-theme-advanced";

import { IconLink } from "../Links";

type SiteConfig = Types.SiteConfig;

const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
`;

// Utilities
const renderLink = (
  url: string,
  label: string,
  Icon: StyledIcon
): JSX.Element => (
  <IconLink to={url} ariaLabel={label}>
    <Icon size={48} />
  </IconLink>
);

const renderGitHubLink = (config: Readonly<SiteConfig>): JSX.Element | null => {
  const userName = config.user?.github;

  if (!userName) return null;

  const url = `https://github.com/${userName}`;
  return renderLink(url, "GitHub Profile", Github);
};

const renderEmailLink = (config: Readonly<SiteConfig>): JSX.Element => {
  const url = `mailto:${config.user?.email || ""}`;
  return renderLink(url, "E-Mail", MailSend);
};

type IconLinksProps = {
  className?: string;
};

const UserLinks = ({ className }: IconLinksProps): JSX.Element | null => {
  const config = useConfig();

  if (!config.user) return null;

  return (
    <LinkGrid className={className}>
      {renderGitHubLink(config)}
      {renderEmailLink(config)}
    </LinkGrid>
  );
};

export default UserLinks;
