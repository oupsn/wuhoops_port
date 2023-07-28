import { Skeleton } from "@mui/material";
import EducationTimeline from "../component/educationTimeline";

const about = () => {
  return (
    <div
      id="about"
      className="transition-all text-black dark:text-white min-h-screen bg-zinc-100 dark:bg-zinc-900 flex justify-center"
    >
      <div data-aos="fade">
        <p className="text-zinc-400 dark:text-zinc-600 text-center -rotate-90 absolute -left-32 hidden lg:block">
          - No hugs or kisses, only bugs and fixes -
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="mt-32 max-w-6xl px-10 flex flex-col gap-20"
      >
        <Skeleton variant="circular" width={200} height={200} className="self-center ring-2 ring-zinc-600" />
        <div>
          <p className="text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-4">
            Pasinun Wittayawinit
          </p>
          <p className="text-xl text-center">
            Currently a undergraduate student of SIT at King Mongkut's
            University of Technology Thonburi (KMUTT).
          </p>
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
