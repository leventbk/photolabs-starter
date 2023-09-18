import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const { photos, setShowModal, setSelectedPhoto } = props;

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((img) => (
        <PhotoListItem 
          key={img.id}
          photo={img}
          favPhotos={props.favPhotos}
          toggleFav={props.toggleFav}
          setShowModal={setShowModal}
          setSelectedPhoto={setSelectedPhoto}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
