import { Typewriter } from "react-simple-typewriter";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with admin dashboard and payment processing",
      category: "Full Stack",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      tags: ["ecommerce", "dashboard", "payments"],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates and team features",
      category: "Frontend",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Tailwind"],
      tags: ["productivity", "collaboration"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather visualization with historical data and forecasts",
      category: "Frontend",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "API", "Chart.js"],
      tags: ["weather", "data-visualization"],
    },
    {
      id: 4,
      title: "Portfolio CMS",
      description: "Custom CMS for managing portfolio content and projects",
      category: "Full Stack",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Node.js", "MySQL"],
      tags: ["cms", "portfolio"],
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-friendly workout tracking with progress analytics",
      category: "Mobile",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase"],
      tags: ["fitness", "mobile"],
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "AI-powered recipe recommendations based on ingredients",
      category: "Full Stack",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Python", "ML"],
      tags: ["food", "ai"],
    },
  ];

  // Technology icons mapping
  // const techIcons = {
  //   React: <FaReact className="text-cyan-400" />,
  //   "Node.js": <FaNodeJs className="text-green-500" />,
  //   MongoDB: <SiMongodb className="text-green-400" />,
  //   TypeScript: <SiTypescript className="text-blue-400" />,
  //   Tailwind: <SiTailwindcss className="text-cyan-300" />,
  //   Firebase: <div className="text-orange-400">FB</div>,
  //   JavaScript: <div className="text-yellow-400">JS</div>,
  //   API: <div className="text-purple-400">API</div>,
  //   "Next.js": <div className="text-white">NXT</div>,
  //   MySQL: <div className="text-blue-300">SQL</div>,
  //   "React Native": <FaReact className="text-sky-400" />,
  //   Python: <div className="text-blue-500">PY</div>,
  //   ML: <div className="text-pink-400">ML</div>,
  //   "Chart.js": <div className="text-red-400">CH</div>,
  // };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/30 z-10"></div>
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-20">
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

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-24">
        {/* Filters */}
        {/* <section className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FiFilter className="text-cyan-400" />
              <span className="text-sm text-slate-400">Filter by:</span>
              <button className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition">
                All
              </button>
              <button className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition">
                Full Stack
              </button>
              <button className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition">
                Frontend
              </button>
              <button className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition">
                Mobile
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </section> */}

        {/* Projects Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2 group"
            >
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
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 text-xs px-3 py-1 bg-slate-700/50 rounded-full border border-slate-600"
                    >
                      {techIcons[tech]}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div> */}

                <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-slate-900/30 rounded-full text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors">
                      <FiGithub />
                    </button>
                    <button className="p-2 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg text-cyan-400 transition-colors">
                      <FiExternalLink />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
        {/* <section className="mt-16 flex justify-center">
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 text-slate-400 hover:bg-slate-700 transition">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 text-slate-400 hover:bg-slate-700 transition">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 text-slate-400 hover:bg-slate-700 transition">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 text-slate-400 hover:bg-slate-700 transition">
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
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Projects;
