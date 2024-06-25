import React from 'react';

const FormularioMonedas = ({ index, eliminarMoneda }) => {
  return (
    <div className=" mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Moneda #1</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">País</label>
          <select className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            
            {/* Otras opciones */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Moneda local</label>
          <select className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            
            {/* Otras opciones */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Condición de la moneda</label>
          <select className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {/* Opciones */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Valor facial</label>
          <input type="text" placeholder="Ej: 10 / 1000" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Año de Acuñación</label>
          <input type="text" placeholder="Ej: 1880 / 1914" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Código KM</label>
          <input type="text" placeholder="Ej: 206 / 206.2" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Material</label>
          <input type="text" placeholder="Ej: Plata / Copreniquel" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Moneda certificada</label>
          <select className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>No</option>
            {/* Otras opciones */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Diámetro</label>
          <input type="text" placeholder="Ej: 88.00" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Alineación</label>
          <input type="text" placeholder="Ej: Medalla" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Peso</label>
          <input type="text" placeholder="Ej: 12.00" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Grosor</label>
          <input type="text" placeholder="Ej: 2.00" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Forma</label>
          <input type="text" placeholder="Ej: Redonda" className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FormularioMonedas;
