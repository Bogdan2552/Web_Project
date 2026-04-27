import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';
describe('LandingPage', () => {
  it('renders landing content', () => {
    render(<MemoryRouter><LandingPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /book coastal escapes/i })).toBeInTheDocument();
  });
});
