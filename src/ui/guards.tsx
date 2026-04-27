import { Navigate } from 'react-router-dom';
import { useAuthState } from '../state/AuthContext';
export function GuestOnly({children}:{children:React.ReactNode}){ const {user}=useAuthState(); if(user) return <Navigate to={user.role==='admin'?'/admin/overview':'/bookings'} replace />; return <>{children}</>; }
export function UserOnly({children}:{children:React.ReactNode}){ const {user}=useAuthState(); if(!user) return <Navigate to="/signin" replace />; return <>{children}</>; }
export function AdminOnly({children}:{children:React.ReactNode}){ const {user,isAdmin}=useAuthState(); if(!user) return <Navigate to="/signin" replace />; if(!isAdmin) return <Navigate to="/" replace />; return <>{children}</>; }
