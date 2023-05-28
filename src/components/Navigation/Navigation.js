import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
//needs logged in set and not logged in set
//not logged in => shuffles to login button on Main and about me
// logged in => buttons are Top Tracks and Recommended Tracks
const Navigation = ({ token, username }) => {
  return (
    <div className="navbar">
      {!token ? (
        <></>
      ) : (
        <div>
          <p className="navbar__text">{username}</p>
          <Link className="header__userinfo-link" to="/profile">
            <button type="button" className="navbar__button">
              Top 10 Played
            </button>
          </Link>
          <button type="button" className="navbar__button">
            Top 10 Recommended
          </button>
        </div>
      )}
    </div>

    // <div className="navbar">
    //   <button type="button" className="navbar__button">
    //     Login/Username Top x played (of your playlist)
    //   </button>
    //   <button type="button" className="navbar__button">
    //     About/ Username Top x recs (from your top played)
    //   </button>
    // </div>
  );
};

export default Navigation;
