const CHECK_USER = "CHECK-USER";
const ADD_TASK = "ADD-TASK";

const initialState = {
  users: [
    {
      id: 1,
      name: "user1",
      email: "user1@example.com",
      todoList: [
        { id: 11, text: "wash the car" },
        { id: 12, text: "to order spare parts" },
        { id: 13, text: "to buy a gift for Bob" },
      ],
    },
    {
      id: 2,
      name: "user2",
      email: "user2@example.com",
      todoList: [
        { id: 21, text: "write an article" },
        { id: 22, text: "extend the pass to the library" },
        { id: 23, text: "to buy books according to the list" },
      ],
    },
  ],
  currentUser: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER: {
      const stateCopy = { ...state, users: state.users };
      const result = [];
      stateCopy.users.forEach((u) => {
        if (u.email === action.userEmail) {
          result.push(u.id);
        }
      });
      return result.length === 1
        ? { ...state, currentUser: result[0] }
        : { ...state, currentUser: "" };
    }
    case ADD_TASK: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.users.forEach(u => {
        if (u.id === stateCopy.currentUser) {
          u.todoList.push({ id: u.todoList[u.todoList.length-1].id+1, text: action.newTask });
        }
      });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const checkUserAC = (userEmail) => ({
  type: CHECK_USER,
  userEmail: userEmail,
});

export const addTaskAC = (newTask) => ({
  type: ADD_TASK,
  newTask: newTask,
});

export default todoReducer;
