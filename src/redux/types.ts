export type InitialStateType = {
    users: UserType[],
    currentUser: number | ""
}

export type UserType = {
    id: number,
    name: string,
    email: string,
    todoList: TaskType[]
}

export type TaskType = {
    id: number,
    text: string,
    done: boolean
}

export type ActionsType = checkUserActionType | addTaskActionType | changeDoneActionType | deleteTaskActionType

export type checkUserActionType = {
    type: "CHECK-USER",
    userEmail: string,
}

export type addTaskActionType = {
    type: "ADD-TASK",
    newTask: string
}

export type changeDoneActionType = {
    type: "CHANGE-DONE"
    idTask: number,
    done: boolean,
}

export type deleteTaskActionType = {
    type: "DELETE-TASK",
    idTask: number,
}