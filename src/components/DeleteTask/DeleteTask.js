import React from "react";
import st from "./DeleteTask.module.css";

export default function DeleteTask(props) {
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
