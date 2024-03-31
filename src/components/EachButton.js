import React from "react";

const EachButton = (props) => {
  return (
    <div className="m-2 px-5 py-2 bg-gray-900 rounded-lg text-xs font-bold text-white">
      {props.name}
    </div>
  );
};

export default EachButton;
