import React from "react";

interface IProjectInfo {
  p_name: string,
  description: string,
  langs: string[],
  repo: string,
  page: string,
  backgr: string
}

function Project({
  p_name,
  description,
  langs,
  repo,
  page,
  backgr
}: IProjectInfo): JSX.Element {
  return (
    <div className="group w-full h-64 shadow-lg rounded-xl p-4 flex flex-row bg-tertiary border border-border   md:h-128   lg:h-160   dark:bg-[#1f2a36] dark:border-gray-700">
      <section className="w-full h-full flex flex-row space-x-4 text-black   md:flex-col md:space-x-0 md:space-y-8">

        <a href={page} target="_blank" className={`w-1/2 h-full ${backgr} bg-cover bg-center border border-border rounded-xl shadow-md   hover:scale-105   transition-all duration-500 ease-in-out   md:w-full md:h-1/2 md:bg-top   dark:border-gray-700`}>
          <div className="w-full h-full flex flex-col justify-evenly items-center p-4 rounded-xl text-transparent font-semibold bg-black bg-opacity-10   group-hover:bg-opacity-70 group-hover:text-white   transition-all duration-500 ease-in-out">
            <p className="text-center   md:text-lg">{description}</p>
            <p className="text-lg   md:text-xl">Visit</p>
          </div>
        </a>

        <div className="w-1/2 h-full flex flex-col items-center justify-between   md:w-full md:h-1/2">
          <p className="text-xl text-black text-center font-semibold   sm:text-2xl   dark:text-gray-200">{p_name}</p>
          <ul className="text-md text-black text-center flex flex-col items-center space-y-2   sm:text-lg   md:text-xl   dark:text-gray-200">
            {langs.map(lang => <li key={lang}>{lang}</li>)}
          </ul>
          <a href={repo} target="_blank" className="w-28 h-12 bg-tertiary border border-border shadow-md rounded-xl flex justify-center items-center   hover:bg-primary hover:border-tertiary hover:scale-110 hover:text-white   transition-all duration-300 ease-in-out   md:w-full md:h-12 md:text-lg md:hover:scale-105   dark:border-gray-700 dark:bg-slate-600 dark:text-white">View code</a>
        </div>

      </section>
    </div>
  );
}

export { Project };