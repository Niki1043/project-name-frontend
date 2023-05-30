import Header from "../Header/Header";
import SongsSection from "../SongsSection/SongsSection";
import React from "react";

import SongModal from "../SongModal/SongModal";
import { useState } from "react";

//Add in SongsSection - whcih contains songcard
function Profile({ token, username, onSelectSong, songCards, errorState }) {
  return (
    <>
      <Header token={token} username={username} />
      {errorState ? (
        <p>HERE IS SOME MAHOR ISSUES WITH TEH CARDS</p>
      ) : (
        <SongsSection songCards={songCards} onSelectSong={onSelectSong} />
      )}
    </>
  );
}

export default Profile;
