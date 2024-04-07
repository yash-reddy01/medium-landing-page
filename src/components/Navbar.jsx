import { Button } from "./utility/Button";
import Logo from "../assets/medium-logo.svg";

export const Navbar = () => {
  
  return (
    <div className="border border-black border-t-0 w-screen fixed bg-white top-0 z-10 ">
      <div className="navbar flex justify-between items-center mx-4 md:mx-8 py-4">
        <div className="md:w-1/4">
          <a href="#">
            <img src={Logo} alt="" className="h-6 md:h-6" />
          </a>
        </div>
        <div className={`md:flex md:w-3/4 justify-end hidden`}>
          <div className="flex justify-end items-center">
            <span className="px-3 hover:underline">
              <a href="#">Our Story</a>
            </span>
            <span className="px-3 hover:underline">
              <a href="#">Membership</a>
            </span>
            <span className="px-3 hover:underline">
              <a href="#">Write</a>
            </span>
            <span className="px-3 hover:underline">
              <a href="#">Sign in</a>
            </span>
            <Button text="Get started" css="text-white" />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
            <Button text="Get started" css="text-white" />
        </div>
      </div>
    </div>
    
  );
};
