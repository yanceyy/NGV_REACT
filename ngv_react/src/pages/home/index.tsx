import React from 'react';
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';
import Announement from '../../components/announcement';
import EventBoard from '../../components/eventBoard';
import RdBoard from '../../components/rdBoard';
import Head from '../../components/header';
import './index.css';
import { useDocumentTitle } from '../../utils';

const IMGurl = [
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/10/homeslide_argenteuil-v2.jpg',
    title: 'FREE SHIPPING australia-wide',
    text: 'When you spend $50 online at WMW design store. Available until 11:59pm AEDT, 4 Oct',
    id: '1',
  },
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/09/home_channel_maree.jpg',
    title: 'French Impressionism virtual tour',
    text: 'Explore the exhibition online, access our audio guide, videos and more',
    id: '2',
  },
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/10/homeslide_design-store-v2.jpg',
    title: 'WMW Channel',
    text: 'Watch | Read | Listen | Explore',
    id: '3',
  },
];

const content = {
  imgUrl: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/09/9x5_channel.jpg',
  title: 'CHANNEL',
  content: 'Stay connected and inspired with highlights from the WMW including the stories behind our Collection works and exhibitions, virtual tours, essays, interviews and more.',
  linkname: 'Browse',
  link: '/',
};

const content1 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Fd104985/1280',
  title: 'Discover the NGV Collection',
  content: 'View highlights and recent acquisitions, events, publications, research and more.',
  linkname: 'Browse 68,000+ works online',
  link: '/',
};

const footerContent = [
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

export default function Home() {
  useDocumentTitle('NGV', false);
  return (
    <>
      <Head />
      <Gallery IMGurl={IMGurl} />
      <div className="homePageContent">
        <Announement />
        <RdBoard item={content} />
        <EventBoard />
        <RdBoard item={content1} />
        <RdBoard item={content} />
        <RdBoard item={content1} />
      </div>
      <Footer footerContent={footerContent} />
    </>
  );
}
