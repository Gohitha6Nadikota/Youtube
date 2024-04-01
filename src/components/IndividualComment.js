import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
const IndividualComment = ({ data }) => {
    const {name, text} = data;
    return (
      <div className="flex shadow-sm bg-gray-800 p-2 rounded-lg m-2 py-2">
        <button className="text-2xl m-2 p-2">
          <FaUserCircle />
            </button>
            <div>
                <h1 className='font-bold text-lg'>{name}</h1>
                <h2 className='text-lg'>{text}</h2>
            </div>
      </div>
    );
}

export default IndividualComment