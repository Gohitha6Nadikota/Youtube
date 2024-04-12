import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Videocard from './videocard'
import { fetchVideos } from '../utils/videoSlice'
const Videocontainer = () =>
{
  const videos = useSelector(state => state.videos.videos);
  console.log(videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const getVideoId = (video) => {
    return video.id?.videoId || video.id;
  }
  return (
    <div className="flex flex-wrap justify-center sm:p-0 sm:m-0 md:p-2 md:m-2">
      <>
        {videos.map((video, index) => (
            <Link to={`/watch?v=${getVideoId(video)}`} key={index}>
          <Videocard info={video} />
        </Link>
        ))}
      </>
    </div>
  );
}

export default Videocontainer