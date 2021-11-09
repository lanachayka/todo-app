import { connect } from "react-redux";
import { addTaskAC, changeDoneAC, checkUserAC, deleteTaskAC } from "../../redux/todoReducer";
import Container from './Container'

const mapStateToProps = (state) => {
  return {
    users: state.todo.users,
    currentUser: state.todo.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: (userEmail) => {
      dispatch(checkUserAC(userEmail));
    },
    addTask: (newTask) => {
      dispatch(addTaskAC(newTask));
    },
    changeDone: (idTask, done) => {
      dispatch(changeDoneAC(idTask, done));
    },
    deleteTask: (idTask) => {
      dispatch(deleteTaskAC(idTask));
    }
  };
};

const ConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ConnectContainer;
