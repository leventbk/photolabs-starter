import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics } = props;
  const [favPhotos, setFavPhotos] = useState([]);
  const addFav = (photoId) => {
    setFavPhotos((prevPhotos)=> [...prevPhotos, photoId]);
  }
  const removeFav = (photoId) => {
    setFavPhotos(prevPhotos=>prevPhotos.filter((id) => id !== photoId));
  }

  const toggleFav = (photoId) => {
    const active = favPhotos.includes(photoId);
    console.log(active, favPhotos)
    if (active) {
      removeFav(photoId);
    } else {
      addFav(photoId);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
      />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        toggleFav={toggleFav}    
      />
    </div>
  );
};

export default HomeRoute;
