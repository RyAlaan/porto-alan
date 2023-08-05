import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faLaravel,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "./Slider";

const Skills = () => {
  const mySkills = [
    {
      icon: faHtml5,
      name: "HTML",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#E44D26]",
    },
    {
      icon: faCss3Alt,
      name: "CSS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#1A6FB4]",
    },
    {
      icon: faJs,
      name: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#E8D44D]",
    },
    {
      icon: faReact,
      name: "React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#58D2F3]",
    },
    {
      icon: faLaravel,
      name: "Laravel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#F72617]",
    },
    {
      icon: faBootstrap,
      name: "Bootstrap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#6D11EE]",
    },
    {
      icon: faSass,
      name: "Sass",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#C76395]",
    },
  ];

  return (
    // Swipernya ngebug jir
    // sementara pake flexbox dulu
    <div className="bg-tertiary py-8 px-8 font-poppins">
      <div className="flex relative w-full">
        <h1 className="text-white font-bold text-4xl">Skills</h1>
        <span className="absolute bottom-[-0.25rem] left-0 w-32 bg-quaternary h-1 rounded-lg"></span>
      </div>
      <Slider />
      {/* <div className="grid grid-cols-1 my-8 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="w-full max-w[238px] aspect-square p-4 bg-slate-700 group cursor-pointer text-secondary duration-300"
          >
            <div
              className={
                "icon items-center flex flex-row gap-x-6 " + skill.color
              }
            >
              <FontAwesomeIcon icon={skill.icon} className={"text-4xl"} />
              <h1 className={"text-2xl font-semibold"}>{skill.name}</h1>
            </div>
            <div className="text pt-4 pr-2 group-hover:text-white">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
    </div> */}
    </div>
  );
};

export default Skills;
