/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
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
      { container },
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
  it('show Menu by click', () => {
    expect(screen.queryByText('2021 annual appeal')).toBeNull();
    userEvent.click(screen.getByTitle('menu'));
    expect(screen.queryByText('2021 annual appeal')).toBeInTheDocument();
  });
});
