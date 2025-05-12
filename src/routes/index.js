import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import ConfirmedBooking from '../pages/ConfirmedBooking'
import MenuPage from '../pages/MenuPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
          <Route path="/menu" element={<MenuPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}