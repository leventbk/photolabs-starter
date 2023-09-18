import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {setShowModal} = props;
  const handleOnClose = () => {
    setShowModal(false);
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={handleOnClose} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
