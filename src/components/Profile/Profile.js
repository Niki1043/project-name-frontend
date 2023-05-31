import Header from "../Header/Header";
import SongsSection from "../SongsSection/SongsSection";
import React from "react";
import "./Profile.css";

// import SongModal from "../SongModal/SongModal";
// import { useState } from "react";

//Add in SongsSection - whcih contains songcard
function Profile({
  token,
  username,
  onSelectSong,
  songCards,
  errorState,
  onClick,
  index,
}) {
  return (
    <>
      <Header token={token} username={username} errorState={errorState} />
      {errorState ? (
        <div className="profile-error">
          <p className="profile-error__message">
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later
            or return to the main page and try to login again.
          </p>
        </div>
      ) : (
        <SongsSection
          songCards={songCards}
          onSelectSong={onSelectSong}
          onClick={onClick}
          index={index}
        />
      )}
    </>
  );
}

export default Profile;
