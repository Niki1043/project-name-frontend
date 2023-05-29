import Header from "../Header/Header";
import SongsSection from "../SongsSection/SongsSection";
import React from "react";

import SongModal from "../SongModal/SongModal";
import { useState } from "react";

//Add in SongsSection - whcih contains songcard
function Profile({ token, username, onSelectSong, songCards }) {
  return (
    <>
      <Header token={token} username={username} />
      <SongsSection songCards={songCards} onSelectSong={onSelectSong} />
    </>
  );
}

export default Profile;
