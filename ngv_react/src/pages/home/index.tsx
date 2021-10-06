import React from 'react';
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';
// import Announement from '../../components/announcement';
import EventBoard from '../../components/eventBoard';
import ExhibitionsBoard from '../../components/exhibitionBoard';
import RdBoard from '../../components/rdBoard';
import Head from '../../components/header';
import './index.css';
import { useDocumentTitle } from '../../utils';

const IMGurl = [
  {
    url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/10/homeslide_argenteuil-v2.jpg',
    title: 'FREE SHIPPING australia-wide',
    text: 'When you spend $50 online at VGN design store. Available until 11:59pm AEDT, 4 Oct',
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
    title: 'VGN Channel',
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
  title: 'Discover the VGN Collection',
  content: 'View highlights and recent acquisitions, events, publications, research and more.',
  linkname: 'Browse 68,000+ works online',
  link: '/',
};

const events = [
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
export default function Home() {
  useDocumentTitle('VGN', false);
  return (
    <>
      <div className="maximumbody">
        <Head />
        <Gallery IMGurl={IMGurl} />
        <div className="homePageContent">
          {/* <Announement /> */}
          <RdBoard item={content} />
          <EventBoard items={events} />
          <RdBoard item={content1} />
          <RdBoard item={content} />
          <RdBoard item={content1} />
          <ExhibitionsBoard />
        </div>
      </div>
      <Footer />
    </>
  );
}
