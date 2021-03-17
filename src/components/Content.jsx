import React from "react";
import "../App.css";
import MyPost from "../Mypost/mypost";
import Post from "../Mypost/post/post";
import s from "./Content.module.css";

const Content = () => {
  return (
    <div>
      <div className={s.image}>
        <img src="https://erece.org/wp-content/uploads/2020/01/01-28-1.jpg" />
      </div>
      <MyPost />
      <Post
        message="Hello, heute ist mein Tag!"
        news="Ich will mich neue Videos anschauen"
      />
      <Post message="Hello, heute ist meine Wunsch!" />
    </div>
  );
};

export default Content;
