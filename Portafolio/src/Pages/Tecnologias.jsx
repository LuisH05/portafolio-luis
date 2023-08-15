import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faNode,faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Tecnologias() {
  return (
    <>
      <h1 className="flex justify-center mt-10 text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
        Tecnologias
      </h1>
        <h3 className='flex justify-center text-xl font-bold tracking-tight text-[#FFFFFF] xsm:text-5xl mt-20'>
          Front-End
        </h3>
        <div className='flex justify-evenly mt-14 '>
        <FontAwesomeIcon icon={faHtml5}  size='3x' style={{ color: "#ffa200" }} title="HTML5"/>
        <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{color: "#0d65fd"}} title="CSS3" />
        <FontAwesomeIcon icon={faJs} size= '3x' style={{color: "#ffea00"}} title="JavaScript" />
        <FontAwesomeIcon icon={faReact} size='3x' style={{color: "#00e1ff"}} title="React" />
        <FontAwesomeIcon icon={faBootstrap} size='3x' style={{color: "#4702e8"}} title="Bootstrap" />
        <img src='https://i.postimg.cc/R0ZgHXBT/Tailwind-CSS-Logo-svg.png' className='w-14' title='Tailwind' />
        <img src='https://www.svgrepo.com/show/303557/redux-logo.svg' className='w-12' title='Redux' />
        </div>
        <h3 className='flex justify-center text-xl font-bold tracking-tight text-[#FFFFFF] xsm:text-5xl mt-28'>
          Back-End
        </h3>
        <div className='flex justify-evenly mt-14 '>
        <FontAwesomeIcon icon={faJs} size= '3x' style={{color: "#ffea00"}} title="JavaScript" />
        <FontAwesomeIcon icon={faNode} size='3x' style={{color: "#4eb521",}} title='NodeJs' />
        <img src='https://i.postimg.cc/ryKBDGCT/mongodb-svgrepo-com.png' className='w-14' title='MongoDB' />
        <img src='https://www.nextontop.com/assets/img/services/web/expressjs.svg' className='w-20 bg-white rounded-lg' title='Express' />
        </div>
        <h3 className='flex justify-center text-xl font-bold tracking-tight text-[#FFFFFF] xsm:text-5xl mt-28'>
          Otras Herramientas
        </h3>
        <div className='flex justify-evenly mt-14 '>
        <FontAwesomeIcon icon={faGithub} size='3x' style={{color: "#000000",}} title='GitHub'/>
        <img src='https://i.postimg.cc/LsyFYrpD/postman-icon-svgrepo-com.png' className='w-12' title='Postman' />
        <img src='https://i.postimg.cc/XYvL9tgD/figma-1-logo.png' className='w-16' title='Figma' />
        <img src='https://i.postimg.cc/63Ry7V1p/vscode-svgrepo-com.png' className='w-12' title='VSC' />
        </div>
    </>
  );
}
