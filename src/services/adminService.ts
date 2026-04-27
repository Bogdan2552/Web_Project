import { api, authHeader } from '../lib/http';
import type { DashboardPayload, LocationItem } from '../types/domain';
export async function getDashboard(token:string){ const {data}=await api.get<DashboardPayload>('/api/admin/dashboard',{headers:authHeader(token)}); return data; }
export async function getAdminLocations(token:string){ const {data}=await api.get<{locations:LocationItem[]}>('/api/admin/locations',{headers:authHeader(token)}); return data.locations; }
export async function createAdminLocation(token:string,payload:Omit<LocationItem,'id'|'roomCount'>){ const {data}=await api.post('/api/admin/locations',payload,{headers:authHeader(token)}); return data as {message:string;location:LocationItem}; }
export async function updateAdminLocation(token:string,id:number,payload:Omit<LocationItem,'id'|'roomCount'>){ const {data}=await api.put(`/api/admin/locations/${id}`,payload,{headers:authHeader(token)}); return data as {message:string;location:LocationItem}; }
export async function deleteAdminLocation(token:string,id:number){ const {data}=await api.delete(`/api/admin/locations/${id}`,{headers:authHeader(token)}); return data as {message:string}; }
