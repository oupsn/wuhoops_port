import { ReactNode, createContext, useState } from "react";
type Props = {
  children: ReactNode;
};
const DarkModeContext = createContext<any>({});
const currentColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const DarkModeProvider = (props: Props) => {
  const [darkMode, setDarkMode] = useState(currentColorScheme);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
