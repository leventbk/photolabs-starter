import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //Component isolation via custom hook - useApplicationData. Extractic the state and functions
  const {
    state,
    setShowModal,
    setSelectedPhoto,
    addFav,
    removeFav,
    toggleFav,
    getPhotosbyTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos} // Photos coming from application state 
        topics={state.topics} // Topics coming from application state
        favPhotos={state.favPhotos}
        setShowModal={setShowModal}
        setSelectedPhoto={setSelectedPhoto}
        addFav={addFav}
        removeFav={removeFav}
        toggleFav={toggleFav}
        getPhotosbyTopic={getPhotosbyTopic}
      />

      {/* Conditional Rendering for PhotoDetailsModal: If showModel is true, it will render the PhotoDetailsModal component; if false, it won't render anything.*/}
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
