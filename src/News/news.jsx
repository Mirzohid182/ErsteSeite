import React from "react";
import s from "./news.module.css";

const News = (props) => {
  let NewsPost = React.createRef();

  let ButtonElement = () => {
    let text = NewsPost.current.value;
    prompt(text);
  };
  return (
    <div>
      Hello news <br />
      <textarea ref={NewsPost}></textarea>
      <div>
        <button onClick={ButtonElement}> Add News </button>
      </div>
    </div>
  );
};

export default News;
