import { BsFillRecordCircleFill } from "react-icons/bs";
const educationTimeline = () => {
  return (
    <div className="flex flex-col xl:gap-4 items-center justify-between xl:flex-row">
      <div className="mt-3 max-w-[400px] text-center">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          Benchamarachuthit Chanthaburi School
        </p>
        <time className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500">
          2014 - 2020
        </time>
      </div>



      <div className="flex flex-col xl:flex-row items-center grow ">
        <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full">
          <BsFillRecordCircleFill />
        </div>

        <div className="flex xl:w-full bg-gray-200 w-0.5 h-20 xl:h-0.5 dark:bg-gray-700"></div>
        
        <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full">
          <BsFillRecordCircleFill />
        </div>
      </div>



      <div className="mt-3 max-w-[400px] text-center">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          King Mongkut's University of Technology Thonburi (KMUTT)
        </p>
        <time className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500">
          2021 - Present
        </time>
      </div>
    </div>
  );
};

export default educationTimeline;
