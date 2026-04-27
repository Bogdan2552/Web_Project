import { api } from '../lib/http';
import type { LocationItem, RoomItem, SearchState } from '../types/domain';
export async function getLocations(params?: Partial<SearchState>){ const {data}=await api.get<{locations:LocationItem[]}>('/api/locations',{params}); return data.locations; }
export async function searchAvailability(params:SearchState){ const {data}=await api.get<{rooms:RoomItem[]}>('/api/rooms/availability',{params}); return data.rooms; }
