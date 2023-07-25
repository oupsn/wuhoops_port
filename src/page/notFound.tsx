import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const NotFound = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div className="text-black dark:text-white bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-center items-center w-screen h-screen">
        <div className="max-w-lg mr-4">
          <Lottie animationData={notfound} />
        </div>
        <p className="text-4xl font-semibold mb-20">404 Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
