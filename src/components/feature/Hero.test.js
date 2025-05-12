import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from './Hero';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}));

describe('Hero component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders title, subtitle, description and image', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Little Lemon');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Chicago');
    expect(
      screen.getByText(/family owned Mediterranean restaurant/i)
    ).toBeInTheDocument();
    const img = screen.getByAltText('Little Lemon Restaurant');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBeTruthy();
  });

  it('calls navigate("/reservations") when the button is clicked', () => {
    render(<Hero />);

    const button = screen.getByRole('button', {
      name: /navigate to reservations page/i
    });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/reservations');
  });
});
