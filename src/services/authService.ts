import { api } from '../lib/http';
import type { AuthUser } from '../types/domain';
interface AuthResponse { token?: string; user: AuthUser; }
export async function registerUser(name:string,email:string,password:string){ const {data}=await api.post<AuthResponse>('/api/auth/register',{name,email,password}); return data; }
export async function loginUser(email:string,password:string){ const {data}=await api.post<AuthResponse>('/api/auth/login',{email,password}); return data; }
