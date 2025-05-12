import React from 'react';


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}));


jest.mock('../common/Button', () => {
  const React = require('react');
  return ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  );
});

jest.mock('./MenuCard', () => {
  const React = require('react');
  return ({ title }) => <div data-testid="menu-card">{title}</div>;
});


import { render, screen, fireEvent } from '@testing-library/react';
import Specials from './Specials';
import { menuItems } from '../../data/menuItems';

describe('Specials component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the heading and Online Menu button', () => {
    render(<Specials />);

    expect(
      screen.getByRole('heading', { level: 2 })
    ).toHaveTextContent("This Week's Specials!");

    const button = screen.getByRole('button', { name: /online menu/i });
    expect(button).toBeInTheDocument();
  });

  it('navigates to /reservations when Online Menu is clicked', () => {
    render(<Specials />);

    const button = screen.getByRole('button', { name: /online menu/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/reservations');
  });

  it('renders one MenuCard per item in menuItems', () => {
    render(<Specials />);

    const cards = screen.getAllByTestId('menu-card');
    expect(cards).toHaveLength(menuItems.length);

    menuItems.forEach(item => {
      const matches = screen.getAllByText(item.title);
      expect(matches.length).toBeGreaterThanOrEqual(1);
    });
  });
});
