const Navbar = () => {
  return (
    <div className="font-poppins bg-primary w-full py-4 px-8 flex flex-row justify-between items-center md:px-10">
      <div className="logo text-3xl font-bold text-white flex flex-row z-[10] border-4 border-transparent bg-primary">
        <span className="text-quaternary">Ry</span>
        <p>Alaan</p>
      </div>
      <div className="hidden flex-row gap-x-4 text-white pr-6 md:flex">
        <a href="/#home">
          <div className="cursor-pointer hover:text-quaternary">Home</div>
        </a>
        <a href="/#about">
          <div className="cursor-pointer hover:text-quaternary">About</div>
        </a>
        <a href="/#skills">
          <div className="cursor-pointer hover:text-quaternary">Skills</div>
        </a>
        <a href="/#project">
          <div className="cursor-pointer hover:text-quaternary">Project</div>
        </a>
        <a href="/#contact">
          <div className="cursor-pointer hover:text-quaternary">Contact</div>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
