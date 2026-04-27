import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RoomTile } from './RoomTile';
const room = { id:1, name:'Blue Bay Suite', type:'Suite', capacity:2, pricePerNight:160, description:'Sea-facing room', location:{ id:11, name:'Paradise Varna', city:'Varna', address:'Main street', rating:4.8, hasFreeParking:true, hasWellnessCenter:true } };
describe('RoomTile', () => {
  it('fires reserve callback', async () => {
    const onReserve = vi.fn();
    render(<RoomTile room={room} onReserve={onReserve} />);
    await userEvent.click(screen.getByRole('button', { name: /reserve/i }));
    expect(onReserve).toHaveBeenCalledWith(room);
  });
});
