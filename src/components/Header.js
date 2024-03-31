import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-xl text-white">
      <div className="col-span-1 flex">
        <div className="my-auto text-2xl" onClick={() => toggleMenuHandler()}>
          <GiHamburgerMenu />
        </div>
        <a href="/">
          <img
            className="h-12 mx-2 pt-1"
            src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg"
            alt="youtube-icon"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 py-auto items-center flex  justify-center align-center">
        <input
          className=" w-1/2 center border bg-gray-900 border-gray-900 rounded-l-3xl h-9"
          type="text"
          placeholder="    Search"
        />

        <button className="border border-gray-900   bg-gray-900 center rounded-r-3xl h-9">
          <div className="mx-1 p-1 text-2xl">
            <IoIosSearch />
          </div>
        </button>
        <button className="border bg-gray-900 border-gray-900 rounded-full w-9 h-9 m-2">
          <div className="text-xl m-1 p-1">
            <MdMic />
          </div>
        </button>
      </div>
      <div className="col-span-1 flex ml-auto">
        <button className="text-2xl m-2 p-2">
          <MdCreateNewFolder />
        </button>
        <button className="text-2xl m-2 p-2">
          <FaRegBell />
        </button>
        <button className="text-2xl m-2 p-2">
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Header;
