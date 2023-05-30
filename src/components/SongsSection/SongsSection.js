import "./SongsSection.css";
import SongCard from "../SongCard/SongCard";

const SongsSection = ({ songCards, onSelectSong }) => {
  return (
    <div className="songs">
      <h2 className="songs__header">List of songs</h2>
      <div className="songs__card-container">
        {songCards.map((x) => {
          // console.log(x);
          return (
            <SongCard
              key={x.trackId}
              songCards={x}
              onSelectSong={onSelectSong}
            />
          );
        })}
      </div>
    </div>
  );
};
// .map the api returned info and return Song Card here
export default SongsSection;
