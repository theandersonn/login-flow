/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';
import useAuth from '../hooks/use-auth';

const Context = createContext();

const UserProvider = ({ children }) => {
  const { authenticated, register, logout, login } = useAuth();
  return (
    <Context.Provider value={{ authenticated, register, logout, login }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
