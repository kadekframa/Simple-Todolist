/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import TodoListDone from "./TodoListDone";

const Container = (props) => {
  const {
    input,
    setInput,
    todos,
    setTodos,
    todosDone,
    setTodosDone,
    editTodo,
    setEditTodo,
  } = props;

  useEffect(() => {
    console.info("Todos: ", todos);
    console.info("Todo Done: ", todosDone);

    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }

    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("todosDone", JSON.stringify(todosDone));
  }, [editTodo, setInput, todos, todosDone]);

  return (
    <div className="bg-zinc-800 w-1/3 h-full rounded-lg shadow-[2px_2px_30px_6px_rgb(0,0,0,0)] shadow-zinc-600 py-8">
      <p className="text-3xl text-white font-bold text-center pb-8">
        Todo-List
      </p>

      {/* Form */}
      <Form
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        todosDone={todosDone}
        setTodosDone={setTodosDone}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

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
      <TodoListDone
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        todosDone={todosDone}
        setTodosDone={setTodosDone}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
};

export default Container;
