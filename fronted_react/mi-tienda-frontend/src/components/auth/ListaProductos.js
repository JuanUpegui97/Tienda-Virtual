import React, { useState, useEffect } from 'react';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      const token = localStorage.getItem('authToken'); // Obtener el token
      console.log('Token que se enviará:', token);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/products/', {
          headers: {
            'Authorization': `Token  ${token}`, // Incluir el token en la cabecera
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductos(data);
        setError('');
      } catch (error) {
        setError('Error al cargar los productos.');
        console.error('Error fetching productos:', error);
      }
    };

    fetchProductos();
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.name} - Precio: ${producto.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;