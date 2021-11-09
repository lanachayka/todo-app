import { connect } from "react-redux";
import { addTaskAC, changeDoneAC, checkUserAC } from "../../redux/todoReducer";
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
    changeDone: (idUser, idTask, done) => {
      dispatch(changeDoneAC(idUser, idTask, done));
    }
  };
};

const ConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ConnectContainer;
