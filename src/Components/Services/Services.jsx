import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-[#38bdf8]" />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks. Focus on performance and accessibility.",
      features: [
        "React.js & Next.js Development",
        "Responsive Web Design",
        "Performance Optimization",
        "Accessibility Compliance",
      ],
    },
    {
      icon: <FaServer className="text-4xl text-[#38bdf8]" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express, and MongoDB. Secure API development and database architecture.",
      features: [
        "Node.js & Express",
        "RESTful API Development",
        "Authentication Systems",
        "Database Design",
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#38bdf8]" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development with the MERN stack. From concept to deployment with seamless integration.",
      features: [
        "MERN Stack Development",
        "End-to-End Testing",
        "CI/CD Pipeline Setup",
        "Cloud Deployment",
      ],
    },
    {
      icon: <FaDatabase className="text-4xl text-[#38bdf8]" />,
      title: "Database Design",
      description:
        "Optimized database architecture and management for performance and scalability with MongoDB and PostgreSQL.",
      features: [
        "MongoDB Optimization",
        "Data Modeling",
        "Query Optimization",
        "Database Security",
      ],
    },
    {
      icon: <FaPalette className="text-4xl text-[#38bdf8]" />,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive user interfaces with a focus on user experience and modern design principles.",
      features: [
        "UI Prototyping",
        "User Experience Design",
        "Design Systems",
        "Responsive Layouts",
      ],
    },
    {
      icon: <FaRocket className="text-4xl text-[#38bdf8]" />,
      title: "Performance Optimization",
      description:
        "Improving application speed and efficiency through code optimization and modern techniques.",
      features: [
        "Lighthouse Optimization",
        "Bundle Size Reduction",
        "Lazy Loading",
        "Caching Strategies",
      ],
    },
  ];

  return (
    <section id="service" className="relative py-20 bg-[#0f172a]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#1e3a8a] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-[#1e40af] opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 mx-auto">
            <div className="w-3 h-3 bg-[#38bdf8] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wider">
              WHAT I OFFER
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]">
              Services
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Comprehensive solutions tailored to your needs, from frontend to
            backend and everything in between.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38bdf8] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-5 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#38bdf8] mr-2">•</span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
