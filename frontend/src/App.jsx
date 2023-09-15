import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  const img = sampleDataForPhotoListItem;
  const photos = new Array(3).fill(img);

  return (
    <div className="App">
      {photos.map((img,index) => (
        <PhotoListItem 
          key={index}
          imageSource={img.imageSource}
          profile={img.profile}
          username={img.username}
          location={img.location}
        />
      ))}
    </div>
  );
};

export default App;
