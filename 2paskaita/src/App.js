import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="container">
      Liu
      <div className="buttons">
        <Button text="Say hello" type="button" />
        <Button text="Click me" type="submit" />
        <Button text="Delete" bgColor="red" />
      </div>
      <Button text="Green button" bgColor="green" />
      <div className="hero">
        <Hero text="Info Title" bgColor="red" />

        <Hero text="SubTitle" bgColor="blue" />
      </div>
    </div>
  );
}

export default App;
