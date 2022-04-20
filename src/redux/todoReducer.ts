import {
  InitialStateType, ActionsType,
  checkUserActionType, addTaskActionType,
  changeDoneActionType, deleteTaskActionType
} from './types';
const CHECK_USER = "CHECK-USER";
const ADD_TASK = "ADD-TASK";
const CHANGE_DONE = "CHANGE-DONE";
const DELETE_TASK = "DELETE-TASK"

const initialState: InitialStateType = {
  users: [
    {
      id: 1,
      name: "user1",
      email: "user1@example.com",
      todoList: [
        { id: 11, text: "wash the car", done: false },
        { id: 12, text: "to order spare parts", done: false },
        { id: 13, text: "to buy a gift for Bob", done: false },
      ],
    },
    {
      id: 2,
      name: "user2",
      email: "user2@example.com",
      todoList: [
        { id: 21, text: "write an article", done: false },
        { id: 22, text: "extend the pass to the library", done: false },
        { id: 23, text: "to buy books according to the list", done: false },
      ],
    },
  ],
  currentUser: "" as const,
};

const todoReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case CHECK_USER: {
      const stateCopy = { ...state, users: state.users };
      const result: number[] = [] ;
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
      const stateCopy: InitialStateType = JSON.parse(JSON.stringify(state));
      stateCopy.users.forEach(u => {
        if (u.id === stateCopy.currentUser) {
          u.todoList.push({
            id: u.todoList[u.todoList.length - 1].id + 1,
            text: action.newTask,
            done: false,
          });
        }
      });
      return stateCopy;
    }
    case CHANGE_DONE: {
      const stateCopy: InitialStateType = JSON.parse(JSON.stringify(state));
      stateCopy.users
        .filter((u) => u.id === stateCopy.currentUser)[0]
        .todoList.forEach((task) => {
          if (task.id === action.idTask) {
            task.done = action.done;
          }
        });
      return stateCopy;
    }
    case DELETE_TASK: {
      const stateCopy: InitialStateType = JSON.parse(JSON.stringify(state));
      let index = 0;
      stateCopy.users.map((u, ind) => {
        if (u.id === stateCopy.currentUser) {
          index = ind;
        }
      });
      const filtred = stateCopy.users[index].todoList.filter(task => task.id !== action.idTask);
      stateCopy.users[index].todoList = filtred;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const checkUserAC = (userEmail: string): checkUserActionType => ({
  type: "CHECK-USER" as const,
  userEmail: userEmail,
});

export const addTaskAC = (newTask: string): addTaskActionType => ({
  type: "ADD-TASK" as const,
  newTask: newTask,
});

export const changeDoneAC = (idTask: number, done: boolean): changeDoneActionType => ({
  type: "CHANGE-DONE" as const,
  idTask: idTask,
  done: done,
});

export const deleteTaskAC = (idTask: number): deleteTaskActionType => ({
  type: "DELETE-TASK" as const,
  idTask: idTask,
});

export default todoReducer;
