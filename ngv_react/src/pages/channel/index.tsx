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

const content1 = {
  imgUrl: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/10/French-Imressionism-virtual-tour.jpg',
  title: 'French Impressionism Virtual Tour',
  content: 'Explore French Impressionism from the Museum of Fine Arts, Boston online, access our audio guide, videos and more.',
  linkname: 'Take the tour',
  link: '/',
};

export default function Channel() {
  useDocumentTitle('Channel', false);
  return (
    <>
      <div className="maximumbody">
        <Head />
        <PageTitle title={content.title} text={content.text} />
        <RdBoard item={content1} />
        <div className="homePageContent" />
      </div>
      <Footer />
    </>
  );
}
