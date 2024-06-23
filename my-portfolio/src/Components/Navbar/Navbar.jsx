import { IoMenu } from "react-icons/io5";
import { SiXdadevelopers } from "react-icons/si";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Style.css"
import { useEffect, useState } from "react";
const navObject = [
  {
    text : "Home",
    tag : "#home"
  },
  {
    text : "About",
    tag : "#about"
  },
  {
    text : "Skill",
    tag : "#skill"
  },
  {
    text : "Projects",
    tag : "#projects"
  },
  {
    text : "Contact",
    tag : "#contact"
  }
]
const Navbar = () => {
  const texts =  useLocation();
      console.log(texts.hash)
  const [navClass, SetNavClass] = useState(false)
    const links = navObject.map((item)=> <li><a className={item.tag === texts.hash ? 'active': ''} href={item.tag}>{item.text}</a></li>)
  
  useEffect(()=>{
    const handelScrool =  ()=>{
      if(window.scrollY > 500){
        SetNavClass(true)
      }else{
        SetNavClass(false)
      }  
      console.log(window.history)
    }
    window.addEventListener('scroll', handelScrool)
    return ()=>{
      window.removeEventListener('scroll', handelScrool)
    }
  }, [])
    
  return (
    <div className={`w-full  ${navClass ? 'my-bg-color fixed' : 'bg-transparent'}`}>
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
          <h2 className="btn text-white btn-ghost text-xl flex justify-center items-center"> <SiXdadevelopers /> <span>Ruhit Baidya</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <button className="border px-[32px] py-[9px] text-white hover:bg-white hover:text-gray-700">Login</button>
          <button className="border px-[32px] py-[9px] text-white hover:bg-white hover:text-gray-700">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
