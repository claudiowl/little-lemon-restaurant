import Button from '../common/Button';
import style from './ui.module.css';
import { useNavigate } from 'react-router-dom';

const MenuCard = ({ title, price, description, image }) => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/reservations');
  };

        return (
          <article className={style["menu-card"]}>
            <img src={image} alt={title} className={style["card-image"]} />
            <div className={style["card-content"]}>
              <div className={style["card-header"]}>
                <h3>{title}</h3>
                <span className={style["price"]}>{price}</span>
              </div>
              <p>{description}</p>
              <Button variant='link' onClick={handleMenuClick}>Order a delivery →</Button>
            </div>
          </article>
        );
      };

export default MenuCard;