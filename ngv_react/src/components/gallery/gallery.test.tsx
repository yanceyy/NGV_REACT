/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent, { TargetElement } from '@testing-library/user-event';
import Gallery from '.';

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
describe('desktop', () => {
  beforeEach(() => {
    render(<BrowserRouter><Gallery IMGurl={IMGurl} /></BrowserRouter>);
  });
  it('normal render', () => {
    expect(screen.getByText('VGN Channel')).toBeInTheDocument();
  });
  it('click works', () => {
    expect(screen.getByAltText('FREE SHIPPING australia-wide').parentElement).toHaveClass('active');
    expect(screen.getByAltText('VGN Channel').parentElement).not.toHaveClass('active');
    userEvent.click(document.querySelector('.fastchange')?.lastElementChild as TargetElement);
    expect(screen.getByAltText('FREE SHIPPING australia-wide').parentElement).not.toHaveClass('active');
    expect(screen.getByAltText('VGN Channel').parentElement).toHaveClass('active');
  });
});
