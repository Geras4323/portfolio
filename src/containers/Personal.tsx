import React from 'react';

function Personal(): JSX.Element {
  return (
    <div className="w-full h-64 mt-8   bg-gradient-to-b from-white to-gray-400   lg:h-44   dark:from-[#111926] dark:to-slate-600">
      <section className="w-full h-full text-primary flex flex-col justify-around items-center   lg:flex-row lg:justify-evenly">

        <p className="text-xl font-extrabold   lg:text-2xl   dark:text-gray-200">Getting better every day</p>

        <div className="flex flex-col items-center space-y-3   dark:text-gray-200">
          <span className="text-xl font-semibold   lg:text-2xl">Made with</span>
          <ul className="h-auto text-md flex flex-row space-x-6   lg:text-lg lg:font-bold">
            <li>
              <div className="h-full flex flex-col items-center justify-between">
                <figure className='w-full h-full flex justify-center items-center'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" className="w-12 drop-shadow-md   lg:w-16"/>
                </figure>
                <span>NEXT.js</span>
              </div>
            </li>
            <li>
              <div className="h-full flex flex-col items-center justify-between">
                <figure className='w-full h-full flex justify-center items-center'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" className="w-8 drop-shadow-md   lg:w-12"/>
                </figure>
                <span>TypeScript</span>
              </div>
            </li>
            <li>
              <div className="h-full flex flex-col items-center justify-between">
                <figure className='w-full h-full flex justify-center items-center'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/480px-Tailwind_CSS_Logo.svg.png" className="w-10 drop-shadow-md   lg:w-14"/>
                </figure>
                <span>Tailwind CSS</span>
              </div>
            </li>
            <li>
              <div className="h-full flex flex-col items-center justify-between">
                <figure className='w-full h-full flex justify-center items-center'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" className="w-10 drop-shadow-md   lg:w-14"/>
                </figure>
                <span>React</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export { Personal };