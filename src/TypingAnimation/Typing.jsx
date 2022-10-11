import React from "react";
import "../TypingAnimation/Typing.css";
const Typing = () => {
  const text = document.querySelector(".second-text");
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
      text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Youtuber";
    }, 8000);
  };
  textLoad();
  setInterval(textLoad, 12000);
  return (
    <div className="body">
      <div className="container">
        <span className="text first-text"> I'm a </span>
        <span className="text second-text"></span>
      </div>
    </div>
  );
};
<script></script>;

export default Typing;
