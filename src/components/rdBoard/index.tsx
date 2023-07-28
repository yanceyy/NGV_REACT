import './index.css';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

interface Content {
  imgUrl: string;
  title: string;
  content: string;
  linkName: string;
  link: string;
}

export default function RdBoard({ item }: { item: Content }) {
  return (
    <div className="RdBoard">
      <div className="container">
        <img src={item.imgUrl} alt="" />
        <Link to={item.link} className="info">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <span>
            {item.linkName}
            <KeyboardArrowRightIcon className="right-arrow" />
          </span>
        </Link>
      </div>
    </div>
  );
}
