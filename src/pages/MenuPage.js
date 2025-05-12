import style from './pages.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const MenuMaintenance = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <main className={style.maintenanceContainer}>
      <div className={style.maintenanceContent}>
        <h1 className={style.title}>Menu Under Maintenance</h1>
        <p className={style.message}>
          Our chefs are busy updating our delicious Mediterranean offerings.
          Please check back soon for our new menu!
        </p>
        <p className={style.contact}>
          In the meantime, feel free to call us at <strong>(555) 123-4567</strong>
          for our current specials.
        </p>
        <Button
          variant="primary"
          onClick={handleHomeClick}
          aria-label="Return to home page"
        >
          Return to Home
        </Button>
      </div>
    </main>
  );
};

export default MenuMaintenance;