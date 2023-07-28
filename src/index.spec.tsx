import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

import WebsiteRouter from './router';

describe('router', () => {
  it('renders ticket page', async () => {
    render(
      <MemoryRouter
        initialIndex={0}
        initialEntries={[
          {
            pathname: '/tickets',
          },
        ]}
      >
        <WebsiteRouter />
      </MemoryRouter>
    );
    await waitFor(() => expect(screen.getByText('Cart')).toBeInTheDocument());
  });

  it('renders channel page', async () => {
    render(
      <MemoryRouter
        initialIndex={0}
        initialEntries={[
          {
            pathname: '/channel',
          },
        ]}
      >
        <WebsiteRouter />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(
        screen.getByText(/Stay connected and inspired/i)
      ).toBeInTheDocument()
    );
  });
});
