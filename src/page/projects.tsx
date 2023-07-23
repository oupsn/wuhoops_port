import PROJECTS from "../assets/projects.ts";
import { IoIosArrowForward } from "react-icons/io";
import Lottie from "lottie-react";
import meditatingfox from "../assets/meditating-fox.json";

const projects = () => {
  return (
    <div
      id="projects"
      className="h-fit md:h-screen bg-zinc-100 flex flex-col justify-center items-center"
    >
      <p className="text-4xl font-bold mb-10 mt-32 md:mt-0 md:mb-20">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 mb-10 md:mb-0">
        {/* {PROJECTS.map((pj) => {
          return (
            <Card
              key={pj.id}
              title={pj.topic}
              detail={pj.description}
              src={pj.src}
            />
          );
        })} */}

        {PROJECTS.map((pj) => {
          return (
            <div className="card w-96 bg-white outline outline-offset-4 outline-zinc-300 cursor-pointer">
              <figure className="px-10 pt-10">
                {/* <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                /> */}
                <Lottie
                  style={{ width: "100px" }}
                  animationData={meditatingfox}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{pj.topic}</h2>
                <p>{pj.description}</p>
              </div>
            </div>
          );
        })}
        <div className="self-center justify-self-center md:justify-self-start">
          <div className="bg-zinc-900 active:bg-zinc-300 sm:hover:bg-zinc-300 hover:ring-zinc-600 inline-flex items-center rounded-full text-white active:text-zinc-900 sm:hover:text-zinc-900  shadow-md transition-all duration-100 sm:duration-300 hover:outline-none sm:hover:ring-2 sm:hover:ring-offset-2 active:ring-2 active:ring-offset-2 py-2 px-4 w-fit cursor-pointer">
            <p>See more</p>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
