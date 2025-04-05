// import { Typewriter } from "react-simple-typewriter";
// import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // const { id } = useParams();

  // Sample blog post data (in a real app, you'd fetch this based on the ID)
  const blogPost = {
    id: 1,
    title: "Mastering Full-Stack Architecture",
    content: `
      <p class="mb-4">Building a full-stack application requires careful consideration of architecture patterns that ensure scalability, maintainability, and performance. In this article, we'll explore the MERN stack (MongoDB, Express, React, Node.js) and how to structure your application for success.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">1. The Foundation: Node.js Backend</h2>
      <p class="mb-4">The backend serves as the foundation of your application. We recommend using Express.js for its simplicity and flexibility. Key considerations include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Proper route organization</li>
        <li>Middleware architecture</li>
        <li>Error handling strategies</li>
        <li>Authentication flows</li>
      </ul>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">2. Database Design with MongoDB</h2>
      <p class="mb-4">MongoDB's flexible document model is perfect for modern applications. Consider these patterns:</p>
      <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-700">
        <pre class="text-cyan-400 text-sm overflow-x-auto">
          <code>
  // Example Mongoose schema
  const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
  });
          </code>
        </pre>
      </div>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">3. React Frontend Architecture</h2>
      <p class="mb-4">The frontend is where your users interact with your application. Modern React patterns include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Component composition</li>
        <li>State management strategies</li>
        <li>Performance optimization</li>
        <li>Server-side rendering (with Next.js)</li>
      </ul>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">4. Deployment Strategies</h2>
      <p class="mb-4">A well-architected application deserves proper deployment. Consider:</p>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <h3 class="font-bold text-cyan-400 mb-2">Backend</h3>
          <ul class="text-sm space-y-1">
            <li>• Docker containers</li>
            <li>• AWS EC2/ECS</li>
            <li>• Heroku</li>
            <li>• Vercel Serverless</li>
          </ul>
        </div>
        <div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <h3 class="font-bold text-cyan-400 mb-2">Frontend</h3>
          <ul class="text-sm space-y-1">
            <li>• Vercel</li>
            <li>• Netlify</li>
            <li>• AWS S3 + CloudFront</li>
            <li>• GitHub Pages</li>
          </ul>
        </div>
      </div>
    `,
    date: "July 5, 2023",
    category: "MERN Stack",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Ruhit Baidya",
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
      role: "Senior Full-Stack Developer",
    },
    tags: ["React", "Node.js", "MongoDB", "Architecture", "Performance"],
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Blog Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/30 z-10"></div>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-64 md:h-96 object-cover object-center"
        />
        <div className="container mx-auto px-6 relative z-20 -mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-800 rounded-full mb-6 border border-slate-700">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-400 tracking-wider">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/50"
                />
                <div>
                  <p className="font-medium text-white">
                    {blogPost.author.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {blogPost.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">{blogPost.date}</span>
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-400">
                  {blogPost.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-cyan-400 hover:bg-slate-700 transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <article
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          ></article>

          {/* Author Bio
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400/50"
              />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {blogPost.author.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">
                    AUTHOR
                  </span>
                </div>
                <p className="text-slate-400 mb-4">{blogPost.author.role}</p>
                <p className="text-slate-300">
                  Passionate about building scalable web applications with
                  modern technologies. Specializing in JavaScript ecosystem
                  including React, Node.js, and TypeScript.
                </p>
              </div>
            </div>
          </div> */}

          {/* Related Articles
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-medium tracking-wider text-cyan-400">
                RELATED ARTICLES
              </h2>
              <div className="text-slate-400 text-sm">
                <Typewriter
                  words={[
                    "More about MERN",
                    "Advanced Patterns",
                    "Performance Tips",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&${item}`}
                    alt="Related article"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">
                        MERN Stack
                      </span>
                      <span className="text-xs text-slate-400">8 min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item === 1
                        ? "Advanced MongoDB Patterns"
                        : "React Performance Optimization"}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {item === 1
                        ? "Learn advanced query patterns and indexing strategies for MongoDB"
                        : "Techniques to make your React applications blazing fast"}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group">
                      Read article
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
              ))}
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
