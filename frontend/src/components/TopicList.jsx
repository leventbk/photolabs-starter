import React from "react";
import "../styles/TopicList.scss";


import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topics, getPhotosbyTopic } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topics) => (
        <TopicListItem //Passing topics. data as prop
          key={topics.id}
          topicId={topics.id}
          slug={topics.slug}
          label={topics.title}
          getPhotosbyTopic={getPhotosbyTopic} // passing function as a prop
        />
      ))}
    </div>
  );
};

export default TopicList;
