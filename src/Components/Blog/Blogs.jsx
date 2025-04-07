import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Description } from "../../utils/Descriptions";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://my-perso-backend.vercel.app/get-blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data.data.slice(0, 3)));
  }, []);
  return (
    <div className="relative bg-slate-900 text-slate-100 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6  py-12">
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="w-3 h-3 bg-[#38bdf8] rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium tracking-wider text-[#38bdf8]">
            MY BLOGS
          </h2>
          <div className="text-slate-400 text-sm">
            <Typewriter
              words={["Development", "Article", "Problem Solving"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
          Lasest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]">
            Articles
          </span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
          Highly skilled in progressive enhancement, design & development
        </p>
        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          {blogs &&
            blogs.map((item) => (
              <>
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/20">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="MERN Stack"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {item?.title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-sm line-clamp-3">
                      <Description htmlContent={item?.content.slice(0, 120)} />
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <Link to={`/blog/${item._id}`}>
                        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group">
                          Read more
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <Link to="/blog">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 transition-all duration-300 hover:opacity-90"
            >
              View All Article
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
