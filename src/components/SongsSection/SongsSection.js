import "./SongsSection.css";
import SongCard from "../SongCard/SongCard";

const SongsSection = ({ defaultinfo, onSelectSong, token }) => {
  return (
    <div className="songs">
      <h2 className="songs__header">List of songs</h2>
      <div className="songs__card-container">
        {defaultinfo.map((x) => {
          console.log(x);
          return <SongCard key={x._id} item={x} onSelectSong={onSelectSong} />;
        })}
      </div>
    </div>
  );
};
// .map the api returned info and return Song Card here
export default SongsSection;
