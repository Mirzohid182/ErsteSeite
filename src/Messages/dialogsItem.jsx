import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogsItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialogItem}>
      <NavLink to={"/Messages/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;