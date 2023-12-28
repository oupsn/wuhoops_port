import { useContext } from "react";
import BackToTop from "../component/backToTop";
import NavBar from "../component/navBar";
import StartTour from "../component/startTour";
import { DarkModeContext } from "../context/darkModeContext";
const AppBody = ({children}: { children: React.ReactNode }) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <NavBar />
            <StartTour />
            <BackToTop />
            {children}
        </div>
    );
};

export default AppBody;
