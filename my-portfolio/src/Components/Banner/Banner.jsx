import { Typewriter } from "react-simple-typewriter";
import "./Style.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll";
import {Link as Dink} from "react-router-dom"
const Banner = () => {
 
  return (
    <div id="home" className="headerImage border-2 border-gray-800 lg:h-screen">
      <div className="bg-colors-header lg:h-screen">
        <Navbar />
        <div className="h-full py-[20px]">
          <div className="container mx-auto px-[20px] h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px] h-[89%]">
              <div className="">
                <h2 className="text-[22px] lg:text-5xl font-[700] text-white mb-[20px]">Hi, I am Ruhit Baidya</h2>
                <p className=" text-white text-[16px] lg:text-[19px]">{`i am a MERN Stack Developer  Front-end Specialist Crafting dynamic and responsive web applications with MongoDB, Express.js, React, and Node.js.`}</p>
                <h2 className="lg:text-4xl font-[600] text-white mt-[30px]">
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
                <button className="px-[35px] py-[10px] border text-white hover:bg-white hover:text-gray-700 mt-[30px] mr-[10px]">
                  <Dink to="https://drive.usercontent.google.com/download?id=1KXOWXtYq48YytK_vdgYEZPJQ_ih0zq6s">
                    Download Resume
                  </Dink>
                </button>
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
              <div className="flex justify-center items-center">
                <div className="bg-white rotate-3 rounded-lg">
                  <div className="-rotate-3">
                    <img className='h-[400px] object-cover rounded-lg border-4 border-white' src='https://i.ibb.co/ncv73r1/ruhit.jpg' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
