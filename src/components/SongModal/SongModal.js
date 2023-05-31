import "./SongModal.css";

const SongModal = ({ selectedSongCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <button
          className="modal__songcard-popup-close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__songcard-popup-image"
          src={selectedSongCard.albumImage}
          alt={selectedSongCard.songName}
        />
        <div className="modal__songcard-popup-caption">
          <p className="modal__songcard-popup-text">
            Song Name: {selectedSongCard.songName}
          </p>
          <p className="modal__songcard-popup-text">
            Artist Name: {selectedSongCard.artistName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongModal;
