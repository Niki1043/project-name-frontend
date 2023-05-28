import Header from "../Header/Header";
import SongsSection from "../SongsSection/SongsSection";
import React from "react";
import "./Profile.css";
import SongModal from "../SongModal/SongModal";
import { useState } from "react";

//THIS WILL BE THE API INFO TO BE ADDED IN WITH USE EFFECT AND ASSIGNED TO VARAULBAES TO FALL FROM
const defaultinfo = [
  {
    _id: "abcd",
    songname: "name",
    artist: "artist",
  },
  { _id: "defo", songname: "name1", artist: "artist1" },
  { _id: "sdfs", songname: "name2", artist: "artist2" },
  { _id: "sdfsdf", songname: "name3", artist: "artist2" },
  { _id: "sdfcszd", songname: "name4", artist: "artist2" },
  { _id: "sghmngh", songname: "name5", artist: "artist2" },
];

//Add in SongsSection - whcih contains songcard
function Profile({ token, username, onSelectSong }) {
  // // Setup Use States
  // const [activeModal, setActiveModal] = useState("");
  // const [selectedSong, setSelectedSong] = useState({});

  // // Setup Event Handlers

  // const handleCreateModal = () => {
  //   setActiveModal("create");
  // };

  // const handleCloseModal = () => {
  //   setActiveModal("");
  // };

  // const handleSelectedSong = (songcard) => {
  //   setActiveModal("preview");
  //   setSelectedSong(songcard);
  // };

  return (
    <>
      <Header token={token} username={username} />
      <SongsSection defaultinfo={defaultinfo} onSelectSong={onSelectSong} />
    </>
  );
}

export default Profile;

{
  /* <SongsSection
defaultinfo={defaultinfo}
onSelectSong={handleSelectedSong}
/>
{activeModal === "preview" && (
<SongModal selectedSongCard={selectedSong} onClose={handleCloseModal} /> */
}
