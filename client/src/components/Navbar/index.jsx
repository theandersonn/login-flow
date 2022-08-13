import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

import './styles.css';

export const Navbar = () => {
  const { authenticated, handleLogout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>your brand</h1>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        {authenticated && (
          <li onClick={() => handleLogout()} aria-hidden="true">
            Sair
          </li>
        )}
      </ul>
    </nav>
  );
};
