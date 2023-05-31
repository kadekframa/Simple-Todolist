// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Container from "./components/Container";

function App() {
  // Getting values from local storage.
  const getTodoDataLS = () => {
    const data = localStorage.getItem("todos");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // Getting values from local storage.
  const getTodoDoneDataLS = () => {
    const data = localStorage.getItem("todosDone");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getTodoDataLS());
  const [todosDone, setTodosDone] = useState(getTodoDoneDataLS());
  const [editTodo, setEditTodo] = useState(false);

  return (
    <div className="bg-blue-300 w-[100vw] h-full p-16 flex justify-center items-center">
      <Container
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        todosDone={todosDone}
        setTodosDone={setTodosDone}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
