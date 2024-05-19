import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-xs) var(--padding-xl);
`;

export const RightSideWrapper = styled.div`
  width: 40%;
  ul {
    display: flex;
    flex-direction: row;
    gap: var(--padding-md);
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
      display: none;
    }

    li {
      font-size: var(--font-size-sm);
      a {
        color: var(--color-black);
        text-decoration: none;

        padding: var(--padding-md) 0 var(--padding-md) 0;
      }
    }
  }
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
`;

export const LogoWrapper = styled.div``;

export const LogoImg = styled.a`
  img {
    width: 50px;
  }
`;

export const SearchBox = styled.input``;
