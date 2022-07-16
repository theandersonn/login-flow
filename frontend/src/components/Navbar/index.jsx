import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/UserContext';

export const Navbar = () => {
  const { authenticated } = useContext(Context);

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      {authenticated && <p>Você está logado</p>}

      <li>
        <Link to="/">Sair</Link>
      </li>
    </ul>
  );
};
