import React from 'react';
import RegistroUsuario from '../components/auth/RegistroUsuario'; // Ajusta la ruta si es necesario

function RegistroPage() {
  return (
    <div>
      <h1>Registro de Nuevo Usuario</h1>
      <RegistroUsuario /> {/* Aquí estás usando el componente */}
      {/* Posiblemente otros elementos de la página de registro */}
    </div>
  );
}

export default RegistroPage;