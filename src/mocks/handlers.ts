import { rest } from 'msw';

const galleryContents = [
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

const events = [
  {
    imageUrl:
      'https://content.ngv.vic.gov.au/col-images/api-galleryvisitsyou/EXHI061894/large',
    title: 'Gallery visits You',
    subtitle: 'Fresh Impression from MFA Boston',
    time: '10.30am,6 Oct | Free',
  },
  {
    imageUrl:
      'https://content.ngv.vic.gov.au/col-images/api-earlyyears/Cb101369/large',
    title: 'Under 5s',
    subtitle: 'Japan and Me',
    time: '10.30am,6 Oct | Free',
  },
  {
    imageUrl:
      'https://content.ngv.vic.gov.au/col-images/api-learn/Df109990/large',
    title: 'Expect the Unexpected',
    subtitle: 'Drawing with Shaun Tan (Primary)',
    time: '10.30am,6 Oct | Free',
  },
  {
    imageUrl:
      'https://www.ngv.vic.gov.au/wp-content/uploads/2021/09/Cathy-Leahy.jpg',
    title: 'Goya Live Virtual Curator Tour',
    subtitle: '',
    time: '10.30am,6 Oct | Free',
  },
];

const handlers = [
  rest.get('/gallery', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(galleryContents))
  ),
  rest.get('/events', (_, res, ctx) => res(ctx.status(200), ctx.json(events))),
];

export default handlers;
