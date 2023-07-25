import PROJECTS from "../assets/projects.ts";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import projectCardDemo from "../assets/web-icon.png";

const projects = () => {
  return (
    <div
      id="projects"
      className="transition-all h-fit 2xl:h-screen bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center items-center"
    >
      <p className="text-black dark:text-white text-4xl font-bold mb-10 mt-[120px] 2xl:mt-10">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 mb-10 2xl:mb-0">
        {PROJECTS.map((pj) => {
          return (
            <div
              onClick={() => window.open(pj.src, "_blank")}
              className="card max-w-80 lg:w-80 bg-white dark:bg-black ring ring-offset-2 hover:ring-offset-[8px] ring-zinc-300 dark:ring-zinc-600 hover:ring-zinc-600 dark:hover:ring-zinc-300 ring-offset-zinc-100 dark:ring-offset-zinc-900 transition-all cursor-pointer"
            >
              <figure className="px-8 pt-8">
                <img
                  src={projectCardDemo}
                  alt="Project"
                  className="rounded-xl h-40"
                />
              </figure>
              <div className="text-black dark:text-white card-body items-center text-center">
                <h2 className="card-title">{pj.topic}</h2>
                <p className="h-10 text-sm font-thin overflow-hidden overflow-ellipsis">
                  <span className="block max-h-10 line-clamp-2">
                    {pj.description}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
        <div className="self-center justify-self-center md:justify-self-start">
          <Link to={"/projects"}>
            <div className="bg-black  dark:bg-white  text-white  dark:text-black shadow-md transition-all duration-100 sm:duration-300 inline-flex items-center rounded-full px-4 py-2 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white">
              <p>See more</p>
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default projects;
