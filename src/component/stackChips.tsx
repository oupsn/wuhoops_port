import { useState, useEffect, useRef } from "react";

const stackChips = ({ stacks, isExample }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [toolsToDisplay, setToolsToDisplay] = useState<string[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const toolMinWidth = 70; // Minimum width of each tool (adjust as needed)
        const maxTools = Math.floor(
          (containerWidth - toolMinWidth) / toolMinWidth
        );
        const displayedTools = stacks.slice(0, maxTools);
        const isOverflowing = displayedTools.length < stacks.length;

        setToolsToDisplay(displayedTools);
        setIsOverflowing(isOverflowing);
      }
    };

    handleResize(); // Initial calculation on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [stacks]);
  if (isExample) {
    return (
      <div ref={containerRef} className="text-black dark:text-white">
        {toolsToDisplay.map((tool, index) => (
          <span
            key={index}
            className="inline-block border-2 border-zinc-300 dark:border-zinc-600  rounded-full font-thin px-2 py-1 text-xs  mr-1"
          >
            {tool}
          </span>
        ))}
        {isOverflowing && (
          <span className="inline-block border-2 border-zinc-300 dark:border-zinc-600 rounded-full  px-2 py-1 text-xs ">
            . . .
          </span>
        )}
      </div>
    );
  } else if (!isExample) {
    return (
      <div ref={containerRef} className="text-black dark:text-white flex flex-wrap gap-2">
        {stacks.map((tool: any) => (
          <span
            key={tool}
            className="inline-block border-2 border-zinc-300 dark:border-zinc-600  rounded-full font-thin px-2 py-1 text-xs"
          >
            {tool}
          </span>
        ))}
      </div>
    );
  }
};

export default stackChips;
