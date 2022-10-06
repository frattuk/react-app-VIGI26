import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.div`
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid rgb(231, 231, 231);
  background-color: blue;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 14px;
  color: black;
  font-weight: 500;

  &:hover {
    opacity: 0.6;
    transition: 300ms;
  }
  ${NavigationBar}:hover & {
    background-color: yellow;
    transition: 500ms;
  }
`;

const Navbar = () => {
  return (
    <NavigationBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/todos">Todos</StyledLink>
    </NavigationBar>
  );
};

export default Navbar;
