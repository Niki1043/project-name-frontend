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
  CODE,
  token,
  logout,
  username,
}) {
  return (
    <>
      <Header token={token} username={username} />
      <main className="main">
        <img className="main__logo" src={headerLogo} alt="logo" />
        <img className="main__logo" src={turnTable} alt="turntable" />
        <section className="main__login">
          {!token ? (
            <a
              className="main__login-button"
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&code=${CODE}`}
            >
              Login to Spotify
            </a>
          ) : (
            <button onClick={logout}>Logout</button>
          )}

          <p className="main__login-text">
            Login to Spotify to see your Top Played Songs and get
            Recommnedations based on your Top Played Songs
          </p>
        </section>
      </main>
      <About />
    </>
  );
}

export default Main;
