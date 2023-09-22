import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos"
import topics from "mocks/topics"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModel, setShowModal] = useState(false);
  const [ selectedPhoto, setSelectedPhoto] = useState({});
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
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics} 
      setShowModal={setShowModal} 
      setSelectedPhoto={setSelectedPhoto} 
      addFav={addFav} 
      removeFav={removeFav} 
      toggleFav={toggleFav}
      favPhotos={favPhotos}
      />
      
      {showModel && 
        <PhotoDetailsModal 
          setShowModal={setShowModal} 
          selectedPhoto={selectedPhoto} 
          toggleFav={toggleFav} 
          favPhotos={favPhotos}
        />
      }
      
    </div>
  );
};

export default App;
