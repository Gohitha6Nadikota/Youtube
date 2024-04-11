import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if (isMenuOpen === false)
    return null
  return (
    <div className="w-108 mb-4 shadow-md absolute bg-black ml-0 sm:relative sm:ml-3">
      <div className="flex align-center items-center m-3 w-[150px]">
        <div className="text-3xl">
          <IoMdHome />
        </div>
        <h3 className="mx-3 text-sm">Home</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px]">
        <div className="text-2xl">
          <SiYoutubeshorts />
        </div>
        <h3 className="mx-3 text-sm">Shorts</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px]">
        <div className="text-2xl">
          <MdOutlineSubscriptions />
        </div>
        <h6 className="mx-3 text-sm">Subscriptions</h6>
      </div>
      <hr className="mt-4"></hr>
      <div className="flex align-center items-center m-3 w-[150px]">
        <div className="text-2xl">
          <FaHistory />
        </div>
        <h3 className="mx-3 text-sm">History</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px]">
        <div className="text-2xl">
          <MdOutlineWatchLater />
        </div>
        <h3 className="mx-3 text-sm">Watch Later</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px]">
        <div className="text-2xl">
          <BiLike />
        </div>
        <h6 className="mx-3 text-sm">Liked Videos</h6>
      </div>
    </div>
  );
}

export default SideBar