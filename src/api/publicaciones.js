const API_BASE_URL = 'http://localhost:5000/api/';

export const getTipoPublicaciones = async () => {
  try {
    const response = await fetch(API_BASE_URL + 'getTipoPublicaciones');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.tiposPublicaciones[0];
  } catch (error) {
    throw error;
  }
};

export const getPaisPublicaciones = async () =>{
  try{
    const response = await fetch(API_BASE_URL + 'get');
  } catch (error) {
    throw error;
  }
}