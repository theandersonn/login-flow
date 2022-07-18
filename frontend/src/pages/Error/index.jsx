import { Link } from 'react-router-dom';

export const Error = () => (
  <section>
    <h1>Error</h1>
    <p>Para navegar você precisa estar logado</p>
    <Link to="/login">login</Link>
  </section>
);
