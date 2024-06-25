import React from 'react';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';

function Product({ name, price, imageUrl }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-2 rounded-t-lg" src={imageUrl} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">₡{price}</span>
          <a
            href="https://wa.me/your-number" // Reemplaza "your-number" con tu número de WhatsApp
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WhatsAppIcon}
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
