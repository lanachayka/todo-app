import React from 'react'
import st from "./AddNewTask.module.css";

export default function AddNewTask(props) {
  const inputRef = React.createRef();
  const addnewTask = () => {
    props.addTask(inputRef.current.value);
    inputRef.current.value = "";
  }
    return (
      <div className={st.wrapper}>
        <input
          ref={inputRef}
          className={st.input}
          placeholder="Your new task..."
        ></input>
        <button className={st.btn} onClick={addnewTask}>
          Add new task
        </button>
      </div>
    );
}
