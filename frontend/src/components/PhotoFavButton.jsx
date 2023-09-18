import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { toggleFav, photoId, favPhotos } = props;
  // const [active, setActive] = useState(false);

  const selected = favPhotos.includes(photoId); 

  return (
    <div className="photo-list__fav-icon" onClick={()=> toggleFav(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;