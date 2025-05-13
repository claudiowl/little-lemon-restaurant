import { useEffect, useState } from 'react';
import style from './feature.module.css';
import Button from '../common/Button';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (availableTimes.length > 0 && !formData.time) {
      setFormData(prev => ({ ...prev, time: availableTimes[0] }));
    }
  }, [availableTimes, formData.time]);

  const handleChange = async (e) => {
    const { id, value } = e.target;

    if (id === 'date') {
      await updateTimes(value);
      setFormData(prev => ({
        ...prev,
        [id]: value,
        time: availableTimes[0] || ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: id === 'guests' ? parseInt(value) : value
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitForm(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={style["booking-form"]}>

      <h2>Reserve a Table</h2>
      <p>Book your table at Little Lemon</p>
      <div className={style["form-group"]}>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className={style["form-group"]}>
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className={style["form-group"]}>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style["form-group"]}>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <Button
        variant="secondary"
        disabled={!formData.date || isSubmitting}
        loading={isSubmitting}
        onClick={handleSubmit}
      >
        Make Your Reservation
      </Button>
    </form>
  );
};

export default BookingForm;