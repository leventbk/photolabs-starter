import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const { setShowModal, selectedPhoto, toggleFav, favPhotos } = props;
  const handleOnClose = () => { // Modal view closing
    setShowModal(false);
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={handleOnClose} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          photoId={selectedPhoto.id} // prop pass to child component
          toggleFav={toggleFav}
          favPhotos={favPhotos}
        />
        <div>
          {/* Modal view */}
          <img
            className='photo-details-modal__image'
            src={selectedPhoto.urls.full}
          />
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />
            <div className='photo-details-modal__photographer-info' >
              {selectedPhoto.user.name}
              <div className='photo-details-modal__photographer-location'>
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Similar Photos with favoutie function */}
      <div>
        <h3>Similar Photos</h3>
        {<PhotoList favPhotos={favPhotos} toggleFav={toggleFav} photos={Object.values(selectedPhoto.similar_photos)} />}
      </div>
    </div>

  )
};

export default PhotoDetailsModal;
