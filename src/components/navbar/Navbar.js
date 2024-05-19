import React from "react";
import {
  LeftSideWrapper,
  LogoImg,
  LogoWrapper,
  NavbarContainer,
  NavbarWrapper,
  RightSideWrapper,
  SearchBox,
} from "./Navbar.style";

const logo = require("../../assets/logo/logo-small.png");

const Navbar = () => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Perform search action here
      console.log("Search:", event.target.value);
    }
  };

  return (
    <NavbarContainer>
      <RightSideWrapper>
        <ul>
          <li>
            <a href="/adopt">Adopt</a>
          </li>
          <li>
            <a href="/donation">Donation</a>
          </li>
          <li>
            <a href="/article">Article</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </RightSideWrapper>
      <LogoWrapper>
        <LogoImg href="/">
          <img src={logo} />
        </LogoImg>
      </LogoWrapper>
      <LeftSideWrapper>
        <SearchBox
          placeholder="Search"
          type="text"
          onKeyPress={handleKeyPress}
        />
        {localStorage.getItem("token") ? (
          <a href="/profile">Profile</a>
        ) : (
          <a href="/login">Login</a>
        )}
      </LeftSideWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
