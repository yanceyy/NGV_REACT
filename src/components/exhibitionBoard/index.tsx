import './index.css';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

const data = [
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api/EXHI059488/1280',
    title: 'Gamille',
    subtitle: 'IS TODAY TOMORROW',
    time: 'Until 30 Jan',
  },
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2020/11/Ae100140_detail.png',
    title: 'MAREE CLARKE',
    subtitle: 'ANCESTRAL MEMORIES',
    time: 'Until 6 Feb',
  },
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2020/04/ARTS024531-det.jpg',
    title: 'BIG WEATHER',
    subtitle: 'VGN COLLECTION',
    time: 'Until 6 Feb',
  },
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api/Dm100205/1280',
    title: 'WE CHANGE THE WORLD',
    subtitle: 'VGN COLLECTION',
    time: 'Until 27 Mar',
  },
];

export default function ExhibitionsBoard() {
  return (
    <div className="exhibitions">
      <div className="container">
        <div className="title">
          <h2>EXHIBITIONS</h2>
          <Link className="seeAll" to="/whats-on">
            <span>See all exhibitions</span>
            <KeyboardArrowRightIcon className="rightarrow" />
          </Link>
        </div>
        <div className="events">
          {data.map((item) => (
            <Link to="/" key={item.url} className="events__item">
              <div
                className="img"
                style={{ backgroundImage: `url(${item.url})` }}
              />
              <div className="inf">
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
                <p>{item.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
