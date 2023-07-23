import { Tooltip } from "@material-tailwind/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FC } from "react";
const card: FC<{
  title: string;
  detail: string;
  src: string;
}> = ({ title, detail, src }) => {
  return (
    <>
      <div className="bg-white rounded-xl p-6 outline outline-offset-4 outline-zinc-300 sm:w-auto max-w-[600px]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{title}</p>
          <Tooltip
            content="See detail"
            className="bg-zinc-600"
            placement="top-start"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              onClick={() => window.open(src, "_blank")}
              className="hover:bg-zinc-100 rounded-full p-2 cursor-pointer"
            >
              <FiArrowUpRight />
            </div>
          </Tooltip>
        </div>
        <p className="truncate">{detail}</p>
        <div className="flex flex-wrap gap-2 mt-2 auto-cols-auto">
          {/* {tags.map((tag) => {
            return (
              <p className="bg-zinc-300 px-2 py-0.5 rounded-full text-sm " key={tag}>
                {tag}
              </p>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default card;
