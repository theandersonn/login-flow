import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, Home } from './pages';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
