/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CheckIcon, EditIcon, TrashIcon } from "../utils/icon";

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

  const handleCheckTodo = ({ id, title }) => {
    // Filter data where id todos equals with id that want to check (done).
    setTodos(todos.filter((todo) => todo.id !== id));

    // add data todo done into todosDone state.
    const todoDone = { id: id, title: title, completed: true };
    setTodosDone([...todosDone, todoDone]);
  };

  const handleEditTodo = ({ id }) => {
    // Find data where id todos equals with id that want to edit.
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    setInput("");
  };

  const handleDeleteTodo = ({ id }) => {
    // Filter data where id todos equals with id that want to delete.
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
                  <CheckIcon />
                </button>
                <button
                  className="mr-3"
                  title="edit"
                  onClick={() => handleEditTodo(todo)}
                >
                  <EditIcon />
                </button>
                <button
                  className="mr-3"
                  title="delete"
                  onClick={() => handleDeleteTodo(todo)}
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          );
        })}

      {todos < 1 && (
        <p className="mx-10 text-gray-400 text-xs text-center mt-3">
          --- No todo yet! ---
        </p>
      )}
    </>
  );
};

export default TodoList;
