import React from "react";

import { Project } from "@/components/Projects";

function ProjectList(): JSX.Element {
  return (
    <div id="projects" className="w-auto h-auto pt-8 mb-10 mx-4">
      <p className="text-2xl text-primary text-center font-bold   lg:text-3xl   dark:text-gray-100">Take a look at some projects I've been working on.</p>

      <section className="my-4 grid grid-cols-1 items-center gap-4   md:h-auto md:grid-cols-3 md:mt-6   lg:grid-cols-4   2xl:grid-cols-5">
        <Project
          p_name="E-commerce"
          description="Get yourself a present!"
          langs={["NEXT.js", "Tailwind CSS", "- my own API -"]}
          page="https://ecommerce-geras4323.vercel.app/"
          repo="https://github.com/Geras4323/ecommerce-frontend"
          backgr="bg-sale"
        />

        <Project
          p_name="Ecommerce API Docs"
          description="The first step to owning a good ecommerce"
          langs={["TypeScript", "NEXT.js", "Tailwind CSS"]}
          page="https://ecommerce-api-docs-geras4323.vercel.app/"
          repo="https://github.com/Geras4323/ecommerce-api-docs"
          backgr="bg-apidocs"
        />

        <Project
          p_name="Repository Filter"
          description="Too many repositories? Filter them!"
          langs={["React.js", "CSS", "- GitHub API -"]}
          page="https://repo-search-geras4323.vercel.app/"
          repo="https://github.com/Geras4323/gh-repo-search-react"
          backgr="bg-ghsearch"
        />

        <Project
          p_name="Movies & TV"
          description="No plans for this weekend?"
          langs={["NEXT.js", "Tailwind CSS", "- TheMovieDB API -"]}
          page="https://movie-fetcher-geras4323.vercel.app/"
          repo="https://github.com/Geras4323/movie-fetcher"
          backgr="bg-movies"
        />

        <Project
          p_name="Product Dashboard"
          description="Add, edit and remove products"
          langs={["NEXT.js", "Tailwind CSS", "- Tailwind UI -"]}
          page="https://next-dashboard-geras4323.vercel.app/"
          repo="https://github.com/Geras4323/nextjs-product-dashboard"
          backgr="bg-dashboard"
        />

        <Project
          p_name="iOS Calculator"
          description="Quick operations save time"
          langs={["React JS", "Tailwind CSS"]}
          page="https://ios-calculator-geras4323.vercel.app/"
          repo="https://github.com/Geras4323/ios-calculator"
          backgr="bg-calculator"
        />

        <Project
          p_name="Task List"
          description="Need to remember some tasks?"
          langs={["React JS", "CSS"]}
          page="https://geras4323.github.io/task-list-react/"
          repo="https://github.com/Geras4323/task-list-react/tree/master"
          backgr="bg-task"
        />

        <Project
          p_name="YouTravel"
          description="Feeling like traveling?"
          langs={["HTML", "Tailwind CSS"]}
          page="https://geras4323.github.io/tailwind-travel-site/"
          repo="https://github.com/Geras4323/tailwind-travel-site/tree/gh-pages"
          backgr="bg-travel"
        />
      </section>

    </div>
  );
}

export { ProjectList };