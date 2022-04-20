import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addTaskAC, changeDoneAC, checkUserAC, deleteTaskAC } from "../../redux/todoReducer";
import Container from './Container'

const mapStateToProps = (state: RootState) => {
  return {
    users: state.todo.users,
    currentUser: state.todo.currentUser
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    checkUser: (userEmail: string) => {
      dispatch(checkUserAC(userEmail));
    },
    addTask: (newTask: string) => {
      dispatch(addTaskAC(newTask));
    },
    changeDone: (idTask: number, done: boolean) => {
      dispatch(changeDoneAC(idTask, done));
    },
    deleteTask: (idTask: number) => {
      dispatch(deleteTaskAC(idTask));
    }
  };
};

const ConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ConnectContainer;
