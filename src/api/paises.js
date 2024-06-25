const API_BASE_URL = 'http://localhost:5000/api/';

export const getPaises = async () => {
  try {
    const response = await fetch(API_BASE_URL + 'getPaises');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.paises[0];
  } catch (error) {
    throw error;
  }
};
