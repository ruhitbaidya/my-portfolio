import { SiXdadevelopers } from "react-icons/si";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaEnvelope,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handelSubscribe = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast("Please Select A Valid Email");
      setEmail("");
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5000/subscribe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setEmail("");
        toast(data?.message);
      });
  };
  return (
    <footer className="relative bg-[#0f172a] pt-20 pb-12 border-t border-[#1e293b] overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#38bdf8] blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <SiXdadevelopers className="text-4xl text-[#38bdf8]" />
              <Link
                to="/"
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] hover:bg-gradient-to-l transition-all duration-500"
              >
                Ruhit Baidya
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Full Stack Developer specializing in MERN stack applications.
              Creating beautiful, functional web experiences with modern
              technologies.
            </p>
            <div className="flex gap-5">
              <Link
                to="https://www.linkedin.com/in/ruhitbaidya"
                target="_blank"
                className="text-gray-400 hover:text-[#0a66c2] text-xl transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                to="https://www.facebook.com/ruhitbaidya01"
                target="_blank"
                className="text-gray-400 hover:text-[#1877f2] text-xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookSquare size={30} />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white text-xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter size={30} />
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Information
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#1e293b] rounded-lg text-[#38bdf8]">
                  <MdLocationOn className="text-xl" />
                </div>
                <div>
                  <span className="text-gray-400">Based in</span>
                  <p className="text-white">Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#1e293b] rounded-lg text-[#38bdf8]">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <span className="text-gray-400">Email me at</span>
                  <a
                    href="mailto:ruhitbaidya01@gmail.com"
                    className="text-white hover:text-[#38bdf8] transition-colors block"
                  >
                    ruhitbaidya01@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#1e293b] rounded-lg text-[#38bdf8]">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <span className="text-gray-400">Call me at</span>
                  <a
                    href="tel:+8801742772705"
                    className="text-white hover:text-[#38bdf8] transition-colors block"
                  >
                    +88 01792150202
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Subscription Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8]"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handelSubscribe} className="space-y-4">
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent text-white placeholder-gray-500 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 transition-all duration-300 hover:opacity-90"
              >
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ruhit Baidya. All rights reserved.
          </p>
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
    </footer>
  );
};

export default Footer;
