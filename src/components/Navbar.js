import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "About",
    link: "./About/About",
  },
  {
    id: 1,
    name: "contact",
    link: "./Contact/Contact",
  },
];
const Dropdown = [
  {
    id: 1,
    name: "vegitable",
    link: "/#",
  },
  {
    id: 1,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 1,
    name: "Grains",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className=" bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl">Logo</div>
          {/* navlink section */}
          <div>
            <ul className="flex items-center gap-10">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    alt=""
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* simple dropdown and links */}
              <li className=" cursor-pointer group ">
                <a
                  href="/#"
                  alt=""
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className=" group-hover:rotate-180  duration-100" />
                    </span>
                  </div>
                </a>

                {/* Dropdown secton */}
                <div className=" absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2 ">
                  <ul>
                    {Dropdown.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          alt=""
                          className=" text-xl inline-block w-full rounded-md  p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* login  button  */}
              <li>
                <button className="flex  justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5  py-2  hover:scale-105 duration-300 rounded-md">
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

