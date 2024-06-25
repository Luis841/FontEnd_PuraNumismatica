import React, { useState, useEffect } from 'react';
import { usePaises } from '../../pages/publicaciones/validaciones';

const FormRegistroMonedas = () => {
  const { paises, loading, error } = usePaises();
  const [selectedPais, setSelectedPais] = useState('');

  const handlePaisChange = async (e) => {
    const idPais = e.target.value;
    setSelectedPais(idPais);
    console.log(idPais);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Detalles de la moneda</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            País <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedPais}
            onChange={handlePaisChange}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>--Seleccionar--</option>
            {paises.map((pais) => (
              <option key={pais.idPais} value={pais.idPais}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Moneda Local <span className="text-red-500">*</span>
          </label>
          <select className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled>--Seleccionar--</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormRegistroMonedas;
