import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import s from "./messageItem.module.css";

const MessagesItem = (props) => {
  return (
    <div>
      <span>{props.message}</span>
    </div>
  );
};

export default MessagesItem;
