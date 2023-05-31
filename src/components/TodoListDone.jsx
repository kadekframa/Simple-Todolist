/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CheckIcon, EditIcon, TrashIcon } from "../utils/icon";

const TodoListDone = (props) => {
  const {
    todos,
    setTodos,
    todosDone,
    setTodosDone,
    input,
    setInput,
    editTodo,
    setEditTodo,
  } = props;

  const handleTodoUndone = ({ id, title, completed }) => {
    // Filter data where id todosDone equals with id that want to check (undone).
    setTodosDone(todosDone.filter((todo) => todo.id !== id));

    // add data todo undone into todos state.
    const todoUndone = { id: id, title: title, completed: false };
    setTodos([...todos, todoUndone]);
  };

  const handleEditTodoDone = ({ id }) => {
    // Find data where id todos equals with id that want to edit.
    const findTodo = todosDone.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    setInput("");
  };

  const handleDeleteTodoDone = ({ id }) => {
    // Filter data where id todos equals with id that want to delete.
    setTodosDone(todosDone.filter((todo) => todo.id !== id));
  };

  return (
    <>
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
                  <CheckIcon />
                </button>
                <button
                  className="mr-3"
                  title="edit"
                  onClick={() => handleEditTodoDone(todo)}
                >
                  <EditIcon />
                </button>
                <button
                  className="mr-3"
                  title="delete"
                  onClick={() => handleDeleteTodoDone(todo)}
                >
                  <TrashIcon />
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
    </>
  );
};

export default TodoListDone;
