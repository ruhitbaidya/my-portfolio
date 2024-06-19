import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiXdadevelopers } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-[50px]">
      <div className="container mx-auto px-[20px]">
      <div>
      <h2 className="btn text-white btn-ghost text-2xl flex justify-center items-center"> <SiXdadevelopers /> <span>Ruhit Baidya</span></h2>
      </div>
      <div>
        <div className="flex justify-center items-center gap-[20px] text-white text-[35px] mt-[30px]">
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
      <hr className="my-[40px]" />
      <div>
        <p className="text-white text-center">Copyright&copy;Ruhit baidya 2024 Alright Reserved</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
