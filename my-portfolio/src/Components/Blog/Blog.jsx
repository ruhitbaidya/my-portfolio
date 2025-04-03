import { Typewriter } from "react-simple-typewriter";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Advanced React Patterns",
      excerpt:
        "Master modern React patterns like compound components, render props, and hooks composition.",
      date: "May 15, 2023",
      category: "React",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Node.js Performance Optimization",
      excerpt:
        "Learn how to optimize your Node.js applications for maximum throughput and efficiency.",
      date: "June 2, 2023",
      category: "Node.js",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1655720828012-9bd98774ff0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      excerpt:
        "Discover TypeScript patterns that will make your code more robust and maintainable.",
      date: "June 18, 2023",
      category: "TypeScript",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Featured Post */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium tracking-wider text-cyan-400">
            FEATURED POST
          </h2>
        </div>

        <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="w-full h-64 lg:h-full object-cover"
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Featured post"
              />
            </div>
            <div className="p-8 lg:w-1/2">
              <div className="flex gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">
                  MERN Stack
                </span>
                <span className="text-xs text-slate-400 self-center">
                  12 min read
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Mastering Full-Stack Architecture
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                A comprehensive guide to building scalable full-stack
                applications with React, Node.js, and MongoDB. Learn
                authentication patterns, API design, and deployment strategies.
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">July 5, 2023</span>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 group">
                  Read more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-medium tracking-wider text-cyan-400">
              LATEST ARTICLES
            </h2>
            <div className="text-slate-400 text-sm">
              <Typewriter
                words={["React", "Node.js", "TypeScript", "MongoDB", "Next.js"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>

                <p className="text-slate-300 text-sm mb-4">{post.excerpt}</p>

                <div className="flex justify-between items-center pt-3 border-t border-slate-700">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group">
                    Read
                    <svg
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
