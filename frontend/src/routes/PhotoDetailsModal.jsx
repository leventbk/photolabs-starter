import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {setShowModal, selectedPhoto, toggleFav, favPhotos} = props;
  const handleOnClose = () => {
    setShowModal(false);
  }
  console.log(selectedPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={handleOnClose} alt="close symbol" />
      </button>

      <PhotoFavButton 
        photoId={selectedPhoto.id}
        toggleFav={toggleFav}
        favPhotos={favPhotos}
      />

      <div>
        <div>
          <img 
            className='photo-details-modal__image'
            src={selectedPhoto.urls.full} 
          />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
