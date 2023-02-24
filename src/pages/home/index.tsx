import React from 'react';
import { useFetch } from 'usehooks-ts';

import Gallery from '../../components/gallery';
import Footer from '../../components/footer';
import EventBoard from '../../components/eventBoard';
import ExhibitionsBoard from '../../components/exhibitionBoard';
import RdBoard from '../../components/rdBoard';
import Head from '../../components/header';
import './index.css';
import { useDocumentTitle } from '../../utils';
import api from '../../api';

import type { GalleryImgUrlItem } from '../../components/gallery';
import type { EventItem } from '../../components/eventBoard';

const content = {
  imgUrl: 'https://www.ngv.vic.gov.au/wp-content/uploads/2021/09/9x5_channel.jpg',
  title: 'CHANNEL',
  content: 'Stay connected and inspired with highlights from the WMW including the stories behind our Collection works and exhibitions, virtual tours, essays, interviews and more.',
  linkname: 'Browse',
  link: '/channel',
};

const content1 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Fd104985/1280',
  title: 'Discover the VGN Collection',
  content: 'View highlights and recent acquisitions, events, publications, research and more.',
  linkname: 'Browse 68,000+ works online',
  link: '/',
};

export default function Home() {
  const { data: galleryContents } = useFetch<GalleryImgUrlItem[]>(api.gallery);
  const { data: eventItems } = useFetch<EventItem[]>(api.events);

  useDocumentTitle('VGN', false);
  if (!galleryContents || !eventItems) {
    return null;
  }

  return (
    <>
      <div className="maximumbody">
        <Head />
        <Gallery IMGurl={galleryContents} />
        <div className="homePageContent">
          <RdBoard item={content} />
          <EventBoard items={eventItems} />
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
