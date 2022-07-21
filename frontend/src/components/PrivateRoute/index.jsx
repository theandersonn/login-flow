import { useContext } from 'react';
import Proptypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { Context } from '../../context/UserContext';

const PrivateRoute = ({ Component, ...rest }) => {
  const { authenticated } = useContext(Context);
  return authenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  Component: Proptypes.elementType,
};

export default PrivateRoute;
