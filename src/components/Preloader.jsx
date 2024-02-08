'use client'
import React, { useState, useEffect } from 'react';

// Definir el componente Preloader
const Preloader = () => {
  // Estado para controlar la visibilidad del preloader
  const [loading, setLoading] = useState(true);

  // Simula un tiempo de carga de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cuando termina el tiempo de carga, se desactiva el preloader
    }, 2000);

    // Limpiar el temporizador al desmontar el componente para evitar fugas de memoria
    return () => clearTimeout(timer);
  }, []);

  // Renderizar el preloader si loading es true
  return (
    <div className={`preloader ${loading ? '' : 'hidden'}`}>
      <div className="bg-[#faf7ee] fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
        <span className="cursiva text-[#ADA084] text-4xl">¡Nos casamos!</span>
      </div>
    </div>
  );
};

// Exporta el componente Preloader
export default Preloader;