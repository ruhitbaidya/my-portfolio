import { IoMenu } from "react-icons/io5";
import { SiXdadevelopers } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./Style.css"
import { useEffect, useState } from "react";
const Navbar = () => {
  const [navClass, SetNavClass] = useState(false)
    const links = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/about">About</NavLink> </li>
        <li> <NavLink to="/skill">Skill</NavLink> </li>
        <li> <NavLink to="/services">Services</NavLink> </li>
        <li> <NavLink to="/blog">Blog</NavLink> </li>
        <li> <NavLink to="/Contact">Contact</NavLink> </li>
    </>
  
  useEffect(()=>{
    const handelScrool = ()=>{
      if(window.scrollY > 500){
        SetNavClass(true)
      }else{
        SetNavClass(false)
      }
      console.log(window.scrollY)
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
