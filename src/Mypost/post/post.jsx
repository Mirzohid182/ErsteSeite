import React from "react";
import "../../App.css";
import s from "./post.module.css";

const Post = (props) => {
  return(
    <div className={s.post}>
      <img src='https://sweetpanda.ru/wp-content/uploads/2016/10/panda-theme-fa16.jpg'/>
      <div>
          <span>
              {props.message} {props.news}
          </span>
      </div>
  </div>
  )
}


export default Post;
