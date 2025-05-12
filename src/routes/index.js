import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Homepage from '../pages/Homepage'
import Bookingpage from '../pages/Bookingpage'
import ConfirmedBooking from '../pages/ConfirmedBooking'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/reservations" element={<Bookingpage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}