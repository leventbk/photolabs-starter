import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = () => {

  const sampleDataForTopicList = [
    {
      id: "1",
      slug: "topic-1",
      title: "Nature",
    },
    {
      id: "2",
      slug: "topic-2",
      title: "Travel",
    },
    {
      id: "3",
      slug: "topic-3",
      title: "People",
    },
  ];
  const topicData = sampleDataForTopicList;

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topicData) => (
        <TopicListItem 
          key={topicData.id} 
          slug={topicData.slug}
          label={topicData.title}/>
      ))}
    </div>
  );
};

export default TopicList;
