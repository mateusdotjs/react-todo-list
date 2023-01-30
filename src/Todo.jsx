import React from 'react'

const Todo = ({ todos, removeTodo, completeTodo, toggleEditMode, editTodo }) => {

    const [input, setInput] = React.useState("")

    function handleCancelClick(id) {
        setInput("")
        toggleEditMode(id)
    }

    function handleEditClick(id, text) {
        if (text === "") return
        editTodo(id, text)
        setInput("")
    }

    function handleToggleClick(id) {
        setInput("")
        toggleEditMode(id)
    }

    return (
        <>
            {
                todos.map((todo) =>
                    todo.isEditing ?
                        (<li
                            className="w-100 list-group-item d-flex flex-row 
                            align-items-center justify-content-between flex-wrap 
                            pl-3 pr-2 py-3"
                            key={todo.id}>
                            <div className='col-12 col-md-9 mb-2 mb-md-0'>
                                <input
                                    type="text"
                                    onChange={(e) => setInput(e.target.value)}
                                    value={input}
                                    className='form-control'
                                />
                            </div>
                            <div className='col-12 col-md-3 d-flex justify-content-evenly'>
                                <button
                                    className='btn btn-danger col-5'
                                    onClick={() => handleCancelClick(todo.id)}>
                                    Cancel
                                </button>
                                <button
                                    className='btn btn-success col-5'
                                    onClick={() => handleEditClick(todo.id, input)}>
                                    Confirm
                                </button>
                            </div>
                        </li>)
                        :
                        (<li
                            className="col-12 list-group-item d-flex flex-row 
                            align-items-center justify-content-center 
                            flex-wrap pl-3 pr-2 py-3"
                            key={todo.id}>
                            <p
                                className={`col-12 col-md-7 mb-2 mb-md-0 text-center 
                                text-md-start overflow-hidden 
                                ${todo.isCompleted ? "text-muted" : ""}`}>
                                {todo.isCompleted ? <s>{todo.text}</s> : todo.text}
                            </p>
                            <div className='col-12 col-md-5 d-flex justify-content-evenly'>
                                <button
                                    className={`btn ${todo.isCompleted ? "btn-warning" : "btn-success"} col-3`}
                                    onClick={() => completeTodo(todo.id)}>
                                    {todo.isCompleted ? "Undo" : "Check"}
                                </button>
                                <button
                                    className="btn btn-secondary col-3"
                                    disabled={todo.isCompleted ? true : false}
                                    onClick={() => handleToggleClick(todo.id)}>
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger col-3"
                                    onClick={() => removeTodo(todo.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>)
                )
            }
        </>
    )
}

export default Todo