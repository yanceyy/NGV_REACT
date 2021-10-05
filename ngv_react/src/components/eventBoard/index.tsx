import React from 'react';
import './index.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const data = [
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-galleryvisitsyou/EXHI061894/large',
    title: 'Gallery visits You',
    subtitle: 'Fresh Impression from MFA Boston',
    time: '10.30am,6 Oct | Free',
  },
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-earlyyears/Cb101369/large',
    title: 'Under 5s',
    subtitle: 'Japan and Me',
    time: '10.30am,6 Oct | Free',
  },
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-learn/Df109990/large',
    title: 'Expect the Unexpected',
    subtitle: 'Drawing with Shaun Tan (Primary)',
    time: '10.30am,6 Oct | Free',
  },
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/09/Cathy-Leahy.jpg',
    title: 'Goya Live Virtual Curator Tour',
    subtitle: '',
    time: '10.30am,6 Oct | Free',
  },
];

export default function EventBoard() {
  return (
    <div className="eventBoard">
      <div className="container">
        <div className="title">
          <h2>Virtual events</h2>
          <a className="seeAll" href="sall">
            <span>
              See all event
            </span>
            <KeyboardArrowRightIcon className="rightarrow" />
          </a>
        </div>
        <a href="/" className="events">
          {data.map((item) => (
            <div>
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
