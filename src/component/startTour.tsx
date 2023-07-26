import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const startTour = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY < 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="flex w-full justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="2400"
        data-aos-offset="-1"
        className="fixed bottom-6 animate-bounce"
      >
        <button
          type="button"
          onClick={scrollToNext}
          className={`
          ${isVisible ? "scale-100" : "scale-0"}
          bg-black  dark:bg-white  text-white  dark:text-black text-xl shadow-md transition-all duration-100 sm:duration-300 inline-flex items-center rounded-full p-4 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white`}
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default startTour;
