import Proptypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const PrivateRoute = ({ Component, ...rest }) => {
  const { authenticated } = useAuth();
  return authenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  Component: Proptypes.elementType,
};

export default PrivateRoute;
