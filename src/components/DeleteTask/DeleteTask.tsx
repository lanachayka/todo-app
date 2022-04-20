import React from "react";
import st from "./DeleteTask.module.css";

type DeleteTaskProps = {
  deleteTask: (idTask: number) => void,
  cancel: () => void,
  id: number
}

const DeleteTask: React.FC<DeleteTaskProps> = (props) => {
  const onDelete = () => {
    props.deleteTask(props.id);
    props.cancel();
  };
  return (
    <div className={st.wrapper}>
      <h3 className={st.title}>Are you sure?</h3>
      <div>
        <button className={st.btn} onClick={onDelete}>
          Yes, delete task
        </button>
        <button className={st.btn} onClick={props.cancel}>
          No, cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteTask
