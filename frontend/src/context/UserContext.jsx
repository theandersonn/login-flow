/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';
import useAuth from '../hooks/use-auth';

const Context = createContext();

const UserProvider = ({ children }) => {
  const { register } = useAuth();
  return <Context.Provider value={{ register }}>{children}</Context.Provider>;
};

export { Context, UserProvider };
