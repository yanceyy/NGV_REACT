import React from 'react';
import './index.css';

interface EventProp {
  imgurl: string;
  title: string;
}

function Event({ imgurl, title }: EventProp) {
  return (
    <div className="event">
      <img src={imgurl} alt="" />
      <h5>{title}</h5>
    </div>
  );
}

export default Event;
