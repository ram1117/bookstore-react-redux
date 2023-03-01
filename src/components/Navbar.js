import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import UserIcon from '../icons/UserIcon';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles['logo-container']}>
      <h1 className={styles['nav-logo']}>Bookstore CMS</h1>
      <ul className="nav-list">
        <li className={styles['nav-list-items']}><Link to="/books">BOOKS</Link></li>
        <li className={styles['nav-list-items']}><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <UserIcon />
  </nav>
);

export default Navbar;
