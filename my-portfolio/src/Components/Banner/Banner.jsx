import { Typewriter } from "react-simple-typewriter";
import "./Style.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <div id="home" className="headerImage border-2 border-gray-800">
      <div className="bg-colors-header h-screen">
        <Navbar />
        <div className="h-full">
          <div className="container mx-auto px-[20px] h-full">
            <div className="flex justify-center items-center h-[89%]">
              <div className="text-center">
                <p className="text-center text-white text-[19px] w-[60%] mx-auto">{`Hi I'm Ruhit Baidya i am a MERN Stack Developer  Front-end Specialist Crafting dynamic and responsive web applications with MongoDB, Express.js, React, and Node.js.`}</p>
                <h2 className="text-4xl font-[600] text-white mt-[30px]">
                  Using Technology{" "}
                  <Typewriter
                    words={[
                      " React JS",
                      " Express JS",
                      " Node JS",
                      " MongoDB",
                      " Firebase",
                      " Json Web Token",
                      " Github",
                    ]}
                    loop={50}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <button className="px-[35px] py-[10px] border text-white hover:bg-white hover:text-gray-700 mt-[30px]">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-30}
                    activeClass="active"
                    duration={500}
                    to="contact"
                  >
                    Hire Me
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
