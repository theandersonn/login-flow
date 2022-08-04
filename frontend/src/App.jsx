import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, Home, Error } from './pages';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './hooks/use-auth';

import './styles/global.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
