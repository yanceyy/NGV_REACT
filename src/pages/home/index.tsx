import './index.css';

import { useFetch } from 'usehooks-ts';
import EventBoard from '../../components/eventBoard';
import type { EventItem } from '../../components/eventBoard';
import ExhibitionsBoard from '../../components/exhibitionBoard';
import Footer from '../../components/footer';
import Gallery from '../../components/gallery';
import type { GalleryImgUrlItem } from '../../components/gallery';
import Head from '../../components/header';
import RdBoard from '../../components/rdBoard';
import api from '../../api';
import { useDocumentTitle } from '../../utils';

const content = {
  imgUrl:
    'https://www.ngv.vic.gov.au/wp-content/uploads/2021/09/9x5_channel.jpg',
  title: 'CHANNEL',
  content:
    'Stay connected and inspired with highlights from the WMW including the stories behind our Collection works and exhibitions, virtual tours, essays, interviews and more.',
  linkName: 'Browse',
  link: '/channel',
};

const content1 = {
  imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Fd104985/1280',
  title: 'Discover the VGN Collection',
  content:
    'View highlights and recent acquisitions, events, publications, research and more.',
  linkName: 'Browse 68,000+ works online',
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
      <div className="maximum-body">
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
