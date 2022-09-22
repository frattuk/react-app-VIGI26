import React from "react";
import "./Button.css";

// props = {text: "Say hello", type: "button" | "submit" | "reset", bgColor: "red"}
// props.text
// props.type = ({ type })

// const Button = (props) => (
//   <div className="button-wrapper">
//     <button type="button" className="button">
//       {props.text}
//     </button>
//   </div>
// );

const Button = ({ text, type, bgColor }) => (
  <div className="button-wrapper">
    <button type={type} className="button" style={{ backgroundColor: bgColor }}>
      {text}
    </button>
  </div>
);

export default Button;
