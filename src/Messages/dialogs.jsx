import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import s from "./dialogs.module.css";
import DialogItem from "./dialogsItem";
import MessagesItem from "./MessageItem";

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <DialogItem id="1" name="Ali" />
        <DialogItem id="2" name="Asis" />
        <DialogItem id="3" name="Mirzokhid" />
        <DialogItem id="4" name="Axror" />
        <DialogItem id="5" name="Abror" />
      </div>

      <div className={s.Messages}>
        <MessagesItem name="Wie geht`s Ihnen?" />
        <MessagesItem name="Was machst du?" />
        <MessagesItem name="sehr gut" />
      </div>
    </div>
  );
};

export default Messages;
