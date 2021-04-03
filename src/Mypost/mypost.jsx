import React from "react";
import "../App.css";
import s from "./mypost.module.css";

const MyPost = () => {

  let newElement = React.createRef();

  let ButtonByPost = () => {
    let text = newElement.current.value;
    alert(text);
  };

  return (
    <div>
      <textarea ref={newElement}></textarea>
      <div className={s.post}>
        <button onClick={ButtonByPost}>Add post</button>
      </div>
    </div>
  );
};

export default MyPost;
