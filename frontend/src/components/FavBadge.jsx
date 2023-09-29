import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
      {/* The resulting boolean value from !!isFavPhotoExist is assigned to the prop displayAlert for a React component. This means that the displayAlert prop for the component will be true if isFavPhotoExist is truthy and false if isFavPhotoExist is falsy. */}
    </div>
  )
};

export default FavBadge;