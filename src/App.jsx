import React from "react"
import Form from "./Form"
import Todo from "./Todo"
import "./app.css"

function App() {

  const [todos, setTodos] = React.useState([])

  function addTodo(text) {
    const todo = {
      text: text,
      isCompleted: false,
      isEditing: false,
      id: text + Math.floor(Math.random() * 1000)
    }

    setTodos([...todos, todo])
  }

  function removeTodo(id) {
    const newArr = todos.filter((todo) => todo.id !== id)
    setTodos(newArr)
  }

  function completeTodo(id) {
    const newArr = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted
      return todo
    })
    setTodos(newArr)
  }

  function toggleEditMode(id) {
    const newArr = todos.map((todo) => {
      if (todo.id !== id && todo.isEditing) todo.isEditing = !todo.isEditing
      if (todo.id === id) todo.isEditing = !todo.isEditing
      return todo
    })
    setTodos(newArr)
  }

  function editTodo(id, newText) {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText
        todo.isEditing = !todo.isEditing
      }
      return todo
    })
    setTodos(newArr)
  }

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center bg">
      <div className="container-sm d-flex flex-column align-items-center jusitfy-content-center py-3">
        <h1 className="mb-3 text-center col-12">Todo App</h1>
        <Form addTodo={addTodo} />
        <ul className='col-12 list-group d-flex align-items-center'>
          <Todo
            todos={todos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            toggleEditMode={toggleEditMode}
            editTodo={editTodo}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
