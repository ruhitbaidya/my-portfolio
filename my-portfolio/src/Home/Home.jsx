import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Skill from "../Components/Skill/Skill";
import Projects from "../Components/Project/Project";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
