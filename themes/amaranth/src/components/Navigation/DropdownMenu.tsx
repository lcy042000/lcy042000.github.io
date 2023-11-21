import styled from "styled-components";
import React from "react";
import { styles } from "../../theme";
import { AnimatedLink } from "../Links";

const DropdownContainer = styled.div`
  position: relative;
`;

const MenuItem = styled(AnimatedLink)`
  text-decoration: none;
  font-size: 0.75em;
  color: var(--color-text);
  &:hover {
    color: var(--color-primary);
  }
`;

const MenuListItem = styled.li`
  list-style: none;
  padding: 0.25rem 0;
`;

const MenuList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.75rem;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 99;
  &:hover {
    opacity: 1;
    visibility: visible;
  }
`;

const MenuLabel = styled.span`
  ${styles.ButtonLabel}
  width: 100%;
  color: var(--color-text);
  &:hover {
    color: var(--color-primary);

    & > ul {
      opacity: 1;
      visibility: visible;
    }
  }
  font-size: 1.5rem;

  display: grid;
  grid-auto-flow: column;
  grid-gap: 16rem;
  align-items: center;
`;

const DropdownMenu = (): JSX.Element => (
  <DropdownContainer>
    <MenuLabel>
      POSTS
      <MenuList>
        <MenuListItem>
          <MenuItem to="/">ALL</MenuItem>
        </MenuListItem>
        <MenuListItem>
          <MenuItem to="/category/tech">Projects</MenuItem>
        </MenuListItem>
        <MenuListItem>
          <MenuItem to="/category">Contact</MenuItem>
        </MenuListItem>
      </MenuList>
    </MenuLabel>
  </DropdownContainer>
);

export default DropdownMenu;
