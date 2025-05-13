import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useReducer,useEffect } from 'react';
import {fetchAPI, submitAPI} from '../../api';


const timesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.times;
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

export default function Layout() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();
  const initializeTimes = async () => {
    try {
      const today = new Date();
      const times = await fetchAPI(today);
      dispatch({ type: 'INITIALIZE_TIMES', times });
    } catch (error) {
   alert('Error initializing times:', error);
      dispatch({ type: 'INITIALIZE_TIMES', times: ['17:00', '17:30', '19:00'] });
    }
  };

  const updateTimes = async (dateString) => {
    try {
      const date = new Date(dateString);
      const times = await fetchAPI(date);
      dispatch({ type: 'UPDATE_TIMES', times });
    } catch (error) {
      alert('Error updating times:', error);
    }
  };

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/confirmation', { state: { formData } });
      } else {
        alert('Booking submission failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ availableTimes, updateTimes, submitForm }} />
      </main>
      <Footer />
    </>
  );
}