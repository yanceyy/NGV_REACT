import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Header from '.';

describe('desktop', () => {
  beforeEach(() => {
    const container = document.createElement('div');
    container.setAttribute('id', 'root');
    document.body.append(container);
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      {
        container,
      }
    );
  });
  it('show Logo', () => {
    expect(screen.getByText('VGN')).toBeInTheDocument();
  });
  it('show Tickets', () => {
    expect(screen.getByText('Tickets')).toBeInTheDocument();
  });
  it('show Tickets', () => {
    expect(screen.getByText('Tickets')).toBeInTheDocument();
  });
  it('show EN', () => {
    expect(screen.getByText('EN')).toBeInTheDocument();
  });
});
