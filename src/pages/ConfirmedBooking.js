import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import style from './pages.module.css';

const ConfirmedBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.formData) {
      navigate('/reservations', { replace: true });
    }
  }, [state, navigate]);

  if (!state?.formData) return null;

  return (
    <main aria-live="polite" className={style["confirmation-container"]}>
      <div className={style["confirmation-card"]}>
        <div className={style["confirmation-header"]}>
          <h1 className={style["confirmation-title"]}>Booking Confirmed!</h1>
          <p className={style["confirmation-subtitle"]}>Your reservation at Little Lemon has been successfully booked</p>
        </div>
        
        <div className={style["confirmation-details"]}>
          <h2 className={style["details-title"]}>Reservation Details</h2>
          <div className={style["detail-row"]}>
            <span className={style["detail-label"]}>Date:</span>
            <span className={style["detail-value"]}>{new Date(state.formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className={style["detail-row"]}>
            <span className={style["detail-label"]}>Time:</span>
            <span className={style["detail-value"]}>{state.formData.time}</span>
          </div>
          <div className={style["detail-row"]}>
            <span className={style["detail-label"]}>Guests:</span>
            <span className={style["detail-value"]}>{state.formData.guests}</span>
          </div>
          {state.formData.occasion && (
            <div className={style["detail-row"]}>
              <span className={style["detail-label"]}>Occasion:</span>
              <span className={style["detail-value"]}>{state.formData.occasion}</span>
            </div>
          )}
        </div>

        <button 
          className={style["confirmation-button"]}
          onClick={() => navigate('/')}
        >
          Return to Home
        </button>
      </div>
    </main>
  );
};

export default ConfirmedBooking;