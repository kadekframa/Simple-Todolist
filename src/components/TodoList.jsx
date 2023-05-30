/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const TodoList = (props) => {
  const {
    todos,
    setTodos,
    input,
    setInput,
    todosDone,
    setTodosDone,
    editTodo,
    setEditTodo,
  } = props;

  const handleCheckTodo = ({ id, title, completed }) => {
    const todoDone = { id: id, title: title, completed: true };
    setTodos(todos.filter((todo) => todo.id !== id));
    setTodosDone([...todosDone, todoDone]);
  };

  const handleEditTodo = ({ id, title, completed }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    setInput("");
  };

  const handleDeleteTodo = ({ id, title, completed }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos &&
        todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="text-white mx-10 p-2 mt-3 rounded-md border flex items-center justify-between"
            >
              <p>{todo.title}</p>
              <div className="flex">
                <button
                  className="mr-3.5 border rounded-full bg-red-400"
                  title="check for done"
                  onClick={() => handleCheckTodo(todo)}
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
                    onClick={() => handleEditTodo(todo)}
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
                    onClick={() => handleDeleteTodo(todo)}
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
    </>
  );
};

export default TodoList;
