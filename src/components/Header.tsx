import { useState } from "react";
import {
  BeakerIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const Links = [
    { id: "1", name: "HOME", link: "/" },
    { id: "2", name: "SERVICE", link: "/" },
    { id: "3", name: "ABOUT", link: "/" },
    { id: "4", name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-rose-500 py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BeakerIcon className="w-7 h-7 text-white" />
          <span className="text-white">D'S NAV</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-rose-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.id} className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn bg-white hover:bg-gray-300 text-rose-500 md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
