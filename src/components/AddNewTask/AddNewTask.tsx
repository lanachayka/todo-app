import React from 'react'
import st from "./AddNewTask.module.css";

type AddNewTaskProps = {
  addTask: (newTask: string) => void,
}

const AddNewTask: React.FC<AddNewTaskProps> = (props) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const addnewTask = () => {
    if (inputRef.current?.value && inputRef.current.value.length > 0) {
      props.addTask(inputRef.current.value);
      inputRef.current.value = ""
    }
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

export default AddNewTask