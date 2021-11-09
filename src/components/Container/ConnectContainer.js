import { connect } from "react-redux";
import { checkUserAC } from "../../redux/todoReducer";
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
  };
};

const ConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ConnectContainer;
