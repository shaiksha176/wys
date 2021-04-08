import React from "react";
import "./Content.css";
function Content({ content }) {
  console.log(content);
  return (
    <div className="contents">
      <div className="content">
        <div className="inner--content">{content}</div>
        <div>
          {/* <span className="delete">Delete</span>
          <span className="save">Save</span> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
