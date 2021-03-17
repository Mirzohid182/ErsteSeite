import React from "react";
import "../App.css";
import s from "./mypost.module.css";

const MyPost = () => {
  return (
    <div>
      <textarea></textarea>
      <div className={s.post}>
        <button>Add post</button>
      </div>
    </div>
  );
};

export default MyPost;
