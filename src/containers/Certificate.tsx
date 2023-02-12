import React from 'react';

function Certificate(): JSX.Element {
  return (
    <div id='certificate' className='w-full p-4'>
      <section
        className='w-full h-auto mt-2 py-10 px-4 border-y border-primary rounded-2xl  flex flex-col justify-center items-start gap-10   sm:flex-row sm:items-center   dark:border-border'
      >
        <div className='w-auto h-auto'>
          <img src="/certificate.jpg" alt="certificate" className='w-160 rounded-xl'/>
        </div>

        <div className='w-full text-black font-bold flex flex-col gap-6 items-center   sm:w-auto   dark:text-white'>
          <p className='w-full text-left text-2xl   sm:text-xl   md:text-2xl   lg:text-3xl'>Full Stack Developer with JavaScript</p>
          <p className='w-full text-left text-slate-800 text-xl   sm:text-lg   md:text-xl   lg:text-2xl   dark:text-gray-300'>Platzi Certificate</p>
          <a
            href="https://platzi.com/p/german432/ruta/100-javascript-full-stack/diploma/detalle/"
            target="_blank"
            className="w-4/5 h-14 text-center px-2 text-black text-base font-extrabold flex justify-center items-center bg-transparent rounded-full border-2 border-primary shadow-md   hover:bg-primary hover:scale-105 hover:text-lg hover:sm:text-base hover:text-white   transition-all duration-300 ease-in-out   sm:w-4/5   md:text-lg md:hover:text-lg   lg:hover:text-xl   dark:border-gray-600 dark:text-white dark:hover:bg-slate-800"
          >
            See certificate on Platzi
          </a>
        </div>

      </section>
    </div>
  );
}

export { Certificate };