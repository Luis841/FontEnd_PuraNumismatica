const API_BASE_URL = '/api';

export const fetchPublicacionesMain = async () => {
    try {
      const response = await fetch('/api/mainPublicaciones');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data.publiciones;
    } catch (error) {
      console.error('Error fetching publicaciones:', error);
      throw error;
    }
  };
  
  // src/api/fetchUsuarios.js
  export const fetchUsuarios = async () => {
    try {
      const response = await fetch('/api/usuarios');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data.usuarios;
    } catch (error) {
      console.error('Error fetching usuarios:', error);
      throw error;
    }
  };