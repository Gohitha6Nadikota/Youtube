import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { YOUR_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constants";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { CommentPart } from "./CommentPart";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  const videoid = searchParams.get("v");
  const [videodata, setData] = useState();
  const dispatch = useDispatch();
  const getData = async () => {
    const url = YOUTUBE_VIDEO_API + videoid + "&key=" + YOUR_API_KEY;
    const data = await fetch(url);
    const json = await data.json();
    setData(json);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getData();
  },[]);

  return (
    <div>
      <div className="px-5">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + videoid}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-4 m-2 ">
        <div className="font-bold text-xl ">
          {videodata?.items?.[0]?.snippet?.title}
        </div>
        <div className="flex align-center items-center">
          <div>
            <div className="my-auto items-center text-3xl">
              <FaUserCircle />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-1 m-1 mb-0 pb-0 text-lg w-[250px]">
              <h1>{videodata?.items?.[0]?.snippet?.channelTitle}</h1>
            </div>
            <div className="pt-0 mt-0 px-2 mx-2 pb-1 mb-1 text-sm flex-grow">
              <h1>{videodata?.items?.[0]?.statistics?.viewCount + " views"}</h1>
            </div>
          </div>
          <div className="m-1 p-1">
            <button className="text-black bg-white font-bold rounded-3xl w-[100px] h-10">
              Subscribe
            </button>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex justify-end">
              <div className="flex mx-2 px-2 h-8 rounded-full bg-gray-900">
                <button className="border m-1 text-xl border-black">
                  <BiLike />
                </button>
                <div className="w-[1px] bg-black"></div>
                <button className="border m-1 text-xl bg-gray-900 border-black">
                  <BiDislike />
                </button>
              </div>
              <div className="">
                <button className="bg-gray-900 rounded-3xl mx-2 px-2 h-8">
                  <div className="flex text-lg">
                    <RiShareForwardLine className="m-auto" />
                    <h1 className="px-2 mx-1 text-sm">Share</h1>
                  </div>
                </button>
              </div>
              <div className="align-center justify-center items-center">
                <button className="bg-gray-900 rounded-full mx-2 px-3 h-8">
                  <div className="flex text-lg">
                    <TfiDownload className="m-auto " />
                    <h1 className="px-2 mx-1 text-sm">Download</h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentPart/>
    </div>
  );
};

export default Watchpage;
