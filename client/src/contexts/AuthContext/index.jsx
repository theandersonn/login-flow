import { createContext } from 'react';
import { useAuth } from '../../hooks/use-auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { authenticated, handleRegister, handleLogout, handleLogin } = useAuth();

  return (
    <AuthContext.Provider value={{ authenticated, handleRegister, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
};

export { AuthContext, AuthProvider };
