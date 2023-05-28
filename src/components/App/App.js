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
  const [songCards, setSongCards] = useState([]);

  // Set UseEffect
  useEffect(() => {
    // get window url
    const hash = window.location.hash;
    console.log(hash);
    let token = window.localStorage.getItem("token");
    //console.log(token);
    // console.log(hash); // returns #access_token=xxxxx from url up to &
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

  console.log(token);

  // Set Handlers
  const logout = () => {
    setToken("");
    window.location.hash = "";
    window.localStorage.removeItem("token");
    window.onload = window.localStorage.clear();
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedSong = (songcard) => {
    setActiveModal("preview");
    setSelectedSong(songcard);
  };

  /// PROFILE API TO GET USER DATA - TO BE TIDIUED UP AS NEEDED FROM CONSOLE LOG
  fetchProfile(token)
    .then((res) => {
      setUsername(res.display_name);
    })
    .catch((err) => {
      console.log(err);
    });

  // ///GET TOP 10 TRACKS - Check object for more info with name and artist info
  getTopTracks(token)
    .then((res) => {
      console.log(res);
      const song_set = res.items;
      console.log(song_set);

      const song_name = song_set.map(({ name }) => `${name}`);
      console.log(song_name);
      const song_artist = song_set.map(
        ({ artists }) => `${artists.map((artist) => artist.name)}`
      );
      console.log(song_artist);
    })
    .catch((err) => {
      console.log(err);
    });

  // const toptracks = getTopTracks(token);
  // //console.log(toptracks);
  // const topTracks = toptracks.then(function (result) {
  //   //console.log(result.items);
  //   console.log(
  //     result.items?.map(
  //       ({ name, artists }) =>
  //         `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  //     )
  //   );
  // });

  ////Stuff

  // // Get top10Tracks IDs to const array list - use this as input to recommendations API
  // const toptracksId = getTopTracks(token);
  // //console.log(toptracksId);
  // const topTracksId = toptracksId.then(function (result) {
  //   //console.log(result.items);
  //   //console.log(result.items?.map(({ id }) => `${id}`));
  // });

  // const toptracksIds = [
  //   "18zjwSgYiwu1Meb7Po3tUP",
  //   // "4poeu6nUr4UQo1RXpp29Js",
  //   // "0EJ3N6BhFDrUc26xBEpztv",
  //   // "5ktyEZbrgBEePsu6MW5Cvw",
  //   // "7myke8Id4WyKFlWcRBJdIF",
  //   // // "7wz8LNfmGZ3C0PwKW9LdDg",
  //   // // "0M1pfDTZGWC7cBuEx3FwwT",
  //   // // "0vhOJ8a3M2LWnBNrDXJKDl",
  //   // // "107nvz0Fjnsq9O9g61myZ5",
  //   // // "1QQgmN383kUqjioRoTSfF3",
  // ];

  // // // GET 10 RECCOMENDATIONS
  // const recommendedTracks = getRecommendations(toptracksIds, token);
  // //console.log(recommendedTracks);
  // const recTracks = recommendedTracks.then(function (result) {
  //   //console.log(result.tracks);
  // // });

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
              logout={logout}
              username={username}
            />
          </Route>
          <ProtectedRoute path="/profile" token={token}>
            <Route path="/profile">
              <Profile
                token={token}
                username={username}
                onSelectSong={handleSelectedSong}
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
