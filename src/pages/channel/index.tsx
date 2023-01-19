import React from 'react';
import Head from '../../components/header';
import Footer from '../../components/footer';
import { useDocumentTitle } from '../../utils';
import './index.css';
import PageTitle from '../../components/pagetitleBoar';
import RdBoard from '../../components/rdBoard';

const content = {
  title: 'CHANNEL',
  text: 'Stay connected and inspired with highlights from the VGN including the stories behind our Collection works and exhibitions, virtual tours, essays, interviews and more.',
};
const content2 = {
  title: 'LISTEN',
};

const content1 = {
  imgUrl: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/10/French-Imressionism-virtual-tour.jpg',
  title: 'French Impressionism Virtual Tour',
  content: 'Explore French Impressionism from the Museum of Fine Arts, Boston online, access our audio guide, videos and more.',
  linkname: 'Take the tour',
  link: '/',
};

const content3 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/EXHI061864/1280',
  title: 'NGV SPOTIFY PLAYLISTS',
  content: 'Wander through the Impressionist movement’s most dreamy, timeless and sublime pieces of music, from iconic early works through to contemporary forms from across the globe.',
  linkname: 'Listen',
  link: '/',
};

const content4 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/EXHI061868/1280',
  title: 'Beyond the Frame',
  content: 'Understand the bigger picture behind some of the world’s greatest art with Beyond the Frame, a six-part podcast series created by HSBC, Premium Partner of French Impressionism from the Museum of Fine Arts, Boston',
  linkname: 'Listen',
  link: '/',
};
export default function Channel() {
  useDocumentTitle('Channel|VGN', false);
  return (
    <>
      <div className="maximumbody">
        <Head />
        <PageTitle title={content.title} text={content.text} />
        <RdBoard item={content1} />
        <PageTitle title={content2.title} />
        <RdBoard item={content3} />
        <RdBoard item={content4} />
        <div className="homePageContent" />
      </div>
      <Footer />
    </>
  );
}
