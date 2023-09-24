import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    setShowModal,
    setSelectedPhoto,
    addFav,
    removeFav,
    toggleFav,
    photos,
    topics
  } = useApplicationData();

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
      favPhotos={state.favPhotos}
      />
      
      {state.showModel && 
        <PhotoDetailsModal 
          setShowModal={setShowModal} 
          selectedPhoto={state.selectedPhoto} 
          toggleFav={toggleFav} 
          favPhotos={state.favPhotos}
        />
      }
      
    </div>
  );
};

export default App;
