/* eslint-disable no-undef */
import {
  cleanup, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Router as BrowserRouter, BrowserRouter as Brouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Router from './router';

describe('render', () => {
  beforeEach(() => {
    cleanup();
    render(<Brouter><Router /></Brouter>);
  });

  it('show Logo', () => {
    expect(screen.getByText('VGN')).toBeInTheDocument();
  });

  it('show header', () => {
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('show virtual events', () => {
    expect(screen.getByText(/Under 5s/i)).toBeInTheDocument();
  });

  it('show big weather', () => {
    expect(screen.getByText(/big weather/i)).toBeInTheDocument();
  });

  it('show 2021 Annual Appeal (footer)', () => {
    expect(screen.getByText(/2021 Annual Appeal/i)).toBeInTheDocument();
  });
});

describe('router', () => {
  it('renders ticket page', async () => {
    const history = createMemoryHistory();
    history.push('/tickets');
    render(<BrowserRouter history={history}><Router /></BrowserRouter>);
    await waitFor(() => expect(screen.getByText('Cart')).toBeInTheDocument());
  });

  it('renders channel page', async () => {
    const history = createMemoryHistory();
    history.push('/channel');
    render(<BrowserRouter history={history}><Router /></BrowserRouter>);
    await waitFor(() => expect(screen.getByText(/Stay connected and inspired/i)).toBeInTheDocument());
  });
});
