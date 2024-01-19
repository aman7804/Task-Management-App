import Task from "../Task";

export const AddTask = (task: Task) =>({
    type : 'addTask',
    payload : task
})
export const DeleteTask = (taskId: number) =>({
    type : 'deleteTask',
    payload : taskId
})