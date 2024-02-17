'use client'
import Image from "next/image";
import logo from '../../public/logo-name2.png'
import {FaLocationDot, FaCalendarDays} from 'react-icons/fa6'
import bottomBg from '../../public/bg-web2.png'
import titleLogo from '../../public/l10.png'
import Link from "next/link";
import Preloader from "@/components/Preloader";
import topHeader from '../../public/bg-web.png'
import civilIcon from '../../public/civil.svg'
import ribbon from '../../public/ribbon01.png'
import fiestaIcon from '../../public/fiesta.svg'
import ribbonFiesta from '../../public/fiesta01.png'
import giftIcon from '../../public/regalo.svg'
import {FaChevronDown} from 'react-icons/fa'
import dresscode from '../../public/dresscode2.svg'

export default function Home() {

  // Detectar el tipo de dispositivo
  function detectarDispo() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Si el usuario esta en un dispositivo iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS'
    }
    // Si el usuario esta e cualquier otro dispositivo
    return 'otros'
  }

  // Función para generar la URL del calendario para la primera fecha
  function obtenerURLCalendarioFecha1(dispositivo) {
    if (dispositivo === 'iOS') {
      return 'https://calndr.link/e/7dIBtAzJFE?s=apple';
    } else {
      return 'https://calndr.link/e/7dIBtAzJFE?s=google';
    }
  }

  // Función para generar la URL del calendario para la segunda fecha
  function obtenerURLCalendarioFecha2(dispositivo) {
    if (dispositivo === 'iOS') {
      return 'https://calndr.link/e/MwLPByEXQd?s=apple';
    } else {
      return 'https://calndr.link/e/MwLPByEXQd?s=google';
    }
  }

  // Función para manejar el clic en el botón de la primera fecha
  function handleClickFecha1() {
    const dispositivo = detectarDispo();
    const url = obtenerURLCalendarioFecha1(dispositivo);
    window.location.href = url;
  }

  // Función para manejar el clic en el botón de la segunda fecha
  function handleClickFecha2() {
    const dispositivo = detectarDispo();
    const url = obtenerURLCalendarioFecha2(dispositivo);
    window.location.href = url;
  }
  // // Funcion para redirigir al link correspondiente
  // function obtenerURLCalendario() {
  //   const dispo = detectarDispo()

  //   // Asignar el link segun corresponda
  //   if (dispo === 'iOS') {
  //     return 'https://calndr.link/e/7dIBtAzJFE?s=apple'
  //   } else {
  //     return 'https://calndr.link/e/7dIBtAzJFE?s=google'
  //   }
  // }

  // function handleClick(e) {
  //   const url = obtenerURLCalendario()
  //   window.location.href = url
  // }

  return (
    <main className="flex min-h-screen justify-center items-center m-auto">
      <Preloader />
      <section className="relative flex flex-col items-center justify-start gap-2 p-14 border border-[#ada084] max-w-[500px] w-full h-full ">
        {/* <Image src={backBg} alt="background" width={450} height={1000} className="absolute w-full h-full top-0 z-10" /> */}
        <Image src={topHeader} alt="background" width={500} height={400} className="absolute object-cover  top-0 z-10" />
        <div className="mt-12 mb-8">
          <Image src={logo} alt="logo IA" width={180} height={330} className="z-50" />
        </div>
        <div className="relative -top-4 text-center z-50">
          <span className="cursiva text-[#ADA084] text-2xl">¡Nos casamos!</span>
          <Image src={titleLogo} alt="logo IA" width={180} height={250} className="z-50 pt-3" />
          {/* <h1 className="text-[#746B58] text-5xl text__main uppercase text-center pt-1">Ivan <br /> <span className="text-[#ADA084]">&</span> Ara</h1> */}
        </div>
        <p className="text-[#ADA084] text-[16px] text-center px-6">Nos encantaria que seas parte de un momento muy especial en nuestras vidas. <br />¡Acompañanos!</p>
        <FaChevronDown className="animate-bounce text-2xl text-[#ADA084] mt-12" />
        <p className="text-4xl text-center cursiva text-[#746B58] mt-6 pt-6">Civil y Fiesta</p>
        {/* 
        <p className=" text-[#ADA084] mb-6">La celebración se llevará a cabo:</p> */}

        <div className="flex flex-col items-center gap-y-6 mt-8">
          <div className=" w-[300px] rounded-lg border-dotted border-[4px] border-[#ADA084]  flex flex-col items-center gap-y-2 py-6">
            <div className="flex flex-col items-center">
              <Image src={civilIcon} alt="" width={60} height={80} />
              <Image src={ribbon} alt="" width={120} height={80} className=" w-full relative -top-2"/>
            </div>
            
              <p className="text-[#ADA084] text-lg text-center">Viernes <span className="font-bold text-[#746B58]">05 de Abril</span><br />a las <span className="font-bold text-[#746B58]">10:30</span> hs.</p>
              <Link 
                href='/'
                className="bg-[#faf7ee] border-2 border-[#A5B2A9] text-[#A5B2A9] text-base mt-1 font-bold py-2 px-4  flex items-center gap-x-2 rounded-3xl"
                onClick={handleClickFecha1}
              >
                <FaCalendarDays /> Guardar Fecha
              </Link>
            
              <p className="text-[#ADA084] text-[16px] pt-2 text-center">En el Registro Civil Villa Martelli, <br /> Colombia 284.</p>
              <Link href='https://maps.app.goo.gl/sLQTdGhiGzcv6Fz48' target="_blank" className="bg-[#faf7ee] border-2 border-[#A5B2A9] text-[#A5B2A9] text-base mt-1 font-bold py-2 px-4 flex  items-center gap-x-2 rounded-3xl">
                <FaLocationDot /> Ver Mapa
              </Link>
            
          </div>
          
          <div className=" w-[300px] rounded-lg border-dotted border-[4px] border-[#ADA084] flex flex-col items-center gap-y-2 py-6">
            <div className="flex flex-col items-center">
              <Image src={fiestaIcon} alt="" width={60} height={80} />
              <Image src={ribbonFiesta} alt="" width={120} height={80} className=" w-full relative -top-2"/>
            </div>
            
              <p className="text-[#ADA084] text-lg text-center">Sábado <span className="font-bold text-[#746B58]">06 de Abril</span><br />a las <span className="font-bold text-[#746B58]">19:00</span> hs.</p>
              <Link 
                href='/'
                className="bg-[#faf7ee] border-2 border-[#A5B2A9] text-[#A5B2A9] text-base mt-1 font-bold py-2 px-4 flex items-center gap-x-2 rounded-3xl"
                onClick={handleClickFecha2}
              >
                <FaCalendarDays /> Guardar Fecha
              </Link>
            
            
              <p className="text-[#ADA084] text-[16px] pt-2 text-center">En Coronel Vilela 2661,<br /> Ricardo Rojas.</p>
              <Link href='https://maps.app.goo.gl/pkMaxW2CH7E5gkCN6' target="_blank" className="bg-[#faf7ee] border-2 border-[#A5B2A9] text-[#A5B2A9] text-base mt-1 font-bold py-2 px-4 flex  items-center gap-x-2 rounded-3xl">
                <FaLocationDot /> Ver Mapa
              </Link>
            
          </div>
        </div>

        <div className="max-w-[498px] w-screen bg-[#A5B2A9] h-[230px] flex flex-col items-center justify-center gap-4 mt-16">
          <Image src={dresscode} alt="dresscode" width={60} height={80} />
          <p className="text-[#faf7ee] text-lg text-center">Código de vestimenta <br /><span className="font-bold">CASUAL</span></p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 mb-20 z-50">
          <div className="mt-12">
            <Image src={giftIcon} alt="" width={50} height={50} className="" />
          </div>
          <p className=" text-4xl md:text-5xl text-center cursiva text-[#746B58] pt-4">¡Tu presencia es  <br />el mejor regalo!</p>
          <p className="text-[#ADA084] text-lg text-center mt-4">Pero si deseas hacernos <br /> un <span className="font-bold">regalo de bodas</span>, te dejamos nuestros datos:</p>
          <div className="mt-4 py-4 w-[300px] rounded-lg border-dotted border-[4px] border-[#A5B2A9] flex flex-col items-center">
            <span className="text-[#746B58] font-bold">ALIAS: IVANYARA</span>
            <span className="text-[#746B58] font-bold">CBU: 0270026720034727400027</span>
          </div>
        </div>
        <Image src={bottomBg} alt="background" width={500} height={400} className="absolute object-cover  bottom-0 z-10" />
      </section>
      
    </main>
  );
}



// import Hero from "@/components/Hero";
// import { CountdownTimer } from "../components/CountdownTimer";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       hello
//       {/* <CountdownTimer targetDate="2024-04-05T10:30:00-03:00" /> */}
//     </main>
//     </>
//   );
// }
