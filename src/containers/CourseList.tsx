import React from 'react';

import { Course } from '@/components/Course';

function CourseList(): JSX.Element {
  return (
    <div id="courses" className="w-auto h-auto    bg-hero_bg">
      <div className="w-auto h-auto py-8 px-4 flex flex-col items-center space-y-8 bg-gradient-to-b from-transparent to-white   dark:to-[#111926]">
        <p className="text-2xl text-white text-center font-bold   lg:text-3xl">Here are some of the online courses I took.</p>

        <section className="w-full h-auto space-y-4   md:grid md:grid-cols-2 md:space-y-0 md:gap-4   lg:grid lg:grid-cols-3 lg:space-y-0">
          <Course
            name="Node.js - Passport.js & JWT"
            image="https://static.platzi.com/media/achievements/badge-backend-nodejs-autenticacion-passportjs-jwt-3425c859-2f69-49a5-849a-792049d24.png"
          />

          <Course
            name="Node.js - PostgreSQL"
            image="https://static.platzi.com/media/achievements/backend-node-82a9a4bf-7ce4-4437-86f6-c39dcce17d15.png"
          />

          <Course
            name="Node.js - API REST"
            image="https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png"
          />

          <Course
            name="TypeScript"
            image="https://static.platzi.com/media/achievements/piezas-fundamentos-typescript_badge-8a928c5a-0526-4a04-8e4b-1779384d1308.png"
          />

          <Course
            name="NEXT.js"
            image="https://static.platzi.com/media/achievements/piezas-profesional-nextjs_badge-c9a806c6-e240-45da-81da-c206b0611e84.png"
          />

          <Course
            name="React.js"
            image="https://static.platzi.com/media/achievements/badge-react-2018-0a41bdc5-e874-45c9-ac67-98294c898da4.png"
          />

          <Course
            name="Tailwind CSS"
            image="https://static.platzi.com/media/achievements/piezas-basico-tailwind_badge-e301d7b7-4227-42ff-8aa9-0e1ecbf4b4e1.png"
          />

          <Course
            name="API Consumption"
            image="https://static.platzi.com/media/achievements/curso-profesional-consumo-api-rest-javascript_badge-842a9d5d-8995-48e7-8582-73b1890.png"
          />

          <Course
            name="JavaScript Asynchronism"
            image="https://static.platzi.com/media/achievements/badge-asincro-js-9f17b092-47d0-4c8a-a59d-67714aa18db3.png"
          />

          <Course
            name="Regular Expressions"
            image="https://static.platzi.com/media/achievements/1301-97adc02b-c21c-46fc-b753-c50bf1a98f67.png"
          />

          <Course
            name="JavaScript OOP"
            image="https://static.platzi.com/media/achievements/intermedio-programacion-orientada-js-badge-b29243cc-39b1-4f4a-aec0-59f96f0412cd.png"
          />

          <Course
            name="Git & GitHub"
            image="https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png"
          />
        </section>

        <a
          href="https://platzi.com/p/german432/"
          target="_blank"
          className="w-4/5 h-14 text-black text-base font-extrabold flex justify-center items-center bg-transparent rounded-full border-2 border-primary shadow-md   hover:bg-primary hover:scale-105 hover:text-lg hover:text-white   transition-all duration-300 ease-in-out   md:w-3/5 md:text-lg md:hover:text-xl   lg:w-2/5   dark:border-gray-600 dark:text-white dark:hover:bg-slate-800"
        >
          See more on Platzi
        </a>
      </div>
    </div>
  );
}

export { CourseList };