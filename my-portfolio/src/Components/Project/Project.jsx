import "./Style.css";
import { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState(null);
  const getDatas = async () => {
    const res = await fetch(
      `https://portfolio-server-theta-seven.vercel.app/getAllProject`
    );
    const result = await res.json();
    setProjects(result.data);
  };

  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div id="projects" className="bg-gray-300">
      <div className="container mx-auto px-[20px] py-[100px]">
        <div>
          <div>
            <h2 className="text-center  text-3xl font-[700]">Projects</h2>
            <hr className="border border-gray-600 w-[15%] mx-auto mt-[15px]" />
          </div>
          <div className="my-[50px]">
            {projects &&
              projects.map((item) => (
                <>
                  <div className="mt-[80px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      <div className="flex items-center">
                        <div className="space-y-4">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </div>
                      </div>
                      <div className="hoverImage">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
