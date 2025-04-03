import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.88), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]/10 -z-0"></div>

      <Navbar />

      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Role Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <div className="w-3 h-3 bg-[#38bdf8] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wider">
              MERN STACK DEVELOPER
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {`Hello, I'm`}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]">
              Ruhit Baidya
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            I architect and build exceptional digital experiences using modern
            web technologies, with a focus on performance, accessibility, and
            elegant code solutions.
          </p>

          {/* Typewriter Effect */}
          <div className="text-xl font-medium text-gray-200 mb-10">
            <span className="text-white">Technologies: </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]">
              <Typewriter
                words={[
                  "React.js",
                  "Node.js",
                  "TypeScript",
                  "Next.js",
                  "MongoDB",
                  "Express.js",
                  "Redux Toolkit",
                  "Firebase",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <RouterLink
              to="https://drive.usercontent.google.com/download?id=1alWxm5x_8gxyQkOhJ6S7bPGlRv6HnNfY"
              className="px-7 py-3.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] text-[#0f172a] font-medium rounded-full hover:shadow-xl hover:shadow-[#7dd3fc]/30 transition-all duration-300 hover:-translate-y-1"
            >
              Download Resume
            </RouterLink>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-7 py-3.5 border-2 border-[#7dd3fc] text-[#7dd3fc] font-medium rounded-full hover:bg-[#7dd3fc]/10 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
