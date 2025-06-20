import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Register from './Components/Auth/Register';
import RegistrationSuccess from './Components/Auth/RegistrationSuccess';
import Login from './Components/Auth/Login';
import ContactDashboard from './Components/Contact/ContactDashboard';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(token !== null);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <ContactDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

