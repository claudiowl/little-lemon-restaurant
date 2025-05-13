import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import styles from './layout.module.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const aboutSection = document.getElementById('about-section');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles['header-container']}>
      <header className={styles.header}>
        <img 
          src={logo} 
          alt="Little Lemon Logo" 
          className={styles.logo} 
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
        />

        {isMobile && (
          <button
            className={`${styles['burger-menu']} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <nav
          className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}
          aria-hidden={isMobile && !isMenuOpen}
        >
          <ul className={styles["nav-links"]}>
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</NavLink></li>
            <li><NavLink to="/reservations" onClick={() => setIsMenuOpen(false)}>Reservations</NavLink></li>
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