import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="flex bg-[#02d163] justify-between sm:px-17 px-2 text-[14px] items-center ">
            <div className="flex flex-col  sm:flex-row  justify-between">
            <p className="sm:pr-11">Phone: +1023546789</p>
            <p>Email: testdomain@gmail.com</p>
            </div>
            <button className="sm:text-[14px] text-[11px] bg-[#079449]  px-5 py-3 sm:px-10 font-medium">JOIN US NOW</button>
        </div>
        <div className="bg-white px-13 sm:px-5 lg:px-13 py-4 sm:py-6 lg:py-10.5">
      <div className="flex items-center justify-between sm:flex-row text-gray-700 flex-col">
        
        <div className="flex w-full sm:w-auto justify-between items-center">
          <h1 className="text-[20px] text-green-500 font-bold pl-0 md:pl-10 lg:pl-22">
            HELP CHARITY
          </h1>

          <button
            className="sm:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:block text-[15px] mt-4 sm:mt-0 text`}
        >
          <NavLink to="/" className="block sm:inline sm:px-2 lg:px-5 py-2">
            HOME
          </NavLink>
          <NavLink to="/about" className="block sm:inline sm:px-2 lg:px-5 py-2">
            ABOUT US
          </NavLink>
          <NavLink to="/causes" className="block sm:inline sm:px-2 lg:px-5 py-2">
            CAUSES
          </NavLink>
          <NavLink to="/events" className="block sm:inline sm:px-2 lg:px-5 py-2">
            EVENT
          </NavLink>
          <NavLink to="/portfolio" className="block sm:inline sm:px-2 lg:px-5 py-2">
            PORTFOLIO
          </NavLink>
          <NavLink to="/blog" className="block sm:inline sm:px-2 lg:px-5 py-2">
            BLOG
          </NavLink>
          <NavLink to="/contact" className="block sm:inline sm:px-2 lg:px-5 py-2">
            CONTACT
          </NavLink>
        </nav>

      </div>
    </div>
        </>
    );
}