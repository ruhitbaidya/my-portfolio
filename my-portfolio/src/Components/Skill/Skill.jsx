import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiJsonwebtokens } from "react-icons/si";
import imag1 from "../../assets/react.png"
const Skill = () => {
  return (
    <div id="skill">
        <div className="py-[100px]">
            <div className="container mx-auto px-[20px]">
                <h2 className="text-center  text-3xl font-[700]">My Skill & Tools</h2>
                <hr className="border border-gray-600 w-[15%] mx-auto mt-[15px]" />
                <p className="text-center mt-[20px]">Highly Skilled At Progressive enhancement Design & Develope</p>
                <div className="mt-[20px]">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[40px]">
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><FaHtml5 /></p>
                            <p>HTML</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><FaCss3 /></p>
                            <p>CSS</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><RiTailwindCssFill /></p>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><FaBootstrap /></p>
                            <p>Bootstrap</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><IoLogoJavascript /></p>
                            <p>JavaScript</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <div className="flex justify-center items-center">
                                <img className="w-[50px] h-[50px]" src={imag1} alt="" />
                            </div>
                            <p>ReactJS</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><FaNodeJs /></p>
                            <p>NodeJS</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><SiExpress /></p>
                            <p>ExpressJS</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><SiMongodb /></p>
                            <p>MongoDB</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><SiFirebase /></p>
                            <p>Firebase</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><FaGithub /></p>
                            <p>Github</p>
                        </div>
                        <div className="border hover:border-green-400 text-center p-[20px]">
                            <p className="text-3xl flex justify-center"><SiJsonwebtokens /></p>
                            <p>JSON Web Token</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill