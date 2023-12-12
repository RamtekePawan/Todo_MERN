import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../constants";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setInput("");
        setUpdateUI((prev) => !prev);
        setShowPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Update ToDo..."
        />
        <button onClick={updateToDo}>Update</button>
      </div>
    </>
  );
};

export default Popup;
