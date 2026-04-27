import { validateAuth, validateSearchForm } from './validation';
describe('validation helpers', () => {
  it('validates auth fields', () => {
    const result = validateAuth('', '', '123', true);
    expect(result.name).toBeDefined();
    expect(result.email).toBeDefined();
    expect(result.password).toBeDefined();
  });
  it('validates search date order', () => {
    const result = validateSearchForm({ checkIn:'2026-05-02', checkOut:'2026-05-01', guests:1, search:'', city:'', rating:'', freeParking:false, wellnessCenter:false });
    expect(result.checkOut).toMatch(/later than/i);
  });
});
