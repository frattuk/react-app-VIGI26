// import React from "react";
// import "./Hero.css";

// // props = {text: "Say hello", type: "button" | "submit" | "reset", bgColor: "red"}
// // props.text
// // props.type = ({ type })

// const Hero = ({ text, type, bgColor }) => (
//   <div className="hero">
//     <h1 type={type} className="title" style={{ color: bgColor }}>
//       {text}
//     </h1>
//     {/* <h2 type={type} className="title" style={{ color: bgColor }}>
//       {text}
//     </h2> */}
//   </div>
// );

// export default Hero;

// Roko kodas:

import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle, color, className, children }) => {
  const heroClassName = () => {
    switch (color) {
      case "red":
        return "red-hero";
      case "blue":
        return "blue-hero";
      case "green":
        return "green-hero";

      default:
        return "";
    }
  };
  return (
    <div className={`${heroClassName()} ${className}`}>
      {/* jeigu title nera nesukurk h1 */}

      {/* {title && <h1>{title}</h1>} */}
      <h1>{title}</h1>
      {/* jeigu title nera nesukurk h2 */}
      {/* {subtitle && <h2>{subtitle}</h2>} */}
      <h2>{subtitle}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Hero;
