import About from "../Components/About/About"
import Banner from "../Components/Banner/Banner"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import Services from "../Components/Services/Services"
import Skill from "../Components/Skill/Skill"

const Home = () => {
  return (
    <div>
        <Banner />
        <About />
        <Skill />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home