import axios from "axios";
import { useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Style.css";
import { useState } from "react";
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true)
    axios
      .post("http://localhost:5000/sendMessage", data)
      .then((res) => {
        if(res.data.success){
          setLoading(false)
          toast.success("Message Send Successfully")
          reset()
          
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id='contact' className="setBg-contact">
      <div className="bg-colors py-[100px]">
        <div className="container mx-auto px-[20px] text-white">
          <div>
            <div>
            <ToastContainer />
              <div>
                <h2 className="text-center text-white text-3xl font-[700]">
                  Contact Me
                </h2>
                <hr className="border border-white  w-[15%] mx-auto mt-[15px]" />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center items-center">
                  <div>
                    <div className="text-center">
                      <div className=" p-[15px] border-b">
                        <span className="text-[25px] flex justify-center items-center mb-[15px]">
                          <MdOutlineMail />
                        </span>{" "}
                        <span className="font-[700] text-[20px]">
                          ruhitbaidya01@gmail.com
                        </span>
                      </div>
                      <div className=" p-[15px] border-b">
                        <span className="text-[25px] flex justify-center items-center mb-[15px]">
                          <IoCall />
                        </span>{" "}
                        <span className="font-[700] text-[20px]">
                          +88 01742772705
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-[20px] text-[35px] mt-[30px]">
                      <span>
                        <Link>
                          <FaLinkedin />{" "}
                        </Link>
                      </span>
                      <span>
                        <Link>
                          <FaFacebookSquare />{" "}
                        </Link>
                      </span>
                      <span>
                        <Link>
                          <FaGithubSquare />{" "}
                        </Link>
                      </span>
                      <span>
                        <Link>
                          <FaTwitterSquare />{" "}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-[30px] p-[20px] space-y-[15px]"
                  >
                    <div className="">
                      <div className="flex-1">
                        <label htmlFor="name">Name *</label>
                        <input
                          {...register("name")}
                          className="w-full p-[10px] bg-transparent border focus:outline-none"
                          type="text"
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="">Email *</label>
                      <input
                        {...register("email")}
                        className="w-full p-[10px] bg-transparent border focus:outline-none"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Message</label>
                      <textarea
                        {...register("message")}
                        className="w-full p-[10px] bg-transparent border focus:outline-none"
                        name="message"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Write Message"
                      ></textarea>
                    </div>
                    <div>
                      <button className="w-full py-[5px] border hover:bg-white hover:text-black">
                        {
                          loading ? <span className="loading loading-spinner loading-xs"></span> : 'Submit'
                        }                        
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
