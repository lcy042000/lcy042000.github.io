import styled from "styled-components";
import React from "react";
import { styles } from "../../theme";
import { AnimatedLink } from "../Links";
import useCategoryList from "../../config/useCategoryList";

const DropdownContainer = styled.div`
  position: relative;
`;

const MenuItem = styled(AnimatedLink)`
  list-style: none;
  padding: 0.125rem 0;
  display: block;
  text-decoration: none;
  font-size: 0.75em;
  width: fit-content;
  color: var(--color-text);
  &:hover {
    color: var(--color-primary);
  }
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

const DropdownMenu = (): JSX.Element => {
  const categoryList = useCategoryList();

  return (
    <DropdownContainer>
      <MenuLabel>
        POSTS
        <MenuList>
          <li style={{ listStyle: "none" }}>
            <MenuItem to="/">ALL</MenuItem>
          </li>
          {categoryList?.map((category) => (
            <li style={{ listStyle: "none" }}>
              <MenuItem to={`${category}`}>{category.split("/")[2]}</MenuItem>
            </li>
          ))}
        </MenuList>
      </MenuLabel>
    </DropdownContainer>
  );
};

export default DropdownMenu;
