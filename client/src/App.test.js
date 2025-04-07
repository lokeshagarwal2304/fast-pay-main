import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders navbar with brand name "Fast-Pay"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const brandElement = screen.getByRole('link', { name: /Fast-Pay/i });
    expect(brandElement).toBeInTheDocument();
  });
});
