import React from 'react';
import './index.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Content{
  imgUrl:string,
  title:string,
  content:string,
  linkname:string,
  link:string,
}

export default function RdBoard({ item }:{item:Content}) {
  return (
    <div className="RdBoard">
      <div className="conatiner">
        <img src={item.imgUrl} alt="" />
        <a href={item.link} className="info">

          <h3>{item.title}</h3>
          <p>
            {item.content}
          </p>
          <span>
            {item.linkname}
            <KeyboardArrowRightIcon className="rightarrow" />
          </span>

        </a>
      </div>
    </div>
  );
}
