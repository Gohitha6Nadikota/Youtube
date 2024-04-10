import { useEffect, useState } from 'react';
import React from 'react'
import CommentList from './CommentList';
import { YOUTUBE_COMMENT_API } from "../utils/constants";
export const CommentPart = ({ videoid }) => {
  const [commentData, setComments] = useState();
  const apiKey = process.env.YOUR_API_KEY;
  const getComments = async () => {
    const url = YOUTUBE_COMMENT_API + videoid + "&key=" + apiKey;
    const data = await fetch(url);
    const json = await data.json();
    setComments(json?.items);
    console.log(json?.items);
  };
  useEffect(() => {
    getComments();
  },[videoid])
  return (
      <div className='m-5 p-2 w-full'>
          <h1 className='font-bold text-2xl'>Comments:-</h1>
      { commentData && <CommentList data={commentData} />}
    </div>
  )
}
