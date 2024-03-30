import Container from "./Container";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="bg-[#23203e] text-white h-28">
      <div className="bg-[#161428] p-3">
        <Container>
          <ul className="flex justify-end gap-10 mx-4">
            <li>Dashboard</li>
            <li>Question</li>
            <li>Quiz</li>
            <li>LogIn</li>
          </ul>
        </Container>
      </div>
      <div className="bg-[#1a192e]">
        <Container className="flex justify-between items-center p-5">
          <div className="flex gap-16">
            <span className="text-xl font-bold">
              Learn <span className="text-cyan-400">Dev</span>
            </span>
            <ul className="flex gap-10">
              <li>Home</li>
              <li>Tutorial</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <motion.input
              className="h-9 bg-transparent outline-none border-b-2 border-b-cyan-500"
              type="search"
              name=""
              id=""
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
