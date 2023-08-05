import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Derry Alantis",
        900,
        "a Front End Dev",
        900,
        "a Student",
        900,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-quaternary text-2xl md:text-4xl"
    />
  );
};

export default Typing;
