import "./SongCard.css";

const SongCard = ({ item, onSelectSong }) => {
  return (
    <div className="song-card">
      <div
        className="song-card__name-container"
        onClick={() => onSelectSong(item)}
      >
        <p className="song-card__name">{item.songname}</p>
        <p className="song-card__artist">{item.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
