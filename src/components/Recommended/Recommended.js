import Header from "../Header/Header";
import SongsSection from "../SongsSection/SongsSection";
import React from "react";

//Add in SongsSection - whcih contains songcard
function Recommended({ token, username, onSelectSong, songCards }) {
  return (
    <>
      <Header token={token} username={username} />
      <SongsSection songCards={songCards} onSelectSong={onSelectSong} />
    </>
  );
}

export default Recommended;
