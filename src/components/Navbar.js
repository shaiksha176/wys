import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ handlechange }) {
  //   const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState([]);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [showcontent, setShowcontent] = useState(false);
  const [content, setcontent] = useState("");
  const [id, setId] = useState("");
  let ide = "";
  const addItems = () => {
    setHeaders((prevHeaders) => [
      ...prevHeaders,
      {
        id: new Date().toLocaleTimeString().slice(0, 7).replaceAll(":", ""),
        name: input,
      },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    const newArray = headers.filter((item) => item.id !== id);
    setHeaders(newArray);
  };

  const handleEdit = (id) => {
    setShowcontent(!showcontent);
    setId(id);
    console.log(headers.find((item) => item.id === id));
    handlechange(headers.find((item) => item.id === id));
  };

  const handleEditContent = () => {
    // console.log(headers.find((item) => item.id === id));
    let data = headers.find((item) => item.id === id);
    data.content = content;
    console.log(data);

    setcontent(data.content);
    handlechange(headers.find((item) => item.id === id));

    setShowcontent(false);
    // ide = "";
  };
  return (
    <div className="navbar">
      <div className="menu-items">
        <ul>
          <li>
            <Link
              to="/"
              className={active1 && "active"}
              onClick={() => {
                setActive1(!active1);
                setActive2(false);
                setActive3(false);
              }}
            >
              All
            </Link>
          </li>
          <li>
            <Link
              to="/graph"
              className={active2 && "active"}
              onClick={() => {
                setActive2(!active2);
                setActive1(false);
                setActive3(false);
              }}
            >
              Graph
            </Link>
          </li>
          <li>
            <Link
              to="/recent"
              className={active3 && "active"}
              onClick={() => {
                setActive3(!active1);
                setActive1(false);
                setActive2(false);
              }}
            >
              Recent
            </Link>
          </li>
        </ul>
      </div>
      <div className="add">
        <input
          type="text"
          placeholder="Add here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItems}>+</button>
      </div>
      <ul>
        <div className="headers">
          {headers.map((item) => (
            <div className="list--child" key={item.id}>
              <li key={item.id}>
                {item.name}
                <div>
                  <i
                    class="las la-trash"
                    onClick={() => handleDelete(item.id)}
                  ></i>
                  <i class="las la-pen" onClick={() => handleEdit(item.id)}></i>
                </div>
              </li>
            </div>
          ))}
          <div className="list--child">
            <li>
              alefk
              <div>
                <i class="las la-trash"></i>
                <i class="las la-pen"></i>
              </div>
            </li>
          </div>
        </div>
      </ul>
      {showcontent && (
        <div className="box">
          <textarea
            name=""
            id=""
            cols="53"
            rows="10"
            placeholder="add content or edit content"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          ></textarea>
          {/* <input type="text" name="" id="" /> */}
          <button onClick={handleEditContent}>ADD OR EDIT CONTENT</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
