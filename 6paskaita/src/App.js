import "./App.css";
import Todo from "./components/Todo/Todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText) {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
  };

  return (
    <div className="todo-container">
      <h3>You have {todos.length} Todos</h3>
      <div className="todos">
        {todos.map((todo) => (
          <Todo deleteTodo={() => handleDeleteTodo(todo)}>{todo}</Todo>
        ))}
      </div>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
