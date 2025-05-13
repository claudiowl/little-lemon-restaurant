import { useOutletContext } from "react-router-dom";
import BookingForm from "../components/feature/BookingForm";
import style from "./pages.module.css";

export const BookingPage = () => {
  const { availableTimes, updateTimes, submitForm } = useOutletContext();

  return (
    <section className={style["booking-page"]}>
     
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={submitForm}
        />
    </section>
  );
}
export default BookingPage;