import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Videocard from "./videocard";
const SearchPage = () => {
  const videos = useSelector((state) => state.videos.videos);
    const dispatch = useDispatch();
    //console.log(videos);
  return (
    <div className="flex flex-wrap justify-center p-2 m-2">
      <>
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <Videocard info={video} />
          </Link>
        ))}
      </>
    </div>
  );
};

export default SearchPage;
