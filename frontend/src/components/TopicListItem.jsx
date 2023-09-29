import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  // function to handle click event for calling the function passed via props with the topicId
  const handleOnClick = () => {
    props.getPhotosbyTopic(props.topicId)
  }
  return (
    <div className="topic-list__item" onClick={handleOnClick}>
      <span>{props.label}</span>
      {/* display topic label */}
    </div>
  );
};

export default TopicListItem;
