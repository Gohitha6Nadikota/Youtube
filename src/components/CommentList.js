import React from 'react'
import IndividualComment from './IndividualComment'

const CommentList = ({ data }) => {
    return data.map((c, index) => (
      <div key={index} className='w-full'>
        <IndividualComment data={c?.snippet?.topLevelComment?.snippet} />
        {/*c.replies && c.replies.length > 0 && (
          <div className="pl-5 ml-5">
            <CommentList data={c.replies} />
          </div>
        )*/}
      </div>
    ));
}

export default CommentList