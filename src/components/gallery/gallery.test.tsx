import '@testing-library/jest-dom';

import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
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
    jest.useFakeTimers();
    render(
      <BrowserRouter>
        <Gallery IMGurl={IMGurl} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('test timer', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('img', { name: /free shipping australia-wide/i })
          .parentElement
      ).toHaveClass('active');
      expect(
        screen.getByRole('img', { name: /french impressionism virtual tour/i })
          .parentElement
      ).not.toHaveClass('active');
    });

    act(() => {
      jest.advanceTimersByTime(8000); // advance time by 14 seconds
    });

    await waitFor(() => {
      expect(
        screen.getByRole('img', { name: /free shipping australia-wide/i })
          .parentElement
      ).not.toHaveClass('active');
      expect(
        screen.getByRole('img', { name: /french impressionism virtual tour/i })
          .parentElement
      ).toHaveClass('active');
    });
  });

  it('click works', async () => {
    expect(
      screen.getByAltText('FREE SHIPPING australia-wide').parentElement
    ).toHaveClass('active');
    expect(screen.getByAltText('VGN Channel').parentElement).not.toHaveClass(
      'active'
    );
    act(() => {
      userEvent.click(
        document.querySelector('.picture-jump-section')
          ?.lastElementChild as Element
      );
    });
    await waitFor(() => {
      expect(
        screen.getByAltText('FREE SHIPPING australia-wide').parentElement
      ).not.toHaveClass('active');
      expect(screen.getByAltText('VGN Channel').parentElement).toHaveClass(
        'active'
      );
    });
  });

  it('normal render', () => {
    expect(screen.getByText('VGN Channel')).toBeInTheDocument();
  });
});
