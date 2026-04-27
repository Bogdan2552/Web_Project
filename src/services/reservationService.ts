import { api, authHeader } from '../lib/http';
import type { ReservationItem } from '../types/domain';
export async function createReservation(token:string,payload:{roomId:number;checkIn:string;checkOut:string;guests:number}){ const {data}=await api.post('/api/reservations',payload,{headers:authHeader(token)}); return data as {message:string;reservationId:number}; }
export async function getMyReservations(token:string){ const {data}=await api.get<{reservations:ReservationItem[]}>('/api/reservations/me',{headers:authHeader(token)}); return data.reservations; }
export async function cancelReservation(token:string,id:number){ const {data}=await api.delete<{message:string}>(`/api/reservations/${id}`,{headers:authHeader(token)}); return data; }
export async function getAllReservations(token:string){ const {data}=await api.get<{reservations:ReservationItem[]}>('/api/admin/reservations',{headers:authHeader(token)}); return data.reservations; }
