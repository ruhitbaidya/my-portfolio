import { useEffect, useState } from "react";
const Skill = () => {
  const [skills, setSkills] = useState(null);
  const getSkillIcons = async () => {
    const res = await fetch(
      `https://portfolio-server-theta-seven.vercel.app/get-skills`
    );
    const result = await res.json();
    console.log(result.data);
    setSkills(result.data);
  };

  useEffect(() => {
    getSkillIcons();
  }, []);
  return (
    <div id="skill">
      <div className="py-[100px]">
        <div className="container mx-auto px-[20px]">
          <h2 className="text-center  text-3xl font-[700]">My Skill & Tools</h2>
          <hr className="border border-gray-600 w-[15%] mx-auto mt-[15px]" />
          <p className="text-center mt-[20px]">
            Highly Skilled At Progressive enhancement Design & Develope
          </p>
          <div className="mt-[20px]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[40px]">
              {skills &&
                skills.map((item) => (
                  <>
                    <div
                      key={item._id}
                      className="border hover:border-green-400 rounded-lg text-center p-[20px]"
                    >
                      <p className="text-3xl flex justify-center">
                        <img
                          className="h-[70px] w-[70px]"
                          src={item?.image}
                          alt=""
                        />
                      </p>
                      <p className="text-1xl font-bold mt-[10px]">
                        {item.title}
                      </p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
