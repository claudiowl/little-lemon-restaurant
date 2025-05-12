import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import styles from './layout.module.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleAboutClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const aboutSection = document.getElementById('about-section');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles['header-container']}>
      <header className={styles.header}>
        <img 
          src={logo} 
          alt="Little Lemon Logo" 
          className={styles.logo} 
          onClick={handleLogoClick}
          role="button"  // Add for accessibility
          tabIndex={0}   // Make it focusable
        />
        <nav className={styles.navbar}>
          <ul className={styles["nav-links"]}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li>
              <NavLink 
                to="/#about-section" 
                onClick={handleAboutClick}
                aria-label="About Little Lemon restaurant"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;