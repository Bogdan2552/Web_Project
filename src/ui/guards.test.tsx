import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserOnly } from './guards';
vi.mock('../state/AuthContext', () => ({ useAuthState: () => ({ user: { id:1, name:'User', email:'u@test.com', role:'user' }, isAdmin:false }) }));
describe('UserOnly', () => {
  it('renders content for authenticated users', () => {
    render(<MemoryRouter><UserOnly><div>Secret area</div></UserOnly></MemoryRouter>);
    expect(screen.getByText('Secret area')).toBeInTheDocument();
  });
});
