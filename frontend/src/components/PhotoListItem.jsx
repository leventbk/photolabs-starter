import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item' key={props.photoId}>
      <img className='photo-list__image'src={props.imageSource} height="600px"/>
      <div className="photo-list__general-profile">
        <img src={props.profile} height='150px' className='photo-list__user-profile'/>
        <div className="photo-list__details">
          <p className="photo-list__user-info">{props.username}</p> 
          <p className="photo-list__user-location">{props.location.city}-{props.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
