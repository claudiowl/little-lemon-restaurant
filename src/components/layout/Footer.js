import style from './layout.module.css';

export default function Footer() {
  return (
    <footer className={style["footer"]}>
      <div className={style["footer-content"]}>
        <p>&copy; 2025 My Website</p>
        <nav className={style["footer-nav"]}>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}