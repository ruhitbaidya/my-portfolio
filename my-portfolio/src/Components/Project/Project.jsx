import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="projects" className="relative py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 mx-auto">
            <div className="w-3 h-3 bg-[#38bdf8] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wider">
              SHOWCASE PROJECT
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Show There 3 Products
          </p>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl border-2 border-white/10 hover:border-[#38bdf8] transition-all duration-300 h-96">
              <img
                src="https://i.ibb.co/cJV8Yws/glory.png"
                alt="Glory G&P Project"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <Link
                  to="https://paper-crafts-glass-art.web.app/"
                  target="_blank"
                  className="px-6 py-3 bg-[#38bdf8] text-[#0f172a] font-medium rounded-lg hover:bg-[#7dd3fc] transition-all flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#38bdf8]/10 text-[#38bdf8]">
                React.js
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#38bdf8]/10 text-[#38bdf8]">
                Firebase
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#38bdf8]/10 text-[#38bdf8]">
                MongoDB
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Product Management System
            </h3>

            <p className="text-gray-300 leading-relaxed">
              A comprehensive full-stack application that allows users to
              manage, sort, and showcase products with full CRUD functionality
              and secure authentication.
            </p>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-[#7dd3fc] hover:text-[#38bdf8] transition-colors"
            >
              {showDetails ? "Hide Details" : "View Full Details"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-1 transition-transform ${
                  showDetails ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {showDetails && (
              <div className="space-y-4 text-gray-300">
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2 pl-5 list-disc">
                    <li>
                      <strong>User Authentication:</strong> Secure sign-up/login
                      with Firebase Authentication
                    </li>
                    <li>
                      <strong>Product Management:</strong> Full CRUD operations
                      for products with image uploads
                    </li>
                    <li>
                      <strong>Advanced Filtering:</strong> Sort products by
                      category, price, and popularity
                    </li>
                    <li>
                      <strong>Responsive Design:</strong> Fully functional
                      across all device sizes
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white">
                    Technical Highlights:
                  </h4>
                  <ul className="space-y-2 pl-5 list-disc">
                    <li>JWT authentication for secure API endpoints</li>
                    <li>Real-time database updates with Firebase</li>
                    <li>Optimized image handling with Cloudinary</li>
                    <li>Clean, modular React component architecture</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="https://github.com/ruhitbaidya/GlassAndCraft-client"
                target="_blank"
                className="px-5 py-2.5 border border-[#38bdf8] text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/10 transition-all flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Client Code
              </Link>
              <Link
                to="https://github.com/ruhitbaidya/glassandCraft-server"
                target="_blank"
                className="px-5 py-2.5 border border-[#38bdf8] text-[#38bdf8] rounded-lg hover:bg-[#38bdf8]/10 transition-all flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Server Code
              </Link>
              <Link
                to="https://paper-crafts-glass-art.web.app/"
                target="_blank"
                className="px-5 py-2.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] text-[#0f172a] font-medium rounded-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 transition-all flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-[20px] text-center mt-[50px]">
          <button>
            <Link
              to="/project"
              className="px-6 py-3 bg-[#38bdf8] text-[#0f172a] font-medium rounded-lg hover:bg-[#7dd3fc] transition-all flex items-center gap-2"
            >
              Show All Projects
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
