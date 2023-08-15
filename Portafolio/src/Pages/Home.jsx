import React from 'react'
import { Link as Anchor } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
  
    setIsMounted(true);
      }, []);

  return (
    <div name="home" className={`${isMounted ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
      {/* container */}

      <div className="flex justify-around pt-5 bg-[#353849]">
        <div className=" pt-10 xsm:pb-10 xsm:pt-20 md:pb-10 md:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            
              <h1 className="text-4xl font-bold tracking-tight text-white xsm:text-5xl">
                Hola soy Luis, Desarrollador Web <span className='text-[#03CC90]'>Full Stack M.E.R.N.</span>
              </h1>
              <p className="mt-12 text-xl text-[#FFFFFF]">
                Como Desarrollador Full-Stack en tecnologías de desarrollo
                front-end, como HTML, CSS, JavaScript, React y Redux, así como
                en tecnologías de desarrollo back-end, como Node.js, Express y
                MongoDB.
              </p>
            </div>
            <div className='flex pt-20 pb-10 justify-around'>
              <Anchor to='https://github.com/LuisH05' target='_blank' className=''>
              <img src="https://i.postimg.cc/sx93pTrw/github-142-svgrepo-com.png" className='w-16'/>
              </Anchor>
              <Anchor to='https://www.linkedin.com/in/luisherdez/' target='_blank'>
              <img src="https://i.postimg.cc/6p8XMWVk/linkedin-svgrepo-com.png"  className='w-16'/>
              </Anchor>
              <Anchor to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target='_blank' className='w-16'>
              <img src="https://i.postimg.cc/RVTH9zYp/gmail-svgrepo-com-3.png"/>
              </Anchor>
            </div>
              <div className="mt-12">
                <Anchor
                  to="/about"
                  className="inline-block rounded-md border border-transparent bg-[#03CC90] px-8 py-3 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white"
                >
                  MORE ABOUT ME
                </Anchor>
              </div>
          </div>
        </div>
        <div className="flex items-center xsm:hidden xxsm:hidden space-x-6 lg:space-x-8">
          <img className="h-96 w-96 rounded-full ring-2 ring-[#03CC90]" src="https://i.postimg.cc/7ZYd01Xp/Luis-Hernandez.png" alt="" />
        </div>
      </div>
    </div>
  );
}
