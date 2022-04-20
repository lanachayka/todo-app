import React, { useState } from "react";
import st from "./TodoItem.module.css";
import deleteIcon from "./delete_black_24dp.svg";
import Modal from "../Modal/Modal";
import DeleteTask from "../DeleteTask/DeleteTask";

type TodoItemProps = {
  changeDone: (idTask: number, done: boolean) => void,
  id: number,
  todo: string,
  done: boolean,
  deleteTask: (idTask: number) => void,
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const onDoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.changeDone(props.id, e.target.checked);
  };
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={st.wrapper}>
      <label className={st.label}>
        <input
          type="checkbox"
          defaultChecked={props.done}
          onChange={onDoneChange}
          className={st.input}
        ></input>
        {props.todo}
      </label>
      <button className={st.btn} onClick={() => setModalActive(true)}>
        <img src={deleteIcon} alt="delete Icon" />
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <DeleteTask
          deleteTask={props.deleteTask}
          id={props.id}
          cancel={() => setModalActive(false)}
        />
      </Modal>
    </div>
  );
}

export default TodoItem
