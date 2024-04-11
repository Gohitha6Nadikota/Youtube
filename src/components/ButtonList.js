import React from "react";
import EachButton from "./EachButton";

const list = [
  "All",
  "Python",
  "Favorites",
  "Classical Music",
  "Web Development",
  "Bollywood Hits",
  "Streaming",
  "Data Science",
  "Fitness",
  "Rahman",
  "Yoga and Meditation",
  "Quantum Physics",
];

const Buttonlist = () => {
  
  return (
    <div className="flex flex-wrap sm:m-2 md:mx-4 md:my-3">
      {list.map((item, key) => (
        <EachButton key={key} name={item} />
      ))}
    </div>
  );
};

export default Buttonlist;
