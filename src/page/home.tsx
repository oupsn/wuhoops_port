import BackToTop from "../component/backToTop";
import Footer from "../component/footer";
import NavBar from "../component/navBar";
import StartTour from "../component/startTour";
import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
const Home = () => {
  return (
    <>
        <NavBar />
        <StartTour />
        <BackToTop />
        <Hero />
        <About />
        <Projects />
        <Footer />
    </>
  );
};

export default Home;
