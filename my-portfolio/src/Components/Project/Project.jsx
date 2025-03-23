import { Link } from "react-router-dom";
import imageProd from "../../assets/prodGenious.png";
import "./Style.css";
import { useEffect, useState } from "react";
import { getApi } from "../../../../../portfolio-dashboard/src/config/ApiCalling";
import { port } from "../../../../../portfolio-dashboard/src/config/config";
const Projects = () => {
  const [projects, setProjects] = useState(null);
  const getDatas = async () => {
    const res = await getApi(`${port}/getAllProject`);
    setProjects(res.data);
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
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <div className="hoverImage">
                  <img src="https://i.ibb.co/cJV8Yws/glory.png" alt="" />
                </div>
                <div className="flex items-center">
                  <div className="space-y-4">
                    <h2 className="text-[20px] font-[700]">
                      {" "}
                      Glory G&P - Alternative Product Information System. ( Full
                      Stack)
                    </h2>
                    <ul className="list-disc ml-[25px]">
                      <li>
                        <span className="font-bold">
                          Firebase Authentication :
                        </span>{" "}
                        this user can create account and can access end point
                        and create hone product in this site
                      </li>
                      <li>
                        <span className="font-bold">CRUD Operation :</span> they
                        can create read update delete their product and control
                        hone product self.
                      </li>
                      <li>
                        <span className="font-bold">Site sorting:</span> this
                        site user can add product and control sorting and can
                        search her choice product and they can whole control
                        their product
                      </li>
                    </ul>
                    <p>
                      <span className="font-bold">Technologies:</span> React.js,
                      Tailwind CSS express.js, fireabase, MongoDB.
                    </p>

                    <div className="mt-[20px]">
                      <p className="font-bold">
                        <Link
                          to="https://github.com/ruhitbaidya/GlassAndCraft-client"
                          target="_blank"
                          className="block lg:inline border border-gray-600 p-[10px]"
                        >
                          Client Side
                        </Link>
                        <Link
                          to="https://github.com/ruhitbaidya/glassandCraft-server"
                          target="_blank"
                          className="block lg:inline border border-gray-600 p-[10px]"
                        >
                          Server Side
                        </Link>
                        <Link
                          to="https://paper-crafts-glass-art.web.app/"
                          target="_blank"
                          className="block lg:inline border border-gray-600 p-[10px]"
                        >
                          Live Link
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

            <div className="mt-[80px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <div className="hoverImage">
                  <img src={imageProd} alt="" />
                </div>
                <div className="flex items-center">
                  <div className="space-y-4">
                    <h2 className="text-[20px] font-[700]">
                      {" "}
                      Prod Genius - Alternative Product Information System. (
                      Full Stack)
                    </h2>
                    <ul className="list-disc ml-[25px]">
                      <li>
                        <span className="font-bold">
                          Firebase Authentication :
                        </span>{" "}
                        This Site User Control With Help of Firebase.
                      </li>
                      <li>
                        <span className="font-bold">Json Web Token:</span> this
                        method user for user authentication if any user try to
                        access other user value this jwt can not give access
                        with our valid access.
                      </li>
                      <li>
                        <span className="font-bold">Site Recommendation:</span>{" "}
                        This Site Recommendation If You create A Account You can
                        do recommendation any of product.
                      </li>
                    </ul>
                    <p>
                      <span className="font-bold">Technologies:</span> React.js,
                      Tailwind CSS express.js, fireabase, MongoDB. stripe
                      payment method
                    </p>

                    <div className="mt-[20px]">
                      <p className="font-bold">
                        <Link
                          to="https://github.com/ruhitbaidya/queryProjectClient"
                          target="_blank"
                          className="block lg:inline border border-gray-600 p-[10px]"
                        >
                          Client Side
                        </Link>
                        <Link
                          to="https://github.com/ruhitbaidya/queryProjectServer"
                          target="_blank"
                          className="block lg:inline border border-gray-600 p-[10px]"
                        >
                          Server Side
                        </Link>
                        <Link
                          to="https://query-project-client.vercel.app/"
                          target="_blank"
                          className="block lg:inline border border-gray-600 p-[10px]"
                        >
                          Live Link
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
