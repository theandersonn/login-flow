import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, Home, Error } from './pages';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
