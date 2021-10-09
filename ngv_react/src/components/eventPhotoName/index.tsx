import React from 'react';
import './index.css';

function Event({ imgurl, title }:{imgurl:string, title:string}) {
  return (
    <div className="event">
      <img src={imgurl} alt="" />
      <h5>{title}</h5>
    </div>
  );
}

export default Event;
