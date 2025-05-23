import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Description } from "../../utils/Descriptions";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
const Projects = () => {
  const [project, setProject] = useState([]);
  // Sample projects data

  useEffect(() => {
    fetch(`https://my-perso-backend.vercel.app/getAllProject`)
      .then((res) => res.json())
      .then((data) => setProject(data?.data?.slice(0, 3)));
  }, []);

  return (
    <div
      id="projects"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen pb-16 overflow-hidden"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/30 z-10"></div>
        <div className="container mx-auto px-6 py-24  relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-medium tracking-wider text-cyan-400">
                PROJECT SHOWCASE
              </h2>
              <div className="text-slate-400 text-sm">
                <Typewriter
                  words={["Web Apps", "Mobile Apps", "Full Stack", "Frontend"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Projects
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A collection of my recent work showcasing full-stack applications,
              frontend interfaces, and mobile experiences.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 mt-[20px]">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project &&
            project.map((project) => (
              <div
                key={project._id}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Main clickable area for project navigation */}
                <Link to={`/project/${project._id}`} className="block">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="text-xs px-3 py-1 bg-slate-900/80 rounded-full border border-slate-700 text-cyan-400">
                        {project.category}
                      </span>
                      <span className="text-xs px-3 py-1 bg-slate-900/80 rounded-full border border-slate-700 text-slate-300">
                        {new Date(project?.createdAt).getFullYear()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      <Description
                        htmlContent={project.description.slice(0, 120)}
                      />
                    </p>
                  </div>
                </Link>

                {/* Action buttons - separated from main link */}
                <div className="px-[20px] py-2">
                  <div className="flex justify-end pt-4 border-t border-slate-700">
                    <div className="flex gap-[25px]">
                      <div
                        data-tooltip-id={`tooltip-${project._id}-frontend`}
                        data-tooltip-content="Frontend"
                        data-tooltip-place="top"
                      >
                        <Link
                          to={project.url[2]}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors inline-block"
                        >
                          <FiGithub size={20} />
                        </Link>
                        <Tooltip id={`tooltip-${project._id}-frontend`} />
                      </div>

                      <div
                        data-tooltip-id={`tooltip-${project._id}-server`}
                        data-tooltip-content="Server"
                        data-tooltip-place="top"
                      >
                        <Link
                          to={project.url[1]}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors inline-block"
                        >
                          <FiGithub size={20} />
                        </Link>
                        <Tooltip id={`tooltip-${project._id}-server`} />
                      </div>

                      <div
                        data-tooltip-id={`tooltip-${project._id}-live`}
                        data-tooltip-content="Live"
                        data-tooltip-place="top"
                      >
                        <Link
                          to={project.url[0]}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg text-cyan-400 transition-colors inline-block"
                        >
                          <FiExternalLink size={20} />
                        </Link>
                        <Tooltip id={`tooltip-${project._id}-live`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </main>
      <div className="mt-[40px] text-center">
        <Link to={`/project`}>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 transition-all duration-300 hover:opacity-90"
          >
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
