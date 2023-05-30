import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
// import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
//import About from "../About/About";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  fetchProfile,
  getTopTracks,
  getRecommendations,
} from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SongModal from "../SongModal/SongModal";
import Recommended from "../Recommended/Recommended";

function App() {
  const CLIENT_ID = "ebaf5ea92e1a4c00a49e87c04ca73fec";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read";
  const CODE =
    "AQCnFPGX58SYLuXtwjlIMlPpa3xdOQIsyRbxWjqW69LXHGF4HqRqQhVkRSuCtqxuljSLzws0wHwLhCwlGTKfw6pksvW0HEOECocEQIQZ3c06JWlerCaywbZTJYeBcxYKn5rQWbhYWAwoMlLGFW-dwBHf64kpjG_CphzXMiulTesncjjCdPoP8lGnM-mfrjdFA80uBtA";

  // Set UseState
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedSong, setSelectedSong] = useState({});
  const [songTopTenPlayedCards, setSongTopTenPlayedCards] = useState([]);
  const [songTopTenRecsCards, setSongTopTenRecsCards] = useState([]);
  const [errorState, setErrorState] = useState(false);

  // const throwError = () => {
  //   throw Error("I'm an error");
  // };

  // Set Login/Token UseEffect
  useEffect(() => {
    // get window url
    const hash = window.location.hash;
    // console.log(hash);
    let token = window.localStorage.getItem("token");
    setToken(token);
    // once logged in, gets and sets token from url
    if (!token && hash) {
      let token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  // console.log(errorMessage);

  // Set Handlers
  const handleLogout = () => {
    setToken("");
    window.location.hash = "";
    window.localStorage.removeItem("token");
    window.onload = window.localStorage.clear();
  };

  // const handleCreateModal = () => {
  //   setActiveModal("create");
  // };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedSong = (songcard) => {
    setActiveModal("preview");
    setSelectedSong(songcard);
  };

  /// Get user profile info
  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchProfile(storedToken)
        .then((res) => {
          setUsername(res.display_name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  ///Get User's top 10 most played tracks
  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getTopTracks(storedToken)
        .then((res) => {
          // console.log(res);
          const songs_toptenplayed = res.items.map((item) => {
            return {
              albumImage: item.album.images[1].url,
              artistName: item.artists[0].name,
              trackId: item.id,
              songName: item.name,
            };
          });
          // console.log(songs_toptenplayed);
          setSongTopTenPlayedCards(songs_toptenplayed);
          getRecommendations(songs_toptenplayed[0].trackId, storedToken).then(
            (res) => {
              //console.log(res.tracks);
              const songs_toptenrecs = res.tracks.map((item) => {
                return {
                  albumImage: item.album.images[1].url,
                  artistName: item.artists[0].name,
                  trackId: item.id,
                  songName: item.name,
                };
              });
              //console.log(songs_toptenrecs);
              setSongTopTenRecsCards(songs_toptenrecs);
            }
          );
        })
        .catch((err) => {
          console.log(err);
          setErrorState(true);
        });
    }
  }, []);

  // console.log(songTopTenPlayedCards); // tracks the info correctly as array of objects
  // console.log(songTopTenRecsCards);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Main
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              SCOPE={SCOPE}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              token={token}
              logout={handleLogout}
              username={username}
            />
          </Route>
          <ProtectedRoute path="/profile" token={token}>
            <Route path="/profile">
              <Profile
                token={token}
                username={username}
                onSelectSong={handleSelectedSong}
                songCards={songTopTenPlayedCards}
                errorState={errorState}
              />
            </Route>
          </ProtectedRoute>
          <ProtectedRoute path="/recommended" token={token}>
            <Route path="/recommended">
              <Recommended
                token={token}
                username={username}
                onSelectSong={handleSelectedSong}
                songCards={songTopTenRecsCards}
                errorState={errorState}
              />
            </Route>
          </ProtectedRoute>
        </Switch>
        <Footer />
        {activeModal === "preview" && (
          <SongModal
            selectedSongCard={selectedSong}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
