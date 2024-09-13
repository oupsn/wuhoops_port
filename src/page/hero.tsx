import { Parallax } from "react-scroll-parallax";
import "../hero.css";

const hero = () => {
  return (
    <div
      id="hero"
      className="overflow-hidden h-screen transition-all text-black dark:text-white bg-zinc-100 dark:bg-zinc-900 flex justify-center items-center"
    >
      <div
        data-aos="fade"
        data-aos-duration="1600"
        data-aos-delay="2000"
        className="hero absolute h-screen overflow-hidden dark:invert"
      ></div>
      <Parallax opacity={[2, 0]} scale={[0, 2]}>
        <span
          data-aos="fade"
          data-aos-duration="1600"
          className="text-xl font-medium text-blac"
        >
          Hi there, Ou's here.
        </span>
      </Parallax>
    </div>
  );
};

export default hero;
