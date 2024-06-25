import React, { useEffect, useState } from 'react';
import ProductoMain from '../components/productos/productoMain';
import { fetchPublicacionesMain } from '../api/productos';

const Inicio = () => {
  const [publicaciones, setPublicaciones] = useState(null);

  useEffect(() => {
    const getPublicaciones = async () => {
      try {
        const data = await fetchPublicacionesMain();
        setPublicaciones(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPublicaciones();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicaciones && publicaciones.map((producto, index) => (
              <ProductoMain key={index} name={producto.nombre} price={producto.precio} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
