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
          ${isVisible ? "opacity-100" : "opacity-0"}
            bg-zinc-900 active:bg-zinc-300 sm:hover:bg-zinc-300 hover:ring-zinc-600 inline-flex items-center rounded-full p-4 text-white active:text-zinc-900 sm:hover:text-zinc-900 text-xl shadow-md transition-all duration-100 sm:duration-300 hover:outline-none sm:hover:ring-2 sm:hover:ring-offset-2 active:ring-2 active:ring-offset-2`}
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default startTour;
