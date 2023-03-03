import React from "react";

const Todo = ({ todo, removeTodo, completeTodo, toggleEditMode, editTodo }) => {
  const [input, setInput] = React.useState("");

  function handleCancelClick(id) {
    setInput("");
    toggleEditMode(id);
  }

  function handleEditClick(id, text) {
    if (text === "") return;
    editTodo(id, text);
    setInput("");
  }

  function handleToggleClick(id) {
    setInput("");
    toggleEditMode(id);
  }

  const textColor = todo.isCompleted ? "text-gray-400" : "text-black";
  const text = todo.isCompleted ? <s>{todo.text}</s> : todo.text;
  const checkButtonBg = todo.isCompleted ? "bg-orange-400" : "bg-green-500";
  const checkButtonText = todo.isCompleted ? "Undo" : "Check";

  return todo.isEditing ? (
    <li className="flex h-32 w-full flex-col items-center justify-center rounded border-2 border-gray-400 bg-white p-2 shadow-md transition-all duration-300 hover:shadow-lg md:w-[500px]">
      <div className="flex h-1/2 w-full items-center">
        <input
          className="h-10 w-full border-2 border-gray-200 pl-2 outline-none"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div className="flex h-1/2 w-full items-center justify-center gap-3">
        <button
          className="rounded bg-red-500 px-2 py-1 font-semibold text-white"
          onClick={() => handleCancelClick(todo.id)}
        >
          Cancel
        </button>
        <button
          className="rounded bg-green-500 px-2 py-1 font-semibold text-white"
          onClick={() => handleEditClick(todo.id, input)}
        >
          Confirm
        </button>
      </div>
    </li>
  ) : (
    <li className="flex h-32 w-full flex-col items-center justify-center rounded border-2 border-gray-400 bg-white p-2 shadow-md transition-all duration-300 hover:shadow-lg md:w-[500px]">
      <p
        className={`mb-1 flex h-2/3 w-full max-w-full items-center justify-center break-all text-center ${textColor}`}
      >
        {text}
      </p>

      <div className="flex h-1/3 w-full items-center gap-5 px-5">
        <button
          className={`w-1/3 rounded p-1 font-semibold text-white ${checkButtonBg}`}
          onClick={() => completeTodo(todo.id)}
        >
          {checkButtonText}
        </button>

        <button
          className="w-1/3 rounded bg-yellow-500 py-1 px-2 font-semibold text-white disabled:bg-gray-400 disabled:opacity-75"
          disabled={todo.isCompleted ? true : false}
          onClick={() => handleToggleClick(todo.id)}
        >
          Edit
        </button>

        <button
          className="w-1/3 rounded bg-red-500 p-1 font-semibold text-white"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
