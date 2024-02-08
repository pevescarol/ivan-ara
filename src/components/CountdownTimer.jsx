'use client'
import { useState, useEffect } from "react";

export const CountdownTimer = ({ targetDate }) => {
  const calculateTimeToEvent = () => {
    const eventDate = new Date("2024-04-05T10:30:00-03:00"); // 5 de abril a las 10:30 AM, hora de Buenos Aires
    const currentDate = new Date();
    const timeRemaining = eventDate.getTime() - currentDate.getTime();
  
    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex gap-[10px]">
      <div className="flex flex-col"><span className="text-3xl font-semibold">{countdown.days}</span> <span className="text-base font-medium">DIAS</span></div>
      <div className="flex flex-col"><span>{countdown.hours}</span> HORAS</div>
      <div className="flex flex-col"><span>{countdown.minutes}</span> MINUTOS</div>
      <div className="flex flex-col"><span>{countdown.seconds}</span> SEGUNDOS</div>
    </div>
  );
};
