import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginUsuario() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setError('');
        localStorage.setItem('authToken', data.token);
        console.log('Login Exitoso. Token:', data.token);
        navigate('/'); // Redirige a la página principal
      } else {
        setError(JSON.stringify(data));
        setToken('');
      }
    } catch (error) {
      setError('Error al conectar con el servidor.');
      setToken('');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p style={{ color: 'green' }}>Login exitoso. Token: {token}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginUsuario;