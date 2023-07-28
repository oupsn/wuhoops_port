import PROJECTS from "../assets/projects.ts";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import StackChips from "../component/stackChips.tsx";

const projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen transition-all bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center items-center"
    >
      <p
        data-aos="fade-up"
        className="text-black dark:text-white text-4xl font-bold mb-10 mt-[120px]"
      >
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-10 mx-6 mb-10">
        {PROJECTS.slice(0, 5).map((pj) => {
          return (
            <div
              key={pj.id}
              data-aos="fade-up"
              className="overflow-hidden group grid grid-rows-2 card max-w-[400px] max-h-[400px] bg-white dark:bg-black ring ring-offset-2 hover:ring-offset-[8px] ring-zinc-300 dark:ring-zinc-600 hover:ring-zinc-600 dark:hover:ring-zinc-300 ring-offset-zinc-100 dark:ring-offset-zinc-900 transition-all "
            >
              <div className="overflow-hidden p-4 pb-0 h-full w-full">
                <div className="rounded-2xl overflow-hidden h-full">
                  <div className="rounded-2xl overflow-hidden">
                    <img src={pj.image} alt={pj.alt} />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-black dark:text-white card-body items-center text-center">
                  <h2 className="card-title">{pj.topic}</h2>
                  <p className="h-10 text-sm font-thin max-h-10 line-clamp-2 text-ellipsis">
                    {pj.description}
                  </p>
                </div>
                <div className=" px-4 pb-4">
                  {StackChips({ stacks: pj.stack, isExample: true })}
                </div>
              </div>

              <div className="absolute w-full h-full">
                <div className="absolute w-full h-full bg-white dark:bg-black transition-all duration-300 scale-0 group-hover:scale-150 rounded-full "></div>
                <div className="absolute text-black dark:text-white p-4 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 rounded-full flex flex-col justify-center items-center">
                  {pj.res != null ? (
                    <div>
                      <p className="font-bold">Responsibilities</p>
                      {pj.res?.map((res) => {
                        return (
                          <p className="text-start self-start">{`- ${res}`}</p>
                        );
                      })}
                      <br />
                      <p className="font-bold mb-2">Tech stack</p>
                      <div>
                        {StackChips({ stacks: pj.stack, isExample: false })}
                      </div>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex gap-4">
                    <div
                      onClick={() => window.open(pj.src, "_blank")}
                      className="bg-black dark:bg-white text-white dark:text-black shadow-md transition-all inline-flex items-center rounded-full px-4 py-2 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white cursor-pointer"
                    >
                      <p>Repository</p>
                    </div>
                    {pj.design != null ? (
                      <div
                        onClick={() => window.open(pj.design, "_blank")}
                        className="bg-black dark:bg-white text-white dark:text-black shadow-md transition-all inline-flex items-center rounded-full px-4 py-2 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white cursor-pointer"
                      >
                        <p>UX/UI design</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="self-center justify-self-center md:justify-self-start">
          <Link to={"/projects"}>
            <div
              data-aos="fade-up"
              data-aos-offset="-10"
              className="bg-black  dark:bg-white  text-white  dark:text-black shadow-md transition-all duration-100 sm:duration-300 inline-flex items-center rounded-full px-4 py-2 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white"
            >
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

{
  /* <div className="bg-white p-4 dark:bg-black text-black dark:text-white rounded-xl w-full h-full flex flex-col justify-center items-center absolute opacity-0 hover:opacity-100 transition-all">
                {pj.res != null ? (
                  <div>
                    <p className="font-bold">Responsibilities</p>
                    {pj.res?.map((res) => {
                      return (
                        <p className="text-start self-start">{`- ${res}`}</p>
                      );
                    })}
                    <br />
                    <p className="font-bold mb-2">Tech stack</p>
                    <div>
                      {StackChips({ stacks: pj.stack, isExample: false })}
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}
                <div className="flex gap-4">
                  <div
                    onClick={() => window.open(pj.src, "_blank")}
                    className="bg-black dark:bg-white text-white dark:text-black shadow-md transition-all duration-100 sm:duration-300 inline-flex items-center rounded-full px-4 py-2 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white cursor-pointer"
                  >
                    <p>Repository</p>
                  </div>
                  {pj.design != null ? (
                    <div
                      onClick={() => window.open(pj.design, "_blank")}
                      className="bg-black dark:bg-white text-white dark:text-black shadow-md transition-all duration-100 sm:duration-300 inline-flex items-center rounded-full px-4 py-2 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white cursor-pointer"
                    >
                      <p>UX/UI design</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div> */
}
