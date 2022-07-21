import { createContext, useMemo } from 'react';
import Proptypes from 'prop-types';
import useAuth from '../hooks/use-auth';

const Context = createContext();

const UserProvider = ({ children }) => {
  const { authenticated, register, logout, login } = useAuth();
  const userProviderValue = useMemo(
    () => ({ authenticated, register, logout, login }),
    [authenticated, login, logout, register]
  );
  return (
    <Context.Provider value={userProviderValue}>{children}</Context.Provider>
  );
};

UserProvider.propTypes = {
  children: Proptypes.node,
};

export { Context, UserProvider };
