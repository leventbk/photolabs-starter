import React from "react";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";
import PhotoListItem from './PhotoListItem';

const PhotoList = () => {

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((img) => (
        <PhotoListItem 
          key={img.id}
          imageSource={img.urls.full}
          profile={img.user.profile}
          username={img.user.username}
          locationCity={img.location.city}
          locationCountry={img.location.country}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
