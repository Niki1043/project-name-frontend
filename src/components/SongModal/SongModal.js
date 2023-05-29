import "./SongModal.css";

const SongModal = ({ selectedSongCard, onClose }) => {
  return (
    <div className={`modal`}>
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
        <div className="modal__songcard-popup-text">
          <div>
            <div className="modal__songcard-popup-name">
              {selectedSongCard.songName}
            </div>
            <div className="modal__songcard-popup-name">
              {selectedSongCard.artistName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongModal;
