import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import s from "./messageItem.module.css";


const MessagesItem = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className={s.MessageItem}>
          <Route path="/Messages/">{props.message}</Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default MessagesItem;