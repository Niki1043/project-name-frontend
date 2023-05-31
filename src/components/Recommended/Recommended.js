import Header from "../Header/Header";
import SongsSection from "../SongsSection/SongsSection";
import React from "react";
import "./Recommended.css";

//Add in SongsSection - whcih contains songcard
function Recommended({
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
        <div className="rec-error">
          <p className="rec-error__message">
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

export default Recommended;
