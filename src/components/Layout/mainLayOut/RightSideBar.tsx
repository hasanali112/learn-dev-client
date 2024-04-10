import Menu from "@/components/sidebarcomponent/Menu";
import SignIn from "@/components/sidebarcomponent/SignIn";
import { useState } from "react";

const RightSideBar = () => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSignState = () => {
    setIsOpenState(!isOpenState);
    setIsOpen(false);
  };

  const toggleState = () => {
    setIsOpen(!isOpen);
    setIsOpenState(false);
  };

  return (
    <div className="bg-white w-[300px]  h-screen rounded-lg p-2">
      <div>
        <div className="flex justify-end items-center gap-5 p-2 bg-slate-200 rounded-lg">
          <div>
            <h1
              onClick={toggleSignState}
              className="text-gray-500 inline-flex items-center gap-2 cursor-pointer"
            >
              Sign In{" "}
              {isOpenState ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              )}
            </h1>
          </div>
          <span className="text-gray-700">|</span>
          <div>
            <h1
              onClick={toggleState}
              className="text-gray-500 inline-flex items-center gap-2 cursor-pointer"
            >
              Menu{" "}
              {isOpen ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              )}
            </h1>
          </div>
        </div>
        <div>
          <div>{isOpenState && <SignIn />}</div>
          <div>{isOpen && <Menu />}</div>
        </div>
        <div>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">Home</li>
            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">
              Tutorial
            </li>
            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">Blog</li>
            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">About</li>
          </ul>
        </div>
        <div className="w-3/4 mx-auto mt-3">
          <input
            className="h-9 text-black  bg-transparent outline-none border border-gray-500 rounded-2xl p-3"
            type="search"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
