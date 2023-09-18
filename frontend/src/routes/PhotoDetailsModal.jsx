import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {setShowModal, selectedPhoto} = props;
  const handleOnClose = () => {
    setShowModal(false);
  }
  console.log(selectedPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={handleOnClose} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
