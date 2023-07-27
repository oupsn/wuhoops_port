import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const backToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-10 right-10 z-[999]">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
        ${isVisible ? "scale-100" : "scale-0"}
          bg-black  dark:bg-white  text-white  dark:text-black text-xl shadow-md transition-all inline-flex items-center rounded-full p-4 hover:ring-2 hover:ring-offset-4 hover:ring-offset-zinc-100 dark:hover:ring-offset-zinc-900 hover:ring-black dark:hover:ring-white`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default backToTop;
