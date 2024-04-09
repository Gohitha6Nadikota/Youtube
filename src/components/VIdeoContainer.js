import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import {YOUTUBE_API} from '../utils/constants'
import Videocard from './videocard'
const Videocontainer = () =>
{
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos= async ()=>{
     const data= await fetch(YOUTUBE_API);
     const json= await data.json();
     setVideos(json.items);
  }
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
}

export default Videocontainer