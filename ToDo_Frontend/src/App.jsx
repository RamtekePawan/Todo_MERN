import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../constants";
import ToDo from "../components/ToDo";
import Popup from "../components/Popup";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoArr, seTtodoArr] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        seTtodoArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateUI]);

  const submitButton = () => {
    axios.post(`${baseURL}/save`, { toDo: todo }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setTodo("");
    });
  };

  return (
    <main>
      <div className="container-sm bg-body-secondary ">
        <div className="row justify-content-center">
          <div className="col-10 border-danger justify-content-center">
            <h1 className="bg-info align text-bg-primary text-center">
              TODO APP
            </h1>
            <div className="row pt-3 justify-content-center">
              <div className="col-2">
                <label htmlFor="input" className="text-black-100 gx-2">
                  Enter ToDo :
                </label>
              </div>

              <input
                id="input"
                className="col-5 px-2 pe-2"
                type="text"
                placeholder="Write ToDo here ..."
                value={todo}
                onChange={onChangeHandler}
              />
              <button
                type="button"
                className="col-2 btn-alert bg-primary px-2 btn-hover-add"
                onClick={submitButton}>
                ADD
              </button>

              <br />
            </div>
            <div className="row justify-content-center  pt-4">
              <div className="col-10">
                <ul>
                  {todoArr.map((item) => (
                    <ToDo
                      key={item._id}
                      text={item.toDo}
                      id={item._id}
                      setUpdateUI={setUpdateUI}
                      setShowPopup={setShowPopup}
                      setPopupContent={setPopupContent}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="justify-content-center align-content-center bg-info  ">
            <div className="popup container-md w-50 bg-black text-danger">
              <Popup
                setShowPopup={setShowPopup}
                popupContent={popupContent}
                setUpdateUI={setUpdateUI}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
