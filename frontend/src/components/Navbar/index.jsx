import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/UserContext';

export const Navbar = () => {
  const { authenticated, logout } = useContext(Context);

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
