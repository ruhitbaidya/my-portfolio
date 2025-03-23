import { useEffect, useState } from "react";
import { SiXdadevelopers } from "react-icons/si";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const getBlogs = async () => {
    const res = await fetch(`http://localhost:5000/get-blog`);
    const result = await res.json();
    console.log(result);
    setBlog(result.data);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div>
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
        <div className="container mx-auto px-[20px] mt-[30px]">
          <div className="bg-gray-600 py-[50px] rounded-lg text-center text-white">
            <h1 className="text-4xl mb-[15px]">My Blogs</h1>
            <p className="text-[18px]">
              This All Blog Writing For Codding Knowladge{" "}
            </p>
          </div>
        </div>
        <main className="py-[50px]">
          <div className="container mx-auto px-[20px]">
            <div>
              <div className="grid grid-cols-3 gap-[25px] ">
                {blog &&
                  blog.map((item) => (
                    <>
                      <div className="space-y-8 border p-[10px] rounded-lg">
                        <div className="flex justify-center items-center">
                          <img
                            className="w-full h-[200px] object-cover"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.content.slice(0, 150),
                            }}
                          />
                        </div>
                        <div>
                          <button className="btn bg-blue-500 text-white">
                            <Link to={`/blog/${item._id}`}>Read More</Link>
                          </button>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
