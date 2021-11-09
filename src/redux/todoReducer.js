const CHECK_USER = "CHECK-USER";

const initialState = {
  users: [
    {
      id: 1,
      name: "user1",
      email: "user1@example.com",
      todoList: [
        "wash the car",
        "to order spare parts",
        "to buy a gift for Bob",
      ],
    },
    {
      id: 2,
      name: "user2",
      email: "user2@example.com",
      todoList: [
        "write an article",
        "extend the pass to the library",
        "to buy books according to the list",
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
    default:
      return state;
  }
};

export const checkUserAC = (userEmail) => ({
  type: CHECK_USER,
  userEmail: userEmail,
});

export default todoReducer;
