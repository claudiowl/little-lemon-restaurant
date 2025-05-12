// src/components/Testimonials/Testimonials.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials component', () => {
  let container;

  beforeEach(() => {
    ({ container } = render(<Testimonials />));
  });

  it('renders the section with the correct class', () => {
    const section = container.querySelector('section.testimonials-section');
    expect(section).toBeInTheDocument();
  });

  it('renders an H2 with text "Testimonials"', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /testimonials/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders exactly four testimonial cards', () => {
    const cards = container.querySelectorAll('.testimonial-card');
    expect(cards).toHaveLength(4);
  });

  it('each card displays a rating, name, and comment', () => {
    const cards = container.querySelectorAll('.testimonial-card');

    cards.forEach(card => {
      const rating = card.querySelector('.rating');
      const name   = card.querySelector('.name');
      const comment= card.querySelector('p');

      expect(rating).toHaveTextContent('★★★★★');
      expect(name).toHaveTextContent('Home');
      expect(comment).toHaveTextContent('Restaurant review text');
    });
  });

  it('renders the grid container with correct class', () => {
    const grid = container.querySelector('.testimonials-grid');
    expect(grid).toBeInTheDocument();
  });
});
