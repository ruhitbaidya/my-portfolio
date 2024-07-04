import "./Style.css";
const About = () => {
  return (
    <div id="about" className="">
      <div className="py-[100px]">
        <div className="container mx-auto px-[20px]">
          <h3 className="text-center  text-3xl font-[700]">About Me</h3>
          <hr className="border border-gray-600 w-[15%] mx-auto mt-[15px]" />
          <div className="mt-[20px]  rounded-lg grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <p className="text-justify p-[20px] ">
                {` Hello! I'm Ruhit Baidya, a passionate MERN stack  developer
              specializing in the front-end. I love creating beautiful,
              responsive, and user-friendly web applications using MongoDB,
              Express.js, React, and Node.js. With a keen eye for design and a
              strong foundation in JavaScript, I strive to deliver seamless user
              experiences.
            
              My journey into web development began with a fascination for how
              websites work and how they are built. Over the years, I've honed
              my skills through various projects, constantly learning and
              adapting to new technologies. Whether it's building interactive
              interfaces, optimizing performance, or integrating APIs, I enjoy
              tackling challenges and pushing the boundaries of what's possible
              on the web.
          
      
              In my free time, I enjoy exploring new web development trends,
              contributing to open-source projects, and sharing my knowledge
              with the developer community. I'm always eager to collaborate on
              exciting projects and bring innovative ideas to life.`}
              </p>
              <div className="p-[10px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] ">
                  <div className=" p-[15px]  items-center flex-col">
                    <h2 className="text-[20px] font-[700] text-gray-700">
                      Name
                    </h2>
                    <p className="text-gray-700 text-[600]">Ruhit Baidya</p>
                  </div>
                  <div className="  p-[15px]  items-center flex-col">
                    <h2 className="text-[20px] font-[700] text-gray-700">
                      Email
                    </h2>
                    <p className="text-gray-700 text-[600]">
                      ruhitbaidya01@gmail.com
                    </p>
                  </div>
                  <div className="  p-[15px]  items-center flex-col">
                    <h2 className="text-[20px] font-[700] text-gray-700">
                      Education
                    </h2>
                    <p className="text-gray-700 text-[600]">
                      Bachelor of Arts 2018 - present <br/>
  Sreemangal Govt College at Sreemangal, Moulvibazar.
  
                    </p>
                  </div>
                  <div className=" p-[15px]  items-center flex-col">
                    <h2 className="text-[20px] font-[700] text-gray-700">
                      Date Of Birth
                    </h2>
                    <p className="text-gray-700 text-[600]">31/03/1998</p>
                  </div>
                  <div className=" p-[15px]  items-center flex-col">
                    <h2 className="text-[20px] font-[700] text-gray-700">
                      Location
                    </h2>
                    <p className="text-gray-700 text-[600]">Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='lg:w-[80%] mx-auto flex items-center justify-center'>
                <img className='h-[500px] object-cover rounded-lg border-4 border-green-300' src='https://i.ibb.co/ncv73r1/ruhit.jpg' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
