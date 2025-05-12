// ConfirmedBooking.js
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import style from './pages.module.css';

const ConfirmedBooking = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/reservations');
    }
  }, [state, navigate]);

  if (!state) return null;


  return (
    <main aria-live="polite">
      <h1>Booking Confirmed!</h1>
      <div className={style["confirmation-details"]}>
        <p>Date: {new Date(state.date).toLocaleDateString()}</p>
        <p>Time: {state.time}</p>
        <p>Guests: {state.guests}</p>
        {state.occasion && <p>Occasion: {state.occasion}</p>}
      </div>
    </main>
  );
};

export default ConfirmedBooking;