import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header__wrapper}>
      <nav className={styles.header__nav}>
        <Link to="/" className={styles.nav__link}>
          Home
        </Link>
        <Link to="/Gallery" className={styles.nav__link}>
          Gallery
        </Link>
        <Link to="/Contacts" className={styles.nav__link}>
          Contacts
        </Link>
      </nav>
    </div>
  );
}

export default Header;
