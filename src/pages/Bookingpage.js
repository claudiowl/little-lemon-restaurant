import { useOutletContext } from "react-router-dom";
import BookingForm from "../components/feature/BookingForm";
import style from "./pages.module.css";

export const BookingPage = () => {
  const { availableTimes, updateTimes, submitForm } = useOutletContext();

  return (
    <section className={style["booking-page"]}>
      <h1>Reserve a Table</h1>
      <div className={style["booking-content"]}>
        {/* Optional description or image */}
        <div className={style["booking-intro"]}>
          <p>Book your table at Little Lemon</p>
        </div>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}
export default BookingPage;