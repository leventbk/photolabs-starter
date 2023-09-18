import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photo, setShowModal, setSelectedPhoto, favPhotos, toggleFav } = props;
  
  const handleOnClick = () => {
    setSelectedPhoto(photo)
    setShowModal(true)
  }
  return (
    <div className='photo-list__item' key={photo.id}>
      <PhotoFavButton 
        photoId={photo.id}
        toggleFav={toggleFav}
        favPhotos={favPhotos}
      />
      <img className='photo-list__image'src={photo.urls.regular} onClick={handleOnClick}/>
      <div className="photo-list__general-profile">
        <img src={photo.user.profile}className='photo-list__user-profile'/>
        <div className="photo-list__details">
          <p className="photo-list__user-info">{photo.user.name}</p> 
          <p className="photo-list__user-location">{photo.location.city}-{photo.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
