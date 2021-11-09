import SingUp from "../SingUp/SingUp";
import TodoList from "../TodoList/TodoList";
import React from "react";

export default function Container(props) {
    return (
      <div>
        {props.currentUser === "" ? (
          <SingUp checkUser={props.checkUser} currentUser={props.currentUser} />
        ) : (
          <TodoList
            user={props.users.filter((u) => u.id === props.currentUser)}
            addTask={props.addTask}
            changeDone={props.changeDone}
            currentUser={props.currentUser}
          />
        )}
      </div>
    );
}
