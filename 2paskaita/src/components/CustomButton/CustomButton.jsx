import "./CustomButton.css";

const CustomButton = ({ variant, onClick, children }) => {
  // if (variant === "conatined") {
  //   return <button className="custom-button contained">Contained</button>;
  // } else {
  //   return <button className="custom-button outlined">Outlined</button>;
  // }
  const buttonType = variant === "contained" ? "contained" : "outlined";
  return (
    <button className={`custom-button ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
