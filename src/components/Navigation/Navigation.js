import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
//needs logged in set and not logged in set
//not logged in => shuffles to login button on Main and about me
// logged in => buttons are Top Tracks and Recommended Tracks
// isLoggedIn for token value
const Navigation = ({ token, username, errorState }) => {
  return (
    <div className="navbar">
      {!token || errorState ? (
        <p></p>
      ) : (
        <div className="navbar__container">
          <Link className="navbar__userinfo-link" to="/">
            <button type="button" className="navbar__button">
              {username}
            </button>
          </Link>
          <Link className="navbar__userinfo-link" to="/profile">
            <button type="button" className="navbar__button">
              Top10 Played
            </button>
          </Link>
          <Link className="navbar__userinfo-link" to="/recommended">
            <button type="button" className="navbar__button">
              Top10 Recommended
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
