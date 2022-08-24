import React from "react";
import { useRef } from "react";


const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
  const inputRef = useRef();

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ]);
    setInputText("");
    inputRef.current.focus();
  }
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input 
        ref={inputRef}
        value={inputText}
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
      />
      <button 
        onClick={submitTodoHandler} 
        className="todo-button" 
        type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;