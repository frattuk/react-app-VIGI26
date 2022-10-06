import styled from "styled-components";

const StyledOrangeButton = styled.button`
  background-color: #eb5d05;
  border: 1px solid #eb5d05;
  padding: 10px 24px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
`;
const StyledWhiteButton = styled.button`
  background-color: white;
  border: 1px solid #eb5d05;
  padding: 10px 24px;
  border-radius: 4px;
  color: #eb5d05;
  font-size: 14px;
`;

const Button = ({variant, children}) => {
    if (variant === "contained") {
      return <StyledOrangeButton>{children}</StyledOrangeButton>;
    } else {
      return <StyledWhiteButton>{children}</StyledWhiteButton>;
    };

// const Button = () => {
//   return <StyledWhiteButton>Help me</StyledWhiteButton>;
// };

export default Button;
