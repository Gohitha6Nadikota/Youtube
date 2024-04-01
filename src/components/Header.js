import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cacheSearch = useSelector(store => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestions(cacheSearch[searchQuery]);
      }
      else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({
        [searchQuery]: json[1],
      }));
    } catch (err) {
      console.log("Error");
    }
  };
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
        <div className="w-1/2 center border bg-gray-900 border-gray-900 rounded-l-3xl h-9 ">
          <input
            className="pl-5 w-full center border bg-gray-900 border-gray-900 rounded-l-3xl h-9"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          { showSuggestions && suggestions.length!==0 &&( <div className=" w-[490px]  shadow-xl absolute z-90">
            <ul className="pl-2 bg-black text-white rounded-lg border border-gray-900">
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-800 ">🔍 {s}</li>))}
            </ul>
          </div>)
          }
        </div>
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
