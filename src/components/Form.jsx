/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
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

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    if (completed) {
      const newTodoDone = todosDone.map((todo) => {
        return todo.id === id ? { title, id, completed } : todo;
      });
      setTodosDone(newTodoDone);
    } else {
      const newTodo = todos.map((todo) => {
        return todo.id === id ? { title, id, completed } : todo;
      });
      setTodos(newTodo);
    }

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

  return (
    <>
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
    </>
  );
};

export default Form;
