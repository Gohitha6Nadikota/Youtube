import React from "react";
import EachButton from "./EachButton";

const list = ["All", "C++", "Watched", "Music","Software Engineering","Indian", "Live","Cloud", "Health", "Love","M.S.Subbalakshmi","Mantras","Equations"];
const Buttonlist = () => {
  return (
    <div className="flex">
      {list.map((item, key) => (
        <EachButton key={key} name={item} />
      ))}
    </div>
  );
};

export default Buttonlist;
