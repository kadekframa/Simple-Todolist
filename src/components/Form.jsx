/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  todosDone,
  setTodosDone,
  editTodo,
  setEditTodo,
  status,
  setStatus,
}) => {
  useEffect(() => {
    console.info(todos);
    console.info("Todo Done: ", todosDone);

    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }

    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("todosDone", JSON.stringify(todosDone));
  }, [editTodo, setInput, todos, todosDone]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );

    setTodos(newTodo);
    setEditTodo(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  const handleTodoUndone = ({ id, title, completed }) => {
    setTodosDone(todosDone.filter((todo) => todo.id !== id));

    const todoUndone = { id: id, title: title, completed: false };
    setTodos([...todos, todoUndone]);
  };

  const handleDeleteTodoDone = ({ id, tile, completed }) => {
    setTodosDone(todosDone.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-zinc-800 w-1/3 h-full rounded-lg shadow-[2px_2px_30px_6px_rgb(0,0,0,0)] shadow-zinc-600 py-8">
      <p className="text-3xl text-white font-bold text-center pb-8">
        Todo-List
      </p>
      <form onSubmit={onFormSubmit} className="flex justify-center px-10">
        <input
          className="rounded-md mr-3 w-full h-10 px-2 bg-black text-white"
          type="text"
          placeholder="Enter a todo..."
          value={input}
          required
          onChange={onInputChange}
        />
        <input
          className="bg-sky-700 rounded-md px-4 text-white font-semibold cursor-pointer hover:bg-sky-600 active:bg-sky-700"
          type="submit"
          value={editTodo ? "OK" : "Add"}
        />
      </form>

      {/* Todo */}
      <p className="px-10 text-white mt-3 text-lg">Todo : </p>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        todosDone={todosDone}
        setTodosDone={setTodosDone}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      {/* Todo Done */}
      <p className="px-10 text-white mt-3 text-lg">Done : </p>
      {todosDone &&
        todosDone.map((todo) => {
          return (
            <div
              key={todo.id}
              className="text-white mx-10 p-2 mt-3 rounded-md border flex items-center justify-between"
            >
              <p>{todo.title}</p>
              <div className="flex">
                <button
                  className="mr-3.5 border rounded-full bg-green-400"
                  title="Undone"
                  onClick={() => handleTodoUndone(todo)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </button>
                <button className="mr-3" title="edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="orange"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button className="mr-3" title="delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5"
                    onClick={() => handleDeleteTodoDone(todo)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      {todosDone < 1 && (
        <p className="mx-10 mt-3 text-gray-400 text-xs text-center">
          --- No todo done yet ---
        </p>
      )}
    </div>
  );
};

export default Form;
