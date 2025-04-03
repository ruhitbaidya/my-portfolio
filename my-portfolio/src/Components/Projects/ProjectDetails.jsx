import { Typewriter } from "react-simple-typewriter";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const ProjectDetails = () => {
  const project = {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with admin dashboard, payment integration, and inventory management.",
    category: "Full Stack Development",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    technologies: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300" />,
      },
    ],
    features: [
      "Product catalog with filters",
      "Shopping cart & checkout",
      "User authentication (JWT)",
      "Admin dashboard",
      "Payment gateway integration",
      "Order tracking system",
      "Inventory management",
      "Responsive design",
    ],
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing database queries for performance",
      "Creating a seamless mobile checkout experience",
      "Securing payment processing",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Project Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/30 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover object-center"
        />
        <div className="container mx-auto px-6 relative z-20 -mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-800 rounded-full border border-slate-700">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-cyan-400 tracking-wider">
                  {project.category}
                </span>
              </div>

              <span className="text-sm text-slate-400">{project.year}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg text-cyan-400 transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
              <a
                href={project.githubUrl}
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
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-cyan-400/30 transition-all flex flex-col items-center"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
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
                  {project.features.slice(0, 4).map((feature, index) => (
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
                  {project.features.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-medium tracking-wider text-cyan-400">
                CHALLENGES & SOLUTIONS
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <ul className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Challenge {index + 1}: {challenge.split(":")[0]}
                    </h3>
                    <p className="text-slate-300">
                      {challenge.includes(":")
                        ? challenge.split(":")[1]
                        : `Implemented solution using ${
                            [
                              "custom hooks",
                              "optimized queries",
                              "mobile-first design",
                              "encryption protocols",
                            ][index]
                          }.`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Screenshots */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-medium tracking-wider text-cyan-400">
                PROJECT SCREENSHOTS
              </h2>
              <div className="text-slate-400 text-sm">
                <Typewriter
                  words={["Desktop", "Mobile", "Dashboard"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all group"
                >
                  <img
                    src={screenshot}
                    alt={`Project screenshot ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <p className="text-sm text-slate-400">
                      {["Homepage", "Product Page", "Admin Dashboard"][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Project Navigation */}
          <section className="flex flex-col sm:flex-row justify-between gap-4 border-t border-slate-800 pt-12">
            <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              Previous Project
            </button>
            <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              Next Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
