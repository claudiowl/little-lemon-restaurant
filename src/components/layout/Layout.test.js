import React from 'react';
import { render, act } from '@testing-library/react';

jest.mock('react-router-dom', () => {
  const React = require('react');
  const navigate = jest.fn();

  return {
    BrowserRouter: ({ children }) => <>{children}</>,
    Outlet: ({ context }) => {
      global.__routeContext = context;
      return null;
    },
    useNavigate: () => navigate,
    useLocation: () => ({ pathname: '/' }),
  };
});

jest.mock('./Header',  () => () => <div data-testid="mock-header">Header</div>);
jest.mock('./Footer',  () => () => <div data-testid="mock-footer">Footer</div>);

import Layout from './Layout';
import * as api from '../../api';

jest.mock('../../api', () => ({
  fetchAPI:  jest.fn(),
  submitAPI: jest.fn(),
}));

describe('Layout component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    delete global.__routeContext;
  });

  it('initializes times on mount', async () => {
    const fake = ['10:00','11:00'];
    api.fetchAPI.mockResolvedValue(fake);

    await act(async () => {
      render(<Layout />);
    });

    // fetchAPI was called once…
    expect(api.fetchAPI).toHaveBeenCalledTimes(1);
    expect(global.__routeContext.availableTimes).toEqual(fake);
  });

  it('submitForm navigates on success', async () => {
    api.fetchAPI.mockResolvedValue(['12:00']);
    api.submitAPI.mockResolvedValue(true);

    await act(async () => {
      render(<Layout />);
    });

    const formData = { name: 'C' };
    await act(async () => {
      await global.__routeContext.submitForm(formData);
    });

    const { useNavigate } = require('react-router-dom');
    const nav = useNavigate();
    expect(api.submitAPI).toHaveBeenCalledWith(formData);
    expect(nav).toHaveBeenCalledWith('/confirmation', { state: { formData } });
  });

  it('updateTimes replaces availableTimes', async () => {
    const first = ['08:00'], next = ['09:00','09:30'];
    api.fetchAPI
      .mockResolvedValueOnce(first)
      .mockResolvedValueOnce(next);

    await act(async () => {
      render(<Layout />);
    });

    await act(async () => {
      await global.__routeContext.updateTimes('2025-05-13');
    });

    expect(api.fetchAPI).toHaveBeenLastCalledWith(new Date('2025-05-13'));
    expect(global.__routeContext.availableTimes).toEqual(next);
  });
});
