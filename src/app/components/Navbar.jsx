import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.jpeg";
import menuLinks from "./MenuLinks";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`fixed w-full z-50 flex justify-between ${sticky ? "bg-white bg-opacity-60 text-gray-900" : "text-white"}`}>
      <div className="flex items-center ml-4">
        <Image src={Logo} alt="Logo" width={50} height={50} />
      </div>

      <ul className={`hidden md:flex items-center gap-16 px-10 py-5 text-lg font-medium rounded-bl-full ${sticky ? "text-gray-900 bg-white bg-opacity-0" : "text-white"}`}>
        {menuLinks?.map((menu, i) => (
          <li key={i} className="hover:text-cyan-600">
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>

      <BiMenu onClick={() => setOpen(!open)} className={`md:hidden text-3xl m-5 ${open ? "text-gray-900" : "text-gray-100"} z-50`} />

      <ul className={`flex flex-col justify-center items-center gap-10 text-lg font-medium md:hidden absolute w-2/3 h-screen px-7 bg-white top-0 right-0 ${open ? "right-0" : "right-full"}`}>
        {menuLinks?.map((menu, i) => (
          <li key={i} onClick={() => setOpen(false)} className="hover:text-cyan-600">
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
