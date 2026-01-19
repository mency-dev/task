import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
        <div className="flex bg-[#02d163] justify-between px-17 text-[14px] items-center">
            <div className="flex justify-between">
            <p className="pr-11">Phone: +1023546789</p>
            <p>Email: testdomain@gmail.com</p>
            </div>
            <button className="text-[14px] bg-[#079449] py-3 px-10 font-medium">JOIN US NOW</button>
        </div>
        <div className="flex justify-between bg-white text-gray-700 dark:text-gray-400 px-13 py-10.5 items-center">
            <h1 className="text-[20px] text-green-500 font-bold pl-22">HELP CHARITY</h1>
            <div>
                <nav className="text-[15px] ">
                    <NavLink to="/" className="px-5">HOME</NavLink>
                    <NavLink to="/about" className="px-5">ABOUT US</NavLink>
                    <NavLink to="/causes" className="px-5">CAUSES</NavLink>
                    <NavLink to="/events" className="px-5">EVENT</NavLink>
                    <NavLink to="/portfolio" className="px-5">PORTFOLIO</NavLink>
                    <NavLink to="/blog" className="px-5">BLOG</NavLink>
                    <NavLink to="/contact" className="px-5">CONTACT</NavLink>
                </nav>
            </div>
        </div>
        </>
    );
}