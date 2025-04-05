import { Typewriter } from "react-simple-typewriter";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Description } from "../../utils/Descriptions";
import { Icons } from "../../utils/iconsIn";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/get-siangal-project/${id}`)
        .then((res) => res.json())
        .then((data) => setProject(data?.data));
    }
  }, [id]);
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Project Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/30 z-10"></div>
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-64 md:h-96 object-cover object-center"
        />
        <div className="container mx-auto px-6 relative z-20 -mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-800 rounded-full border border-slate-700">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-cyan-400 tracking-wider">
                  {project?.category}
                </span>
              </div>

              <span className="text-sm text-slate-400">
                {new Date(project?.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {project?.title}
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mb-8">
              <Description htmlContent={project?.description} />
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project?.url[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg text-cyan-400 transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
              <a
                href={project?.url[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 transition-colors"
              >
                <FiGithub /> View Code
              </a>
              <a
                href={project?.url[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 transition-colors"
              >
                <FiGithub /> View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Technologies */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-medium tracking-wider text-cyan-400">
                TECHNOLOGIES USED
              </h2>
              <div className="text-slate-400 text-sm">
                <Typewriter
                  words={["Frontend", "Backend", "Database"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {project?.techanology?.map((tech) => {
                if (!tech?.icon) return null; // Skip if no icon specified

                return (
                  <div
                    key={tech._id || tech.title}
                    className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-cyan-400/30 transition-all flex flex-col items-center"
                  >
                    <div className="text-3xl mb-2 w-8 h-8 flex items-center justify-center">
                      <Icons
                        iconName={tech.icon}
                        style={{
                          color: tech?.color || "#38BDF8",
                        }}
                        size={40}
                      />
                    </div>
                    <span className="text-sm font-medium text-center">
                      {tech?.title || "Tech"}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-medium tracking-wider text-cyan-400">
                KEY FEATURES
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FiCode className="text-cyan-400" /> Core Functionality
                </h3>
                <ul className="space-y-3">
                  {project?.fetcher?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FaDatabase className="text-cyan-400" /> Advanced Features
                </h3>
                <ul className="space-y-3">
                  {project?.advanceFetcher?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
