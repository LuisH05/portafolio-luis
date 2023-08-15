import React from 'react'
import { Link as Anchor } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function About() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
      }, []);
    
  return (
    <>
    <div className={`${isMounted ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
      <h1 className= 'flex justify-center mt-10 text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl' >
        About Me
      </h1>
      <div className="flex items-center justify-center mt-20 xsm:hidden xxsm:hidden space-x-6 lg:space-x-8">
          <img className="h-60 w-60 rounded-full ring-2 ring-[#03CC90]" src="https://i.postimg.cc/7ZYd01Xp/Luis-Hernandez.png" alt="" />
      </div>
      <div className='flex justify-center mt-10'>
      <h3 className="text-lg font-bold tracking-tight text-[#FFFFFF] xsm:text-5xl">
        Desarrollador Web Full Stack M.E.R.N.
      </h3>
      </div>
      <div className='flex justify-center mt-10 '>
      <p className ='text-white max-w-6xl text-center'>¡Mucho gusto! Soy Luis, Desarrollador Web Full Stack M.E.R.N <br />
          Como Desarrollador Full-Stack en tecnologías de desarrollo front-end, como HTML, CSS, JavaScript, React y Redux, así como en tecnologías de desarrollo back-end, como Node.js, Express y MongoDB. <br /> <br />
          Me caracterizo por ser un apoyo para el equipo de trabajo desde el comienzo hasta el final de los proyectos. <br />
          Me considero una persona con alta adaptabilidad y altamente comprometido con las metas propuestas, mi objetivo es capacitarme cada día para ser uno de los mejores desarrolladores web y ser la persona idónea para desempeñar cargos de alta responsabilidad.</p>
      </div>
      <div className="flex justify-evenly mt-20">
        <Anchor
          to="/project"
          className="inline-block rounded-md border border-transparent bg-[#03CC90] px-8 py-3 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white">
          My Projects
        </Anchor>

        <a
          href="./LuisHernandezCV.pdf" download={'LuisHernandezCV.pdf'}
          className="inline-block rounded-md border border-transparent bg-[#03CC90] px-8 py-3 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white">
          Descargar CV
        </a>
      </div>
      </div>
    </>
  )
}
