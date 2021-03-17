import React from "react";
import s from "./dialogs.module.css";

const Messages = (props) => {
    return(
        <div className={s.dialogs}>
            <span>
                {props.name}
            </span>
            dialog
        </div>
    );
}

export default Messages;