import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const handleOnclick = () => {
    props.setShowModel(true)
  }
  return (
    <div className='photo-list__item' key={props.id}>
      <PhotoFavButton 
        photoId={props.id}
        toggleFav={props.toggleFav}
        favPhotos={props.favPhotos}
      />
      <img className='photo-list__image'src={props.imageSource} onClick={handleOnclick}/>
      <div className="photo-list__general-profile">
        <img src={props.profile}className='photo-list__user-profile'/>
        <div className="photo-list__details">
          <p className="photo-list__user-info">{props.username}</p> 
          <p className="photo-list__user-location">{props.locationCity}-{props.locationCountry}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
