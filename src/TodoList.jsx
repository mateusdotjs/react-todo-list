import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, removeTodo, completeTodo, toggleEditMode, editTodo }) => {
  return (
    <ul className="flex w-full flex-col items-center gap-5 p-2">
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            toggleEditMode={toggleEditMode}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
