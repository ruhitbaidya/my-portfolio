import {
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiXdadevelopers } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-[50px]">
      <div className="container mx-auto px-[20px]">
        <div>
          <h2 className="btn text-white btn-ghost hover:bg-transparent text-2xl flex justify-center items-center">
            {" "}
            <SiXdadevelopers /> <span>Ruhit Baidya</span>
          </h2>
        </div>
        <div>
          <div className="flex justify-center items-center gap-[20px] text-white text-[35px] mt-[30px]">
            <span>
              <Link
                to="https://www.linkedin.com/in/ruhitbaidya"
                target="_blank"
              >
                <FaLinkedin />{" "}
              </Link>
            </span>
            <span>
              <Link to="https://www.facebook.com/ruhitbaidya01" target="_blank">
                <FaFacebookSquare />{" "}
              </Link>
            </span>
            <span>
              <Link to="https://github.com/ruhitbaidya" target="_blank">
                <FaGithubSquare />{" "}
              </Link>
            </span>
          </div>
        </div>
        <hr className="my-[40px]" />
        <div>
          <p className="text-white text-center">
            Copyright&copy;Ruhit baidya 2024 Alright Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
