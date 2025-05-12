import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });

    // classes basadas en common.module.css (identity-obj-proxy devuelve la clave del módulo)
    expect(btn).toHaveClass('btn');
    expect(btn).toHaveClass('btn--primary');
    expect(btn).not.toBeDisabled();
    expect(btn).toHaveAttribute('type', 'button');
    expect(btn).toHaveTextContent('Click me');
  });

  it('renders secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole('button', { name: /secondary/i });
    expect(btn).toHaveClass('btn--secondary');
  });

  it('renders danger variant', () => {
    render(<Button variant="danger">Danger!</Button>);
    const btn = screen.getByRole('button', { name: /danger!/i });
    expect(btn).toHaveClass('btn--danger');
  });

  it('honors the disabled prop', () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Won’t click
      </Button>
    );
    const btn = screen.getByRole('button', { name: /won’t click/i });
    expect(btn).toBeDisabled();

    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('shows loading state', () => {
    const onClick = jest.fn();
    render(
      <Button loading onClick={onClick}>
        Submit
      </Button>
    );
    const btn = screen.getByRole('button', { name: /loading\.\.\./i });
    expect(btn).toBeDisabled();
    expect(btn).toHaveTextContent('Loading...');

    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('uses custom type when passed', () => {
    render(
      <Button type="submit">
        Send
      </Button>
    );
    const btn = screen.getByRole('button', { name: /send/i });
    expect(btn).toHaveAttribute('type', 'submit');
  });

  it('calls onClick when clicked and not disabled/loading', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click!</Button>);
    const btn = screen.getByRole('button', { name: /click!/i });

    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
