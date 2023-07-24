import Lottie from "lottie-react";
import meditatingfox from "../assets/meditating-fox.json";
const NotFound = () => {
  return (
    <div className="bg-zinc-100 flex flex-col justify-center items-center w-screen h-screen">
      <div className="max-w-lg mr-10">
        <Lottie animationData={meditatingfox} />
      </div>
      <p className="text-6xl font-semibold mb-20">404 Not Found</p>
    </div>
  );
};

export default NotFound;
