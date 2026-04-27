import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { SignInPage } from './SignInPage';
vi.mock('../state/AuthContext', () => ({ useAuthState: () => ({ login: vi.fn(), user:null, isAdmin:false }) }));
describe('SignInPage', () => {
  it('shows validation errors', async () => {
    render(<MemoryRouter><SignInPage /></MemoryRouter>);
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
  });
});
