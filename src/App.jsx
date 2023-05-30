// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosDone, setTodosDone] = useState([]);
  const [editTodo, setEditTodo] = useState(false);

  return (
    <div className="bg-blue-300 w-[100vw] h-full p-16 flex justify-center items-center">
      <Form
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
