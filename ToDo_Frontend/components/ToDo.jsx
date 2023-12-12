import React from "react";
import axios from "axios";
import { baseURL } from "../constants";

const ToDo = ({
  key,
  text,
  id,
  setUpdateUI,
  setShowPopup,
  setPopupContent,
}) => {
  const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <>
      <li className="row">
        <div className="col-6">{text} </div>
        <button className="col-2 bg-danger" onClick={deleteToDo}>
          DELETE
        </button>
        <button
          className="col-2 bg-info"
          placeholder="UPDATE"
          onClick={updateToDo}>
          UPDATE
        </button>
      </li>
    </>
  );
};

export default ToDo;
