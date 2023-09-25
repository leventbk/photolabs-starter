import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, setShowModal, setSelectedPhoto, favPhotos, addFav,removeFav, toggleFav, getPhotosbyTopic } = props;
  

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        getPhotosbyTopic={getPhotosbyTopic}
        isFavPhotoExist={favPhotos.length > 0 ? true : false}
      />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        toggleFav={toggleFav}
        setShowModal={setShowModal}
        setSelectedPhoto={setSelectedPhoto}    
      />
    </div>
  );
};

export default HomeRoute;
