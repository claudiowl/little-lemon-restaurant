// ConfirmedBooking.js
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ConfirmedBooking = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  // Fallback if accessed directly
  useEffect(() => {
    if (!state) {
      navigate('/reservations');
    }
  }, [state, navigate]); // Added navigate to dependencies

  if (!state) return null;


  return (
    <main aria-live="polite">
      <h1>Booking Confirmed!</h1>
      <div className="confirmation-details">
        <p>Date: {new Date(state.date).toLocaleDateString()}</p>
        <p>Time: {state.time}</p>
        <p>Guests: {state.guests}</p>
        {state.occasion && <p>Occasion: {state.occasion}</p>}
      </div>
    </main>
  );
};

export default ConfirmedBooking;