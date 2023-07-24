import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";

const NotFound = () => {
  return (
    <div className="bg-zinc-100 flex flex-col justify-center items-center w-screen h-screen">
      <div className="max-w-lg mr-4">
        <Lottie animationData={notfound} />
      </div>
      <p className="text-4xl font-semibold mb-20">404 Not Found</p>
    </div>
  );
};

export default NotFound;
