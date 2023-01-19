import React from 'react';
import './index.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Item{
  url:string,
  title:string,
  subtitle:string,
  time:string
}

export default function EventBoard({ items }:{items:Item[]}) {
  return (
    <div className="eventBoard">
      <div className="container">
        <div className="title">
          <h2>Virtual events</h2>
          <a className="seeAll" href="/whats-on">
            <span>
              See all events
            </span>
            <KeyboardArrowRightIcon className="rightarrow" />
          </a>
        </div>
        <a href="/" className="events">
          {items.map((item) => (
            <div key={item.url}>
              <div className="img" style={{ backgroundImage: `url(${item.url})` }} />
              <h4>{item.title}</h4>
              <h5>{item.subtitle}</h5>
              <p>{item.time}</p>
            </div>
          ))}
        </a>
      </div>
    </div>
  );
}
