import { Typewriter } from "react-simple-typewriter";
import { FiPenTool, FiCpu, FiHeart } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-slate-100 py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16 justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium tracking-wider text-cyan-400">
            MY STORY
          </h2>
          <div className="text-slate-400 text-sm">
            <Typewriter
              words={["The Journey", "The Passion", "The Purpose"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="lg:w-2/5 relative group">
            <div className="relative z-10 overflow-hidden rounded-xl border-2 border-slate-700 group-hover:border-cyan-400/50 transition-all duration-500">
              <img
                src="https://i.ibb.co.com/8gBtsN5J/ruhitbaidya.jpg"
                alt="Ruhit Baidya"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_2s_ease-in-out_infinite] transition-all duration-300 -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {`Hello, I'm`}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Ruhit Baidya
              </span>
            </h3>

            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-cyan-400/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <p className="text-slate-300 leading-relaxed">
                  {`I'm a full-stack developer with a passion for creating digital experiences that 
                  are as functional as they are beautiful. My journey in technology began when I 
                  built my first website at 16, sparking a lifelong fascination with how code 
                  transforms ideas into reality.`}
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-400/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-slate-300 leading-relaxed">
                  {` What drives me is the intersection of creativity and logic. I approach each 
                  project as a unique puzzle, combining aesthetic sensibility with technical 
                  precision. For me, development isn't just about writing code—it's about 
                  crafting solutions that make people's lives easier and more enjoyable.`}
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-indigo-400/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-400 rounded-full"></div>
                <p className="text-slate-300 leading-relaxed">
                  {`When I'm not immersed in code, you'll find me exploring new technologies, 
              contributing to open-source projects, or mentoring aspiring developers. 
              I believe in continuous learning and sharing knowledge to help our 
              community grow together.`}
                </p>
              </div>
            </div>

            {/* Personal Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400">
                    <FiPenTool className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Design Minded
                  </h4>
                </div>
                <p className="text-sm text-slate-400">
                  I craft interfaces that delight users while maintaining clean,
                  efficient code architecture.
                </p>
              </div>

              <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-400/10 rounded-lg text-blue-400">
                    <FiCpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Technically Versatile
                  </h4>
                </div>
                <p className="text-sm text-slate-400">
                  From frontend aesthetics to backend logic, I bridge the gap
                  between design and functionality.
                </p>
              </div>

              <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700 hover:border-indigo-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-400/10 rounded-lg text-indigo-400">
                    <FiHeart className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Community Focused
                  </h4>
                </div>
                <p className="text-sm text-slate-400">
                  I believe in building technology that serves people and
                  contributes to collective knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
