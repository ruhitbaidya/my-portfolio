import { IoMenu } from "react-icons/io5";
import { SiXdadevelopers } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { Link as PageLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./Style.css";
import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../../UserAuth/UserAuth";
const navObject = [
  {
    text: "Home",
    tag: "home",
  },
  {
    text: "About",
    tag: "about",
  },
  {
    text: "Skill",
    tag: "skill",
  },
  {
    text: "Projects",
    tag: "projects",
  },
  {
    text: "Contact",
    tag: "contact",
  },
];
const Navbar = () => {
  const { user } = useContext(ContextProvide);
  const texts = useLocation();
  const [navClass, SetNavClass] = useState(false);
  const links = navObject.map((item) => (
    <li key={item.tag}>
      <PageLink
        spy={true}
        smooth={true}
        offset={-30}
        activeClass="active"
        duration={500}
        className={item.tag === texts.hash ? "active" : ""}
        to={item.tag}
      >
        {item.text}
      </PageLink>
    </li>
  ));

  useEffect(() => {
    const handelScrool = () => {
      if (window.scrollY > 400) {
        SetNavClass(true);
      } else {
        SetNavClass(false);
      }
    };
    window.addEventListener("scroll", handelScrool);
    return () => {
      window.removeEventListener("scroll", handelScrool);
    };
  }, []);

  return (
    <div
      className={`w-full z-10  ${
        navClass ? "my-bg-color fixed top-0 right-0 left-0" : "bg-transparent"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <h2 className="btn text-white btn-ghost text-xl flex justify-center items-center">
            {" "}
            <SiXdadevelopers /> <span>Ruhit Baidya</span>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <p className='text-white text-[20px] font-[700]'>{user.displayName}</p>
          ) : (
            <>
              <Link to="/login">
                <button className="border px-[32px] py-[9px] text-white hover:bg-white hover:text-gray-700">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="border px-[32px] py-[9px] text-white hover:bg-white hover:text-gray-700">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
