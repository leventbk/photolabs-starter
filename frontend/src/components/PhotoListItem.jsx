import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photo, setShowModal, setSelectedPhoto, favPhotos, toggleFav } = props;

  // Modal event onClick
  const handleOnClick = () => {
    setSelectedPhoto(photo)
    setShowModal(true)
  }
  return (
    <div className='photo-list__item' key={photo.id}>
      {/* Favbutton */}
      <PhotoFavButton
        photoId={photo.id} // prop move to child comp.
        toggleFav={toggleFav}
        favPhotos={favPhotos}
      />
      {/* Photo card's view with data */}
      <img className='photo-list__image' src={photo.urls.regular} onClick={handleOnClick} />
      <div className="photo-list__general-profile">
        <img src={photo.user.profile} className='photo-list__user-profile' />
        <div className="photo-list__details">
          <p className="photo-list__user-info">{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}-{photo.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
