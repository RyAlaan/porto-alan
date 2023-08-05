import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../elements/button/Button";
import Typing from "./Typing";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="bg-primary flex flex-col py-8 px-6 md:px-12 md:py-14 md:justify-between md:flex-row">
      {/* <Image /> */}
      <SideMain />
    </div>
  );
};

const SideMain = () => {
  return (
    <div className="flex flex-row relative py-2 md:py-16">
      <div className="hidden md:flex absolute w-10/12 z-[1] rotate-90 left-[-40.1%] top-0 rounded-full items-center gap-10">
        <span className="bg-quaternary h-5 w-9/12 left-0 rounded-full"></span>
        <div className="">
          <a href="https://github.com/RyAlaan" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white -rotate-90 text-4xl"
            />
          </a>
        </div>
        <div className="">
          <a href="https://instagram.com/ryalaann" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white -rotate-90 text-4xl"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col relative md:ml-20 md:py-0 md:w-2/4">
        <h1 className="text-white text-4xl font-normal py-2 lg:text-6xl">
          Hello, I'm
        </h1>
        <Typing />
        <p className="text-slate-400 text-xs w-2/3 py-2 md:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad
          assumenda labore quidem molestiae adipisci iusto laboriosam,
          dignissimos aut quaerat!
        </p>
        <Button className="w-40 mt-12 font-semibold active:scale-95 p-4 md:mt-14 lg:mt-20 lg:ml-2">
          Contact Me !
        </Button>
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <div className="hidden md:aspect-square md:w-2/4 md:flex lg:w-1/4"></div>
  );
};

export default Hero;
