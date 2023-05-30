// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  // getting values from local storage.
  const getTodoDataLS = () => {
    const data = localStorage.getItem("todos");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

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
  const [status, setStatus] = useState(false);

  // useEffect(() => {
  //   setTodos(getDataLS());
  // }, []);

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
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
