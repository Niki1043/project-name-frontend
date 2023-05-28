//Header Component
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../images/Spotify-Icon-Logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ token, username }) => {
  return (
    <header className="header">
      <Link className="header__userinfo-link" to="/">
        <div className="header__info-container">
          <img className="header__logo" src={headerLogo} alt="logo" />
          <h1 className="header__text">Remix your mix</h1>
        </div>
      </Link>
      <Navigation token={token} username={username} />
    </header>
  );
};

export default Header;
