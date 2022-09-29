import { useState } from "react";

import "./Products.css";
import CustomButton from "../../components/CustomButton/CustomButton";

// Kai uzkraunamas puslpais yra renderinami elementai
// kai yra nustatomas setState bet kuris, daromas rerender

const Products = () => {
  const [counter, setCounter] = useState(2);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("Liuliu");
  const [surname, setSurname] = useState("Bara");
  const [activeDay, setActiveDay] = useState("");
  const [todos, setTodos] = useState(["ismokti React"]);
  const [todoText, setTodoText] = useState("");
  const [age, setAge] = useState(20);
  const [number, setNumber] = useState(10);

  const [colors, setColors] = useState(["red"]);
  const [colorText, setColorText] = useState("");
  const [boxWidth, setBoxWidth] = useState(50);
  const [boxHeight, setBoxHeight] = useState(50);
  const [boxColor, setBoxcolor] = useState("black");
  const handleClick = () => {
    setCounter(counter + 2);
  };

  const transformSurname = () => {
    if (surname === "Bara") {
      setSurname("Klei");
    } else {
      setSurname("Bara");
    }
  };

  const handleAddColor = () => {
    if (colorText) {
      setColors((prevColors) => [...prevColors, colorText]); // prideda nauja spalva
      setColorText(""); // isvalo inputa
    }
  };

  const handleAddTodo = () => {
    if (todoText.length >= 1) {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
  };
  // prideti tik tada, kai textas teigiamas, dar kaip padaryti delete
  const handleIncreaseBoxSize = () => {
    setBoxWidth((prevBoxWidth) => prevBoxWidth + 25);
    setBoxHeight((prevBoxHeight) => prevBoxHeight + 25);
    if (boxColor === "black") {
      setBoxcolor("gray");
    } else {
      setBoxcolor("black");
    }
  };
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <button onClick={handleClick}>Products : {counter}</button>
      <br />
      <br />
      <h2>Count value is: {quantity}</h2>
      <button onClick={handleClick}>Reset</button>
      <button onClick={handleClick}>Plus +{counter}</button>
      <button onClick={handleClick}>Minus -{counter}</button>
      <br />
      <br />
      <p>Today I am {age} Years of Age</p>
      <p>I have {number} siblings</p>
      <button onClick={() => setAge(30)}>Get older!</button>
      <button onClick={() => setNumber(12)}>More Siblings!</button>
      <br />
      <br />

      <button onClick={() => setQuantity(100)}>100</button>
      <button onClick={() => setQuantity(200)}>200</button>
      <button onClick={() => setQuantity(500)}>500</button>
      <br />
      <h2>Kiekis {quantity}</h2>
      <br />
      <br />
      <h2 onClick={() => setName("Kleika")}>{name}</h2>
      <h2 onClick={transformSurname}>{surname}</h2>
      {weekdays.map((weekday) => (
        <span
          className={`weekday ${activeDay === weekday ? "active" : ""}`}
          onClick={() => setActiveDay(weekday)}
        >
          {weekday}
        </span>
      ))}

      <div>
        <div className="todo-list">
          <input
            type="text"
            className="todo-input"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <CustomButton variant="contained" onClick={handleAddTodo}>
            Add todo
          </CustomButton>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <span onClick={() => handleDeleteTodo(todo)}>X</span>
              </li>
            ))}
          </ul>
          <br />
          <br />
          <input
            type="text"
            className="todo-input"
            value={colorText}
            onChange={(e) => setColorText(e.target.value)}
          />
          <CustomButton onClick={handleAddColor}>Add new color</CustomButton>
          {colors.map((color, index) => (
            <div
              key={`${color} ${index}`}
              style={{ backgroundColor: color, width: 50, height: 50 }}
            />
          ))}

          <br />
          <br />
          <div
            style={{ backgroundColor: "black", width: boxWidth, height: 50 }}
          />
          <br />

          <button onClick={handleIncreaseBoxSize}> Increase box size</button>
          <div
            style={{
              backgroundColor: boxColor,
              width: boxWidth,
              height: boxHeight,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
