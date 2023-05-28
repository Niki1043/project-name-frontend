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
        {/* <img
          className="modal__songcard-popup-image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        /> */}
        <div className="modal__songcard-popup-text">
          <div>
            <div className="modal__songcard-popup-name">
              {selectedSongCard.songname}
            </div>
            <div className="modal__songcard-popup-name">
              {selectedSongCard.artist}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongModal;
