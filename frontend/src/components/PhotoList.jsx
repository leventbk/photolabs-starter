import React from "react";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {


  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((img) => (
        <PhotoListItem 
          key={img.id}
          id={img.id}
          imageSource={img.urls.full}
          profile={img.user.profile}
          username={img.user.username}
          locationCity={img.location.city}
          locationCountry={img.location.country}
          favPhotos={props.favPhotos}
          toggleFav={props.toggleFav}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
