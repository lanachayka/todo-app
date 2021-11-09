import React from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import TodoItem from "../TodoItem/TodoItem";
import st from "./TodoList.module.css";

export default function TodoList(props) {
  const notDone = props.user[0].todoList.filter((task) => !task.done);
  const done = props.user[0].todoList.filter((task) => task.done);
  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>TODO LIST</h1>
      <ul className={st.ul}>
        {notDone.length > 0 &&
          notDone.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.text}
              done={todo.done}
              changeDone={props.changeDone}
              deleteTask={props.deleteTask}
            />
          ))}
        {done.length > 0 &&
          done.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.text}
              done={todo.done}
              changeDone={props.changeDone}
              deleteTask={props.deleteTask}
            />
          ))}
      </ul>
      <AddNewTask addTask={props.addTask} />
    </div>
  );
}
