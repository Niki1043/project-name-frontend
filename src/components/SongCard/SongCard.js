import "./SongCard.css";

const SongCard = ({ songCards, onSelectSong }) => {
  return (
    <div className="song-card">
      <img
        className="song-card__image"
        src={songCards.albumImage}
        alt={songCards.songName}
        onClick={() => onSelectSong(songCards)}
      />
      <div className="song-card__name-container">
        <p className="song-card__name">{songCards.songName}</p>
      </div>
    </div>
  );
};

export default SongCard;
