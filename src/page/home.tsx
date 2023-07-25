import { useContext } from "react";
import BackToTop from "../component/backToTop";
import Footer from "../component/footer";
import NavBar from "../component/navBar";
import StartTour from "../component/startTour";
import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
import { DarkModeContext } from "../context/darkModeContext";
const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <NavBar />
      <StartTour />
      <BackToTop />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
