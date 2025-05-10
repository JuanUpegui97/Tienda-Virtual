import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import RegistroPage from './pages/RegistroPage';
import LoginPage from './pages/LoginPage';
import ListaCategorias from './components/auth/ListaCategorias';
import ListaProductos from './components/auth/ListaProductos';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
    console.log('Estado isLoggedIn al cargar o cambiar ruta:', isLoggedIn, location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
    console.log('Estado isLoggedIn después de logout:', isLoggedIn);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/register" element={<RegistroPage />} />
        <Route path="/login" element={<LoginPage onLogin={setIsLoggedIn} />} /> {/* Pasa setIsLoggedIn como prop */}
        <Route path="/" element={
          <div>
            <h1>Bienvenido a mi Tienda Virtual</h1>
            {isLoggedIn && (
              <>
                <ListaCategorias />
                <ListaProductos />
              </>
            )}
            {!isLoggedIn && <p>Por favor, inicia sesión para ver las categorías y productos.</p>}
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;