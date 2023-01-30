import React from 'react'

const Form = ({ addTodo }) => {

    const [input, setInput] = React.useState("")

    function handleClick(text) {
        if (text === "") return
        addTodo(text)
        setInput("")
    }

    return (
        <div className="col-12 mb-3 input-group">
            <input
                className="form-control"
                onChange={(e) => setInput(e.target.value)} value={input}
            />
            <button
                className="btn btn-primary"
                onClick={() => handleClick(input)}>
                Add Todo
            </button>
        </div>
    )
}

export default Form