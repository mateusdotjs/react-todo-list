import React from "react";

const Form = ({ addTodo }) => {
  const [input, setInput] = React.useState("");

  function handleClick(text) {
    if (text === "") return;
    addTodo(text);
    setInput("");
  }

  return (
    <div className="mb-5 flex w-full flex-wrap items-center justify-center gap-3 p-2 md:mb-10 ">
      <input
        className="mb-2 h-10 w-full rounded border-2 border-gray-400 
        bg-white pl-2 outline-none md:mb-0 md:w-96"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className="h-10 w-full rounded bg-blue-500 px-5 font-semibold 
        text-white transition duration-300 ease-in-out hover:bg-blue-400 md:w-auto"
        onClick={() => handleClick(input)}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Form;
