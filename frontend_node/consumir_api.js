// Ejemplo en Node.js
async function obtenerProductos() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/');
      const data = await response.json();
      console.log(data);
      // Aquí puedes manipular y mostrar los datos en tu frontend
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  }
  


  async function obtnerCategoria(){
      try{
        const response = await fetch('http://127.0.0.1:8000/api/categories/');
        const data = await response.json();
        console.log(data);
      } catch(error){
        console.error('Error al obtener categorias:', error);
      }

  }

  obtenerProductos();
  obtnerCategoria();