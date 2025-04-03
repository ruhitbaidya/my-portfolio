import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiCode, FiCpu, FiLayers } from "react-icons/fi";

const Skill = () => {
  const [skills, setSkills] = useState(null);

  const getSkillIcons = async () => {
    try {
      const res = await fetch(`http://localhost:5000/get-skills`);
      const result = await res.json();
      setSkills(result.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    getSkillIcons();
  }, []);

  // Group skills by category if your API provides category info
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode className="text-cyan-400 w-6 h-6" />,
      skills: skills?.filter((skill) => skill.category === "frontend") || [],
    },
    {
      title: "Backend",
      icon: <FiCpu className="text-blue-400 w-6 h-6" />,
      skills: skills?.filter((skill) => skill.category === "backend") || [],
    },
    {
      title: "Tools & DevOps",
      icon: <FiLayers className="text-indigo-400 w-6 h-6" />,
      skills: skills?.filter((skill) => skill.category === "devops") || [],
    },
  ];

  return (
    <section id="skill" className="relative py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header - Enhanced with previous design elements */}
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="w-3 h-3 bg-[#38bdf8] rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium tracking-wider text-[#38bdf8]">
            MY SKILLS
          </h2>
          <div className="text-slate-400 text-sm">
            <Typewriter
              words={["Technologies", "Expertise", "Proficiency"]}
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
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]">
            Expertise
          </span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
          Highly skilled in progressive enhancement, design & development
        </p>

        {/* Enhanced Skills Grid with Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-[#38bdf8]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-700 rounded-lg">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">
                  {category.title}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-[#38bdf8]/30 transition-colors"
                  >
                    <img
                      className="h-12 w-12 object-contain mb-2"
                      src={skill.image}
                      alt={skill.title}
                      loading="lazy"
                    />
                    <h3 className="text-sm font-medium text-white text-center">
                      {skill.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid - Fallback if no categories */}
        {!skills?.[0]?.category && (
          <div className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills?.map((item) => (
                <div
                  key={item._id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center transition-all duration-300 hover:border-[#38bdf8] hover:shadow-lg hover:shadow-[#38bdf8]/20 hover:-translate-y-2"
                >
                  <div className="flex justify-center">
                    <img
                      className="h-16 w-16 object-contain"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-4">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
