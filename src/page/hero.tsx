import { Parallax } from "react-scroll-parallax";

const hero = () => {
  return (
    <>
      <div
        id="hero"
        className="h-screen transition-all text-black dark:text-white bg-zinc-100 dark:bg-zinc-900 flex justify-center items-center"
      >
        <Parallax
          opacity={[2, 0]}
          scale={[0, 2]}
          translateX={["250%", "-250%"]}
        >
          <span
            data-aos="fade"
            data-aos-duration="1600"
            className="text-xl font-medium"
          >
            Hi there,
          </span>
        </Parallax>
        <Parallax
          opacity={[2, 0]}
          scale={[0, 2]}
          translateX={["-250%", "250%"]}
        >
          <span
            data-aos="fade"
            data-aos-duration="1600"
            className="text-xl font-medium"
          >
            &nbsp;Wu's here.
          </span>
        </Parallax>
      </div>
    </>
  );
};

export default hero;
