import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import s from "./dialogs.module.css";
import DialogItem from "./dialogsItem";
import MessagesItem from "./MessageItem";

const Messages = (props) => {
  let DialogItem1 = [
    { id: "1", name: "Ali" },
    { id: "2", name: "Asis" },
    { id: "3", name: "Mirzokhid" },
    { id: "4", name: "Axror" },
    { id: "5", name: "Abror" },
    { id: "6", name: "Aktam" },
  ];

  let MessagesItem1 = [
    { name: "Wie geht`s Ihnen?" },
    { name: "Was machst du?" },
    { name: "sehr gut" },
  ];

  let DialogElement = DialogItem1.map((d) => (
    <DialogItem key={d.id} name={d.name} />
  ));

  let MessagesElement = MessagesItem1.map((p) => (
    <MessagesItem message={p.name} />
  ));

  let AddPerson = React.createRef();

  let buttonElement = () => {
    let Person = AddPerson.current.value;
    alert(Person);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        {DialogElement}
        <textarea ref={AddPerson}></textarea>
        <button onClick={buttonElement}>Add Person</button>
      </div>

      <div className={s.Messages}>{MessagesElement}</div>
    </div>
  );
};

export default Messages;
