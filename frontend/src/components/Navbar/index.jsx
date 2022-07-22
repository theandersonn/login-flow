import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

export const Navbar = () => {
  const { authenticated, logout } = useAuth();

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      {authenticated && (
        <li onClick={() => logout()} aria-hidden="true">
          Sair
        </li>
      )}
    </ul>
  );
};
