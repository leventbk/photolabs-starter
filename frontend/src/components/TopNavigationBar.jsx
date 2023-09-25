import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const { topics, isFavPhotoExist, getPhotosbyTopic  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span><TopicList topics={topics} getPhotosbyTopic={getPhotosbyTopic}/></span>
      <span><FavBadge isFavPhotoExist={isFavPhotoExist} /></span>
    </div>
  )
}

export default TopNavigation;