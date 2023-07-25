import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DarkModeContext } from "../context/darkModeContext";
import { MdModeNight, MdLightMode } from "react-icons/md";

const navigation = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const handleClickScroll = (target: string) => {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const isMobile = useMediaQuery({ query: `(max-width: 639px)` });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [isMobile]);

  return (
    <div
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="2400"
      className="px-4 py-4 sm:flex w-full fixed z-[999]"
    >
      <div className="dark:invert bg-white mx-auto max-w-7xl px-2 sm:px-8 shadow-md rounded-xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400  focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-6">
              <IconButton
                sx={{ ml: 1 }}
                onClick={toggleDarkMode}
                color="inherit"
              >
                {darkMode ? <MdLightMode /> : <MdModeNight />}
              </IconButton>
              <p
                onClick={() => {
                  handleClickScroll("hero");
                  setOpen(false);
                }}
                className="text-zinc-900 block px-3 py-1 text-xl cursor-pointer font-bold"
              >
                WUHOOPS
              </p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                <div className="inline-block h-auto rounded-full min-h-[1em] w-0.5 self-stretch bg-zinc-300 opacity-100 dark:opacity-50"></div>
                {navigation.map((item) => (
                  <p
                    key={item.name}
                    onClick={() => {
                      handleClickScroll(item.href);
                    }}
                    className={classNames(
                      "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                    )}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            open ? "h-40" : "h-0"
          } transition-all duration-500 overflow-hidden`}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <p
                key={item.name}
                onClick={() => {
                  handleClickScroll(item.href);
                  setOpen(!open);
                }}
                className={classNames(
                  "text-zinc-600 active:bg-zinc-200 active:text-zinc-900 block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
