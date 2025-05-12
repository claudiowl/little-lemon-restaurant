import styles from './ui.module.css';
import Button from '../common/Button';
import restaurant from '../../assets/images/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';



const Hero = () => {

  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservations');
  };

    return (
      <div className={styles["hero-container"]}>
      <section className={styles["hero"]}>
      <div className={styles["hero-text"]}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Button variant="secondary"
        aria-label="Navigate to reservations page"
        onClick={handleReserveClick}
        >Reserve a Table</Button>
      </div>
      <div className={styles["hero-image"]}>
        <img src={restaurant} alt="Little Lemon Restaurant" />
      </div>
    </section>
    </div>
    );
  };

  export default Hero;