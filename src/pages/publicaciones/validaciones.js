import { useState, useEffect } from 'react';
import { getTipoPublicaciones } from '../../api/publicaciones.js';

export const usePrecioVenta = () => {
  const [value, setValuePrecioVenta] = useState('');

  const validaPrecioVenta = (e) => {
    const { value } = e.target;
    const numberValue = parseFloat(value);
    if (!isNaN(numberValue) && numberValue > 0) {
      setValuePrecioVenta(value);
    } else if (value === '') {
      setValuePrecioVenta('');
    }
  };

  return {
    value,
    validaPrecioVenta,
  };
};

export const useTipoPublicaciones = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await getTipoPublicaciones();
        setOptions(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return {
    options,
    selectedOption,
    handleSelectChange,
    loading,
    error,
  };
};

export const usePaises = () => {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getPaises');
        const data = await response.json();
        setPaises(data.paises[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPaises();
  }, []);

  return {
    paises,
    loading,
    error,
  };
};
