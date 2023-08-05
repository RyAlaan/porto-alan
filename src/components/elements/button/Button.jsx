import { clsx } from "clsx";

const Button = (props) => {
  const { type, onClick, children, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("bg-quaternary text-white", className)}
    >
      {children}
    </button>
  );
};

export default Button;
