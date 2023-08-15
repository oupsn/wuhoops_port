import { Skeleton } from "@mui/material";
import EducationTimeline from "../component/educationTimeline";

const about = () => {
  return (
    <div
      id="about"
      className="transition-all text-black dark:text-white min-h-screen bg-zinc-100 dark:bg-zinc-900 flex justify-center"
    >
      <div
        data-aos="zoom-in"
        className="mt-32 max-w-6xl px-10 flex flex-col gap-20"
      >
        <Skeleton
          variant="circular"
          width={280}
          height={280}
          className="self-center ring-2 ring-zinc-600"
        />
        <div>
          <p className="text-4xl sm:text-6xl font-bold text-center mb-4">
            Pasinun Wittayawinit
          </p>
          {/* <p className="text-xl text-center">
            Currently a undergraduate student of SIT at King Mongkut's
            University of Technology Thonburi (KMUTT).
          </p> */}
        </div>
        <div>
          <p className="text-2xl font-semibold text-center mb-4">Education</p>
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
};

export default about;
