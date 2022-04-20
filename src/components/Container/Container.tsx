import SingUp from "../SingUp/SingUp";
import TodoList from "../TodoList/TodoList";
import React from "react";
import { UserType } from "../../redux/types";

type MapStateProps = {
  users: UserType[],
  currentUser: number | ""
}

type MapDispatchProps = {
  checkUser: (userEmail: string) => void,
  addTask: (newTask: string) => void,
  changeDone: (idTask: number, done: boolean) => void,
  deleteTask: (idTask: number) => void
}

const Container: React.FC<MapStateProps & MapDispatchProps> = (props) => {
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
            deleteTask={props.deleteTask}
          />
        )}
      </div>
    );
}

export default Container
