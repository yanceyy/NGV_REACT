import React from 'react';
import Head from '../../components/header';
import Footer from '../../components/footer';
import { useDocumentTitle } from '../../utils';
import EventBoard from '../../components/eventBoard';
import PageTitle from '../../components/pagetitleBoar';
import ExhibitionsBoard from '../../components/exhibitionBoard';
import RdBoard from '../../components/rdBoard';

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
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-earlyyears/Fb106083/large',
    title: 'Goya Live Virtual Curator Tour',
    subtitle: '',
    time: '10.30am,6 Oct | Free',
  },
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-learn/Fb105636.jpg%20/large',
    title: 'Goya Live Virtual Curator Tour',
    subtitle: '',
    time: '10.30am,6 Oct | Free',
  },
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-galleryvisitsyou/Fb107706/large',
    title: 'Goya Live Virtual Curator Tour',
    subtitle: '',
    time: '10.30am,6 Oct | Free',
  },
  {
    url: 'https://content.ngv.vic.gov.au/col-images/api-learn/Ba100013/large',
    title: 'Goya Live Virtual Curator Tour',
    subtitle: '',
    time: '10.30am,6 Oct | Free',
  },
];

const content3 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/EXHI061864/1280',
  title: 'NGV SPOTIFY PLAYLISTS',
  content:
    'Wander through the Impressionist movement’s most dreamy, timeless and sublime pieces of music, from iconic early works through to contemporary forms from across the globe.',
  linkname: 'Listen',
  link: '/',
};

const content4 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/EXHI061868/1280',
  title: 'Beyond the Frame',
  content:
    'Understand the bigger picture behind some of the world’s greatest art with Beyond the Frame, a six-part podcast series created by HSBC, Premium Partner of French Impressionism from the Museum of Fine Arts, Boston',
  linkname: 'Listen',
  link: '/',
};
export default function WhatsOn() {
  useDocumentTitle("What's on|VGN", false);
  return (
    <>
      <div className="maximumbody">
        <Head />
        <PageTitle title="WHAT’S ON" />
        <EventBoard items={events} />
        <RdBoard item={content3} />
        <RdBoard item={content4} />
        <ExhibitionsBoard />
        <RdBoard item={content3} />
        <RdBoard item={content4} />
        <div className="homePageContent" />
      </div>
      <Footer />
    </>
  );
}
