import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApi } from "../../../../../portfolio-dashboard/src/config/ApiCalling";
import { port } from "../../../../../portfolio-dashboard/src/config/config";
import { SiXdadevelopers } from "react-icons/si";

const BlogDetails = () => {
  const [blogdel, setBlogDel] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getBlogDetails = async () => {
    const res = await getApi(`${port}/get-singal-blog/${id}`);
    setBlogDel(res.data);
  };
  console.log(blogdel);
  useEffect(() => {
    getBlogDetails();
  }, []);
  return (
    <div>
      <header className="flex justify-between items-center px-[20px] py-[8px] bg-gray-500">
        <div>
          <h2 className="btn btn-ghost text-white text-xl flex justify-center items-center">
            {" "}
            <SiXdadevelopers /> <span>Ruhit Baidya</span>
          </h2>
        </div>
        <div>
          <Link to="/">
            <button className="border border-white px-[35px] py-[10px] text-white">
              Go To Home
            </button>
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-[20px]">
        <div className="w-[70%] mx-auto p-[30px]">
          <div>
            <img className="h-[400px] w-full" src={blogdel?.image} alt="" />
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: blogdel?.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
