import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { SignUpPage } from './SignUpPage';
vi.mock('../state/AuthContext', () => ({ useAuthState: () => ({ register: vi.fn(), user:null, isAdmin:false }) }));
describe('SignUpPage', () => {
  it('shows validation errors', async () => {
    render(<MemoryRouter><SignUpPage /></MemoryRouter>);
    await userEvent.click(screen.getByRole('button', { name: /create account/i }));
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });
});
