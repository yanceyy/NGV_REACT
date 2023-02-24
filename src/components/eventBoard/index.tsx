import React from 'react';
import './index.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

export interface EventItem {
  url: string;
  title: string;
  subtitle: string;
  time: string;
}

export default function EventBoard({ items }: { items: EventItem[] }) {
  return (
    <div className="eventBoard">
      <div className="container">
        <div className="title">
          <h2>Virtual events</h2>
          <Link className="seeAll" to="/whats-on">
            <span>See all events</span>
            <KeyboardArrowRightIcon className="rightarrow" />
          </Link>
        </div>
        <div className="events">
          {items.map((item) => (
            <Link to="/" key={item.url}>
              <div className="img" style={{ backgroundImage: `url(${item.url})` }} />
              <h4>{item.title}</h4>
              <h5>{item.subtitle}</h5>
              <p>{item.time}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
