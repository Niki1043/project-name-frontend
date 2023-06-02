import "./Main.css";
//import { useEffect, useState } from "react";
import Header from "../Header/Header";
//import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import headerLogo from "../../images/Spotify-Icon-Logo.svg";
import turnTable from "../../images/dj.svg";

function Main({
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
  SCOPE,
  token,
  logout,
  username,
  errorState,
}) {
  return (
    <>
      <Header token={token} username={username} />
      <main className="main">
        <div className="main__logo-container">
          <img className="main__logo" src={headerLogo} alt="logo" />
          <img className="main__logo" src={turnTable} alt="turntable" />
        </div>
        <section className="main__login">
          {!token && !errorState ? (
            <a
              className="main__login-button"
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              <button className="main__login-button" type="button">
                Login to Spotify
              </button>
            </a>
          ) : (
            <button
              className="main__login-button"
              type="button"
              onClick={logout}
            >
              Logout
            </button>
          )}
          <p className="main__login-text">
            Login to Spotify to see your Top 10 Played Songs and get
            Recommendations based on your Top Played Songs
          </p>
        </section>
      </main>
      <About />
    </>
  );
}

export default Main;
