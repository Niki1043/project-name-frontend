import "./SongsSection.css";
import SongCard from "../SongCard/SongCard";

const SongsSection = ({ songCards, onSelectSong, index, onClick }) => {
  return (
    <div className="songs">
      <h2 className="songs__header">Top 10 Songs</h2>
      <div className="songs__card-container">
        {songCards.slice(0, index).map((x) => {
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
      <div className="songs__show-more-container">
        {index > 10 ? (
          <></>
        ) : (
          <button
            type="button"
            className="songs__show-more-button"
            onClick={onClick}
          >
            Show More...
          </button>
        )}
      </div>
    </div>
  );
};
// .map the api returned info and return Song Card here
export default SongsSection;
