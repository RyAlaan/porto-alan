import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../elements/button/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-stone-900 w-full px-4 py-6 md:px-20 flex flex-col sm:flex-row font-poppins">
      <div className="w-full md:w-1/2">
        <form
          action=""
          method=""
          className="flex flex-row text-center gap-2"
        >
          <input
            className="w-full pl-2 text-sm"
            placeholder="Send me a message"
            type="text"
          />
          <Button className="px-2 py-1">Send</Button>
        </form>
        <div className="flex flex-row gap-2 py-4">
          <a href="https://github.com/RyAlaan" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          </a>
          <a href="https://instagram.com/ryalaann" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-2xl"
            />
          </a>
          <a href="https://twitter.com/ryalaann" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
          </a>
        </div>
      </div>
      <div className="w-full md:1/4">
        <div className="Links text-center sm:text-right">
          <ul className="text-white">
            <li className="hover:underline hover:text-quaternary">
              <a href="#hero">Hero</a>
            </li>
            <li className="hover:underline hover:text-quaternary">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline hover:text-quaternary">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:underline hover:text-quaternary">
              <a href="#project">Project</a>
            </li>
            <li className="hover:underline hover:text-quaternary">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
