import { FiArrowUpRight } from "react-icons/fi";
const card = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md p-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Project's name</p>
          <div className="hover:bg-zinc-100 rounded-full p-2 cursor-pointer">
          <FiArrowUpRight />

          </div>
        </div>
        <p>Project lorem ipsum</p>
      </div>
    </>
  );
};

export default card;
