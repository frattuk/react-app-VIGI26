import "./Todos.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));

    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (text) {
      setTodos((prevTodos) => [...prevTodos, text]);
      setText("");
      localStorage.setItem("todos", JSON.stringify([...todos, text]));
    }
  };
  return (
    <div>
      <Navbar />

      <div className="container">
        {todos.length} Todos
        <form onSubmit={handleAddTodo}>
          <input
            typr="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">Add todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
