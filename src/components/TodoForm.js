import React, { useState ,useEffect,useRef} from 'react';
import TodoList from './TodoList';
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: "");

    const inputRef = useRef(null);
    useEffect( () =>{
        inputRef.current.focus();
    });

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        });
        setInput("");
    }
    return (
            <form onSubmit={handleSubmit}>
                {
                    props.edit? (
                    <div className="todo-form">
                        <input type="text" placeholder="Add Todo" className="todo-input" value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef}></input>
                        <button type="submit" className="todo-button update-button">Update</button>
                    </div>
                    ):
                    (
                    <div className="todo-form">
                        <input type="text" placeholder="Add Todo" className="todo-input" value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef}></input>
                        <button type="submit" className="todo-button">Add</button>
                    </div>
                    )
                }
                
            </form>
    );
}

export default TodoForm;