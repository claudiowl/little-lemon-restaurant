import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}));

jest.mock('../common/Button', () => ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
));

import MenuCard from './MenuCard';

describe('MenuCard component', () => {
  const props = {
    title: 'Delicious Dish',
    price: '$12.50',
    description: 'A very tasty meal.',
    image: 'dish.jpg'
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders image, title, price, description and button', () => {
    const { container } = render(<MenuCard {...props} />);

    const img = screen.getByRole('img', { name: /delicious dish/i });
    expect(img).toHaveAttribute('src', 'dish.jpg');
    expect(img).toHaveAttribute('alt', 'Delicious Dish');

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Delicious Dish');

    expect(screen.getByText('$12.50')).toBeInTheDocument();

    expect(screen.getByText('A very tasty meal.')).toBeInTheDocument();

    const article = container.querySelector('article');
    expect(article).toHaveClass('menu-card');

    const btn = screen.getByRole('button', { name: /order a delivery/i });
    expect(btn).toBeInTheDocument();
  });

  it('navigates to /menu when the button is clicked', () => {
    render(<MenuCard {...props} />);

    const btn = screen.getByRole('button', { name: /order a delivery/i });
    fireEvent.click(btn);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/menu');
  });
});
