import React, { useState } from "react";
import IndividualChat from "./IndividualChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useEffect } from "react";
import { generateMessage, getRandomName } from "../utils/generator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [LiveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const val = setInterval(() => {
      dispatch(
        addMessage({ name: getRandomName(), message: generateMessage(12) })
      );
    }, 1500);
    return () => {
      clearInterval(val);
    };
  }, []);
  return (
    <div>
      <div className=" mx-2 p-1 my-1 border border-gray-200 rounded-lg w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((mgs, index) => (
          <IndividualChat key={index} name={mgs.name} message={mgs.message} />
        ))}
      </div>
      <form
        className="mx-1 py-0 my-0 border h-9 border-gray-200 rounded-lg "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "user",
              message: LiveMessage ,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Enter your comment"
          autoFocus="false"
          className="w-96 mx-3 px-1 bg-black text-white rounded-lg"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-white text-black rounded-xl w-[50px] my-1">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
