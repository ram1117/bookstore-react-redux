import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="nav-log">Bookstore CMS</h1>
    <ul className="nav-list">
      <li className="nav-list-items"><Link to="/books">Books</Link></li>
      <li className="nav-list-items"><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
