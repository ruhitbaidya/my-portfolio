import { useForm } from "react-hook-form";
import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("https://my-perso-backend.vercel.app/sendMessage", data)
      .then((res) => {
        if (res.data.success) {
          toast.success("Message sent successfully!");
          reset();
        }
      })
      .catch((err) => {
        toast.error("Failed to send message");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative py-24 min-h-screen bg-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium tracking-wider text-cyan-400">
            GET IN TOUCH
          </h2>
          <div className="text-slate-400 text-sm">
            <Typewriter
              words={["Contact Me", "Send Message", "Let's Talk"]}
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
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Me
          </span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-12"></div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 lg:p-8 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                  <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400">
                    <MdLocationOn className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Location
                    </h3>
                    <p className="text-slate-300">Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                  <div className="p-2 bg-indigo-400/10 rounded-lg text-indigo-400">
                    <IoCall className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <a
                      href="tel:+8801742772705"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      +88 01792150202
                    </a>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-2 flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                  <div className="p-2 bg-blue-400/10 rounded-lg text-blue-400">
                    <MdOutlineMail className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a
                      href="mailto:ruhitbaidya01@gmail.com"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      ruhitbaidya01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-6">
                  <Link
                    to="https://www.linkedin.com/in/ruhitbaidya"
                    target="_blank"
                    className="text-slate-300 hover:text-[#0a66c2] transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    to="https://github.com/ruhitbaidya"
                    target="_blank"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Link>
                  <Link
                    to="https://twitter.com/ruhitbaidya"
                    target="_blank"
                    className="text-slate-300 hover:text-[#1DA1F2] transition-colors"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name *
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent placeholder-slate-500"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email *
                </label>
                <input
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent placeholder-slate-500"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent placeholder-slate-500"
                  rows="4"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 transition-all duration-300 hover:opacity-90"
              >
                {loading ? (
                  <>
                    <div className="flex justify-center items-center">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
