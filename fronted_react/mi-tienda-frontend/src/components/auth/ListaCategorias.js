import React, { useState, useEffect } from 'react';

function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategorias = async () => {
      const token = localStorage.getItem('authToken'); // Obtener el token
      console.log('Token que se enviará:', token);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories/', {
          headers: {
            'Authorization': `Token  ${token}`, // Incluir el token en la cabecera
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategorias(data);
        setError('');
      } catch (error) {
        setError('Error al cargar las categorías.');
        console.error('Error fetching categorías:', error);
      }
    };

    fetchCategorias();
  }, []); // El array vacío como segundo argumento asegura que esto se ejecute solo una vez al montar el componente

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCategorias;