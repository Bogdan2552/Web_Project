import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { clearSession, readSession, storeSession } from '../lib/session';
import { loginUser, registerUser } from '../services/authService';
import type { AuthUser } from '../types/domain';
interface AuthContextValue { user: AuthUser | null; isAdmin: boolean; login:(email:string,password:string)=>Promise<void>; register:(name:string,email:string,password:string)=>Promise<void>; logout:()=>void; }
const AuthContext=createContext<AuthContextValue|null>(null);
function parseStoredUser(raw:string|null){ if(!raw) return null; try { return JSON.parse(raw) as AuthUser; } catch { return null; } }
export function AuthProvider({children}:{children:React.ReactNode}){ const [user,setUser]=useState<AuthUser|null>(null); useEffect(()=>{ setUser(parseStoredUser(readSession())); },[]); const value=useMemo<AuthContextValue>(()=>({ user, isAdmin:user?.role==='admin', async login(email,password){ const response=await loginUser(email,password); const nextUser={...response.user,token:response.token}; setUser(nextUser); storeSession(JSON.stringify(nextUser)); }, async register(name,email,password){ const response=await registerUser(name,email,password); const nextUser={...response.user,token:response.token}; setUser(nextUser); storeSession(JSON.stringify(nextUser)); }, logout(){ clearSession(); setUser(null); } }),[user]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; }
export function useAuthState(){ const value=useContext(AuthContext); if(!value) throw new Error('useAuthState must be used inside AuthProvider'); return value; }
