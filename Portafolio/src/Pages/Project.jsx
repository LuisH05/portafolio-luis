import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function Project() {
  return (
    <>
    <h1 className="flex justify-center mt-10 text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
          My Projects
        </h1>
      <div className="flex w-full">
        <div className="flex flex-col items-center mt-20">
          <img
            src="https://i.postimg.cc/zBDZ7VBL/Game-Zone-foto.png"
            alt=""
            className=" h-60 rounded-xl"
          />
          <div className="text-white w-2/4">
            <h4 className="text-2xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl mb-2 mt-5 text-center">
              {" "}
              Game Zone
            </h4>
            <p className="text-white max-w-6xl">
              Game Zone es una pagina desarrollada para la venta y compra de
              video juegos online, una Web desarrollada en equipo, utilizando la
              metodología de trabajo AGILE, organizando y distribuyendo tareas
              en Trello. aplicando diferentes tecnologias para el buen
              funcionamiento de la App, tanto desde el lado de Front-end y
              Back-end.
            </p>
            <div className="flex justify-evenly mt-8">
              <a
                href="https://game-zone-front.vercel.app/"
                target="_blank"
                className="inline-block rounded-md border border-transparent bg-[#03CC90] px-6 py-2 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white pt"
              >
                Web
              </a>
              <Anchor
                to="https://github.com/LuisH05/Game-Zone-Front"
                target="_blank"
                className="inline-block rounded-md border border-transparent bg-[#03CC90] px-6 py-2 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white"
              >
                Codigo
              </Anchor>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <img
            src="https://i.postimg.cc/BZK9g9ZB/minga-nuevo.png"
            alt=""
            className=" h-60 rounded-xl"
          />
          <div className="text-white w-2/4">
            <h4 className="text-2xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl mb-2 mt-5 text-center">
              {" "}
              Minga
            </h4>
            <p className="text-white max-w-6xl">
              Minga es una pagina desarrollada para la lectura y creacion de
              mangas, una Web desarrollada en equipo, utilizando la
              metodología de trabajo AGILE, aplicando diferentes tecnologias para el buen
              funcionamiento de la App, tanto desde el lado de Front-end y
              Back-end.
            </p>
            <div className="flex justify-evenly mt-8">
              <Anchor
                to="https://minga-verde-front.vercel.app/"
                target="_blank"
                className="inline-block rounded-md border border-transparent bg-[#03CC90] px-6 py-2 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white pt"
              >
                Web
              </Anchor>
              <Anchor
                to="https://github.com/LuisH05/minga_verde_front-1"
                target="_blank"
                className="inline-block rounded-md border border-transparent bg-[#03CC90] px-6 py-2 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white"
              >
                Codigo
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
