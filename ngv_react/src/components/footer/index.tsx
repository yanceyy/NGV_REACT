import React from 'react';
import './index.css';

interface Base{
  name: string,
  url: string,
}
interface NavItem extends Base{
  submenu: Base[]
}
const footerContent:NavItem[] = [
  {
    name: 'tickets',
    url: '/ticket',
    submenu: [
    ],
  },
  {
    name: 'channel',
    url: '/ticket',
    submenu: [
      {
        name: 'read',
        url: '/read',
      },
      {
        name: 'watch',
        url: '/read',
      },
      {
        name: 'publications',
        url: '/read',
      },
      {
        name: 'art journal',
        url: '/read',
      },
      {
        name: 'ngv Magazine',
        url: '/read',
      },
    ],
  },
  {
    name: 'What on',
    url: '/ticket',
    submenu: [
      {
        name: 'Tickets',
        url: '/read',
      },
      {
        name: 'Exhibitions',
        url: '/read',
      },
      {
        name: 'Events',
        url: '/read',
      },
      {
        name: 'Virtual Tours',
        url: '/read',
      },
    ],
  },
  {
    name: 'collection',
    url: '/ticket',
    submenu: [
      {
        name: 'curatorial departments',
        url: '/read',
      },
      {
        name: 'conservation',
        url: '/read',
      },
      {
        name: 'provenance',
        url: '/read',
      },
      {
        name: 'Reproductions',
        url: '/read',
      },
      {
        name: 'Victorian Foundation for Living Australian Artists',
        url: '/read',
      },
    ],
  },
  {
    name: 'LEARN',
    url: '/ticket',
    submenu: [
      {
        name: 'Kids',
        url: '/read',
      },
      {
        name: 'Teens',
        url: '/read',
      },
      {
        name: 'NGV School and Community Support Programs',
        url: '/read',
      },
      {
        name: 'Plan Your Visit',
        url: '/read',
      },
      {
        name: 'Learning resources',
        url: '/read',
      },
      {
        name: 'Top Arts Hub',
        url: '/read',
      },
      {
        name: 'NGV Online Courses',
        url: '/read',
      },
    ],
  },
  {
    name: 'shop',
    url: '/shop',
    submenu: [
      {
        name: 'NGV design store',
        url: '/read',
      },
      {
        name: 'NGV design store locations',
        url: '/read',
      },
    ],
  },
  {
    name: 'PLAN YOUR visit',
    url: '/ticket',
    submenu: [
      {
        name: 'Tickets',
        url: '/read',
      },
      {
        name: 'Hours & Location',
        url: '/read',
      },
      {
        name: 'Dining',
        url: '/read',
      },
      {
        name: 'provate functions',
        url: '/read',
      },
      {
        name: 'access',
        url: '/read',
      },
      {
        name: 'shaw research library',
        url: '/read',
      },
    ],
  },
  {
    name: 'About',
    url: '/ticket',
    submenu: [
      {
        name: 'contact',
        url: '/read',
      },
      {
        name: 'international audience engagement network (IAE)',
        url: '/read',
      },
      {
        name: 'media',
        url: '/read',
      },
      {
        name: 'people & careers',
        url: '/read',
      },
      {
        name: 'parners&supporters',
        url: '/read',
      },
      {
        name: 'reports & documents',
        url: '/read',
      },
      {
        name: 'sustainablity',
        url: '/read',
      },
    ],
  },
  {
    name: 'membership',
    url: '/ticket',
    submenu: [
      {
        name: 'join',
        url: '/read',
      },
      {
        name: 'renew',
        url: '/read',
      },
      {
        name: 'premium membership',
        url: '/read',
      },
      {
        name: 'gift membership',
        url: '/read',
      },
      {
        name: 'mamage account',
        url: '/read',
      },
      {
        name: 'what\'s on for NGV Members',
        url: '/read',
      },
      {
        name: 'reciprocal benefits',
        url: '/read',
      },
      {
        name: 'FAQ',
        url: '/read',
      },
      {
        name: 'Members Contact',
        url: '/read',
      },
    ],
  },
  {
    name: 'support us',
    url: '/ticket',
    submenu: [
      {
        name: '2021 annual appeal',
        url: '/read',
      },
      {
        name: 'individual donations',
        url: '/read',
      },
      {
        name: 'become a corporate partner',
        url: '/read',
      },
      {
        name: 'fundraising events',
        url: '/read',
      },
      {
        name: 'NGVWA',
        url: '/read',
      },
    ],
  },
  {
    name: 'contact',
    url: '/ticket',
    submenu: [
      {
        name: 'contact us',
        url: '/read',
      },
      {
        name: 'subscribr to eNews',
        url: '/read',
      },
      {
        name: 'mamage your enews subscription',
        url: '/read',
      },
    ],
  },
];
export default function Footer() {
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
