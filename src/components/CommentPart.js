import React from 'react'
import CommentList from './CommentList';
const commentData = [
  {
    name: "Person",
    text: "Their Comment",
    replies: [
      {
        name: "Person",
        text: "Their Comment",
        replies: [],
      },
    ],
  },
  {
    name: "Person",
    text: "Their Comment",
    replies: [
      {
        name: "Person",
        text: "Their Comment",
        replies: [
          {
            name: "Person",
            text: "Their Comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Person",
    text: "Their Comment",
    replies: [
      {
        name: "Person",
        text: "Their Comment",
        replies: [
          {
            name: "Person",
            text: "Their Comment",
            replies: [
              {
                name: "Person",
                text: "Their Comment",
                replies: [
                  {
                    name: "Person",
                    text: "Their Comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Person",
    text: "Their Comment",
    replies: [],
  },
];
export const CommentPart = () => {
  return (
      <div className='m-5 p-2'>
          <h1 className='font-bold text-2xl'>Comments</h1>
          <CommentList data={commentData}/>
    </div>
  )
}
