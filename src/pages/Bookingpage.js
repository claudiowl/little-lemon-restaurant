import { useOutletContext } from "react-router-dom";
import BookingForm from "../components/ui/BookingForm";

export const Bookingpage = () => {
  const { availableTimes, updateTimes, submitForm } = useOutletContext();

  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <div className="booking-content">
        {/* Optional description or image */}
        <div className="booking-intro">
          <p>Book your table at Little Lemon</p>
        </div>
        {/* Integrated BookingForm with props */}
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}  // This must be provided
        />
      </div>
    </section>
  );
}
export default Bookingpage;