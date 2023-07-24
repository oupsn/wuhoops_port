import PROJECTS from "../assets/projects.ts";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const projects = () => {
  return (
    <div
      id="projects"
      className="h-fit 2xl:h-screen bg-zinc-100 flex flex-col justify-center items-center"
    >
      <p className="text-4xl font-bold mb-10 mt-[120px] 2xl:mt-10">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 mb-10 2xl:mb-0">
        {PROJECTS.map((pj) => {
          return (
            <div
              onClick={() => window.open(pj.src, "_blank")}
              className="card max-w-80 lg:w-80 bg-white outline outline-offset-2 hover:outline-offset-4 outline-zinc-300 hover:outline-zinc-600 transition-all cursor-pointer"
            >
              <figure className="px-8 pt-8">
                <img
                  src="../public/web-icon.png"
                  alt="Project"
                  className="rounded-xl h-40"
                />
              </figure>
              <div className="card-body items-center text-center">
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
            <div className="bg-zinc-900 active:bg-zinc-300 sm:hover:bg-zinc-300 hover:ring-zinc-600 inline-flex items-center rounded-full text-white active:text-zinc-900 sm:hover:text-zinc-900  shadow-md transition-all duration-100 sm:duration-300 hover:outline-none sm:hover:ring-2 sm:hover:ring-offset-2 active:ring-2 active:ring-offset-2 py-2 px-4 w-fit cursor-pointer">
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
