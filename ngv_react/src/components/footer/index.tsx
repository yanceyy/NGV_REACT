import React from 'react';
import './index.css';

interface Base{
  name: string,
  url: string,
}
interface NavItem extends Base{
  submenu: Base[]
}

export default function Footer({ footerContent }:{footerContent:NavItem[]}) {
  return (
    <div className="footer">
      <div className="container">
        {footerContent.map((item) => (
          <div className="item">
            <h5><a href={item.url}>{item.name}</a></h5>
            <ul>
              {item.submenu.map((subItem) => <li><a href={subItem.url}>{subItem.name}</a></li>)}
            </ul>
          </div>
        ))}
        <div className="item">
          <h5>FOLLOW</h5>
          <div className="contactsIcons" />
        </div>
      </div>
    </div>
  );
}
