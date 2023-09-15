import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <div id={props.key}>
  
      <img src={props.imageSource} height="600px"/>
      <br/>
      <img src={props.profile} height='150px'/>
      <p>{props.username}</p> 
      <p>{props.location.city}-{props.location.country}</p>

    </div>
  )
};

export default PhotoListItem;
