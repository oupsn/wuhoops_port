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
    <div className="fixed bottom-10 right-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? "opacity-100" : "opacity-0"}
            bg-gray-900 hover:bg-gray-300 hover:ring-gray-600 inline-flex items-center rounded-full p-4 text-white text-xl shadow-md transition-all duration-300 hover:outline-none hover:ring-2 hover:ring-offset-2`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default backToTop;
