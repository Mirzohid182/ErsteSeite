import React from "react";
import "./../App.css";
import s from "./Content.module.css";

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.image}>
        <img src="https://erece.org/wp-content/uploads/2020/01/01-28-1.jpg" />
      </div>
      <div className={s.image1}>
        <img src="https://i.pinimg.com/originals/16/3d/da/163dda11828a764929f3f3a32a767de7.jpg" />
        <div>Avatar</div>
      </div>
      <div>
        My Post
        <div>New Post</div>
      </div>
      <div>Post1</div>
      <div>Post2</div>
    </div>
  );
};

export default Content;
