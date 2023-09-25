import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const handleOnClick = () => {
    props.getPhotosbyTopic(props.topicId)
  }
  return (
    <div className="topic-list__item" onClick={handleOnClick}>
      <span>{props.label}</span>
    </div>
  );
};

export default TopicListItem;
