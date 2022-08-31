import { useContext } from 'react';
import Proptypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  Component: Proptypes.elementType,
};

export default PrivateRoute;
