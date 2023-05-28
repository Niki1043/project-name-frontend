import "./Main.css";
import { useEffect, useState } from "react";
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
  // const CLIENT_ID = "ebaf5ea92e1a4c00a49e87c04ca73fec";
  // const REDIRECT_URI = "http://localhost:3000";
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  // const RESPONSE_TYPE = "token";
  // const CLIENT_SECRET = "d7e580a325264357801e8dee5b95e766";
  // const SCOPE =
  //   "user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read";

  // async function fetchWebApi(endpoint, method, body) {
  //   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method,
  //     body: JSON.stringify(body),
  //   });
  //   return res;
  // }

  // async function getTopTracks() {
  //   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  //   return (
  //     await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  //   ).items;
  // }

  // const topTracks = getTopTracks();

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
