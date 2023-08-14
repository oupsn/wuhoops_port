import { Parallax } from "react-scroll-parallax";
import "../hero.css";
import wave from "../assets/wave.svg";

const hero = () => {
  return (
    <>
      <div
        id="hero"
        className="h-screen transition-all text-black dark:text-white bg-zinc-100 dark:bg-zinc-900 flex justify-center items-center"
      >
        <Parallax opacity={[2, 0]} scale={[0, 2]}>
          <span
            data-aos="fade"
            data-aos-duration="1600"
            className="text-xl font-medium"
          >
            Hi there, Wu's here.
          </span>
        </Parallax>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </>
  );
};

export default hero;
