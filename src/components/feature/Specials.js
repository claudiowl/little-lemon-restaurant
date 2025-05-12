import { menuItems } from '../../data/menuItems';
import MenuCard from './MenuCard';
import style from './feature.module.css';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Specials = () => {
    const navigate = useNavigate();

    const handleMenuClick = () => {
      navigate('/reservations');
    };

    return (
        <div className={style['specials-container']}>
        <section className={style["menu-section"]}>
            <div className={style["specials-header"]}>
                <h2>This Week's Specials!</h2>
                <Button variant="secondary" onClick={handleMenuClick} >Online Menu</Button>
            </div>
            <div className={style["menu-grid"]}>
                {menuItems.map((item) => (
                    <MenuCard key={item.id} {...item} />
                ))}
            </div>
        </section>
        </div>

    );
};

export default Specials;