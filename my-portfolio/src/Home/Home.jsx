import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Skill from "../Components/Skill/Skill";
import Projects from "../Components/Project/Project";
import Blogs from "../Components/Blog/Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
