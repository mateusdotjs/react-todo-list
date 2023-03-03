import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodo(text) {
    const todo = {
      text: text,
      isCompleted: false,
      isEditing: false,
      id: text + Math.floor(Math.random() * 1000),
    };

    setTodos([...todos, todo]);
  }

  function removeTodo(id) {
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  }

  function completeTodo(id) {
    const newArr = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newArr);
  }

  function toggleEditMode(id) {
    const newArr = todos.map((todo) => {
      if (todo.id !== id && todo.isEditing) todo.isEditing = !todo.isEditing;
      if (todo.id === id) todo.isEditing = !todo.isEditing;
      return todo;
    });
    setTodos(newArr);
  }

  function editTodo(id, newText) {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(newArr);
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-start bg-neutral-200">
      <h1 className="my-5 text-5xl">Todo App</h1>
      <Form addTodo={addTodo} />
      <TodoList
        className="flex w-full flex-col items-center gap-5 p-2"
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        toggleEditMode={toggleEditMode}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
