import { Navigate, Route, Routes } from 'react-router-dom';
import { AppFrame } from './ui/AppFrame';
import { AdminOnly, GuestOnly, UserOnly } from './ui/guards';
import { LandingPage } from './views/LandingPage';
import { AboutPage } from './views/AboutPage';
import { SignInPage } from './views/SignInPage';
import { SignUpPage } from './views/SignUpPage';
import { ExploreRoomsPage } from './views/ExploreRoomsPage';
import { BookingHistoryPage } from './views/BookingHistoryPage';
import { AdminOverviewPage } from './views/admin/AdminOverviewPage';
import { AdminBookingsPage } from './views/admin/AdminBookingsPage';
import { AdminDestinationsPage } from './views/admin/AdminDestinationsPage';
import { NotFoundPage } from './views/NotFoundPage';
export function App(){ return <Routes><Route element={<AppFrame/>}><Route index element={<LandingPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/discover" element={<ExploreRoomsPage/>}/><Route path="/signin" element={<GuestOnly><SignInPage/></GuestOnly>}/><Route path="/signup" element={<GuestOnly><SignUpPage/></GuestOnly>}/><Route path="/bookings" element={<UserOnly><BookingHistoryPage/></UserOnly>}/><Route path="/admin" element={<AdminOnly><Navigate to="/admin/overview" replace /></AdminOnly>}/><Route path="/admin/overview" element={<AdminOnly><AdminOverviewPage/></AdminOnly>}/><Route path="/admin/bookings" element={<AdminOnly><AdminBookingsPage/></AdminOnly>}/><Route path="/admin/destinations" element={<AdminOnly><AdminDestinationsPage/></AdminOnly>}/><Route path="*" element={<NotFoundPage/>}/></Route></Routes>; }
