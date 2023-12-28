import { useContext } from "react";
import Footer from "../component/footer";
import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
import { DarkModeContext } from "../context/darkModeContext";
import AppBody from "../component/appBody.tsx";
const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
        <AppBody>
            <Hero />
            <About />
            <Projects />
            <Footer />
        </AppBody>
    </div>
  );
};

export default Home;
