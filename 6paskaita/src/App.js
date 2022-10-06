import "./App.css";
// import Todos from "./pages/Todos/Todos";
import { Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos/Todos";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Todos /> */}
    </div>
  );
}

// import Todo from "./components/Todo/Todo";
// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todoText, setTodoText] = useState("");

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (todoText) {
//       setTodos([...todos, todoText]);
//       setTodoText("");
//     }
//   };

//   const handleDeleteTodo = (todo) => {
//     setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
//   };

// useEffect(() => {
//   if (todos.length !== 0) {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
// }, [todos]);

// useEffect(() => {
//   let todos = JSON.parse(localStorage.getItem("todos"));
//   setTodos(todos);
// }, []);

//   return (
//     <div className="todo-container">
//       <h3>You have {todos.length} Todos</h3>
//       <div className="todos">
//         {todos.map((todo) => (
//           <Todo deleteTodo={() => handleDeleteTodo(todo)}>{todo}</Todo>
//         ))}
//       </div>
//       <form onSubmit={(e) => handleAddTodo(e)}>
//         <input
//           type="text"
//           value={todoText}
//           onChange={(e) => setTodoText(e.target.value)}
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
