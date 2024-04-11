import React from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { updateVideos } from "../utils/videoSlice";
import { useDispatch } from "react-redux";
const apiKey = process.env.REACT_APP_YOUR_API_KEY;
const EachButton = (props) => {
  const dispatch = useDispatch();
  const handleFunction = async (n) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + n + "&key=" + apiKey);
    const json = await data.json();
    dispatch(updateVideos(json.items));
  };
  return (
    <div
      className="m-2 px-5 py-2 bg-gray-900 rounded-lg text-xs font-bold text-white"
      onClick={() => handleFunction(props.name)}
    >
      {props.name}
    </div>
  );
};

export default EachButton;
