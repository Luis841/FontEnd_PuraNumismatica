import React from 'react';
import { usePrecioVenta, useTipoPublicaciones, usePaises } from './validaciones';

import FormRegistroMonedas from '../../components/publicaciones/FormRegistroMonedas';
import FormRegistroBilletes from '../../components/publicaciones/FormRegistroBilletes';
import FormRegistroSuministros from '../../components/publicaciones/FormRegistroSuministros';

const FormularioRegistro = () => {

  const { value, validaPrecioVenta } = usePrecioVenta();
  const { options, selectedOption, handleSelectChange, loading, error } = useTipoPublicaciones();
  const { paises, loading: loadingPaises, error: errorPaises } = usePaises();


  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="w-full mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Detalles de la publicación</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Nombre de la publicación <span className="text-red-500">*</span>
          </label>
          <input type="text" placeholder="1 colón resellado / 500 colones ceros delgados" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Precio de venta <span className="text-red-500">*</span>
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm font-bold"> ₡ </span>
            <input type="number" value={value} onChange={validaPrecioVenta} min="5.00" step="5.00" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm font-bold">.00</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Tipo de publicación <span className="text-red-500">*</span>
          </label>
          <select value={selectedOption} onChange={handleSelectChange} className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option selected disabled></option>
            {options.map((option) => (
              <option key={option.idTipoArticulo} value={option.idTipoArticulo}>
                {option.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6">
        {selectedOption === "1" && <FormRegistroMonedas />}
        {selectedOption === "2" && <FormRegistroBilletes />}
        {selectedOption === "3" && <FormRegistroSuministros />}
      </div>
    </div>
  );
};

export default FormularioRegistro;
