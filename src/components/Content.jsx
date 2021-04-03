import React from "react";
import "../App.css";
import MyPost from "../Mypost/mypost";
import Post from "../Mypost/post/post";
import s from "./Content.module.css";

const Content = () => {

  let message = [
    {id: 1, name: "Hello, heute ist mein Tag!"},
    {id: 2, name: "Ich will mich neue Videos anschauen"},
    {id:3, name: "Hello, heute ist meine Wunsch!"}
  ]

  const MessageElements =  message.map((m) => <Post key={m.id} name={m.name}/>)

  return (
    <div>
      <div className={s.image}>
        <img src="https://erece.org/wp-content/uploads/2020/01/01-28-1.jpg" />
      </div>
      <MyPost />

      { MessageElements }
      
    </div>  
  );
};

export default Content;