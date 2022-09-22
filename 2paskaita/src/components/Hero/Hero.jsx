import React from "react";
import "./Hero.css";

// props = {text: "Say hello", type: "button" | "submit" | "reset", bgColor: "red"}
// props.text
// props.type = ({ type })

const Hero = ({ text, type, bgColor }) => (
  <div className="hero">
    <h1 type={type} className="title" style={{ color: bgColor }}>
      {text}
    </h1>
    {/* <h2 type={type} className="title" style={{ color: bgColor }}>
      {text}
    </h2> */}
  </div>
);

export default Hero;
