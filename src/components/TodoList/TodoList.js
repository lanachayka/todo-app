import React from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import TodoItem from "../TodoItem/TodoItem";
import st from "./TodoList.module.css";

export default function TodoList(props) {
  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>TODO LIST</h1>
      <ul className={st.ul}>
        {props.user[0].todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo.text} />
        ))}
      </ul>
      <AddNewTask addTask={props.addTask} />
    </div>
  );
}
