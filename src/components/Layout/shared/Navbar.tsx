import { useState } from "react";
import Container from "./Container";
import RightSideBar from "../mainLayOut/RightSideBar";
import { motion } from "framer-motion";
import {
  children,
  childrenNav,
  intro,
  introInput,
  introNav,
} from "@/animation/navAnimation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#23203e] text-white">
      <div className="bg-[#100f19] p-3 hidden lg:block">
        <Container className="overflow-hidden">
          <motion.ul
            variants={intro}
            initial="hidden"
            animate="visible"
            className="flex justify-end gap-10 mx-4 cursor-pointer"
          >
            <motion.li
              variants={children}
              className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
            >
              Dashboard
              <span className="absolute top-4 left-0 border border-b-0  border-b-gray-500 w-0 group-hover:opacity-100 group-hover:w-full duration-500 mt-2"></span>
            </motion.li>
            <motion.li
              variants={children}
              className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
            >
              Question
              <span className="effectNav"></span>
            </motion.li>
            <motion.li
              variants={children}
              className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
            >
              Quiz
              <span className="effectNav"></span>
            </motion.li>
            <motion.li
              variants={children}
              className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
            >
              Login
              <span className="effectNav"></span>
            </motion.li>
          </motion.ul>
        </Container>
      </div>
      <div className="bg-[#151422]">
        <Container className="flex justify-between items-center p-5">
          <motion.div
            variants={introNav}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center gap-16"
          >
            <motion.span variants={childrenNav} className="text-3xl font-bold">
              Learn <span className="text-cyan-400">Dev</span>
            </motion.span>
            <div className="lg:block hidden">
              <ul className="flex gap-10 cursor-pointer">
                <motion.li
                  variants={childrenNav}
                  className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
                >
                  Home
                  <span className="effectNav"></span>
                </motion.li>
                <motion.li
                  variants={childrenNav}
                  className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
                >
                  Tutorial
                  <span className="effectNav"></span>
                </motion.li>
                <motion.li
                  variants={childrenNav}
                  className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
                >
                  Blog
                  <span className="effectNav"></span>
                </motion.li>
                <motion.li
                  variants={childrenNav}
                  className="transition ease-in-out delay-150 hover:scale-125 duration-200 relative group"
                >
                  About
                  <span className="effectNav"></span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={introInput}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <input
              className="h-9 bg-transparent text-white outline-none border border-gray-700 p-5 rounded-3xl"
              type="search"
              name=""
              id=""
            />
          </motion.div>
          <div className="relative  lg:hidden">
            {isOpen ? (
              <span>
                <svg
                  onClick={handleToggle}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  onClick={handleToggle}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </span>
            )}
            <div
              className={`absolute z-10  ${
                isOpen
                  ? "md:-right-4 top-10 md:top-[39px] -right-4"
                  : "-right-4 md:right-16 md:top-[39px] -top-96"
              } duration-500 `}
            >
              {isOpen && <RightSideBar />}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
