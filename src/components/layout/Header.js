import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import style from './layout.module.css';

const Header = () => {
  return (
    <div className={style['header-container']}>
    <header className={style.header}>
      <img src={logo} alt="Little Lemon Logo" className={style.logo} />
      <nav className={style.navbar}>
        <ul  className={style["nav-links"]}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/reservations">Reservations</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;