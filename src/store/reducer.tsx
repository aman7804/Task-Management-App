import { ActionTypes, ITask, IAppState } from "./types";
import { ADD_TASK, DELETE_TASK } from "./actionTypes";

const initialState: IAppState = {
    tasks: [{
        Id: 1,
        Description: "Buy groceries",
    }]
}


const reducer = (
    state: IAppState = initialState,
    action: ActionTypes
) : IAppState =>{
    switch(action.type){
        case ADD_TASK:
            const newTask: ITask = action.payload;
            return {...state, tasks:[...state.tasks, newTask] }
        case DELETE_TASK:
            const updatedTaskList: ITask[] = state.tasks.filter(task=>{
                return task.Id !== action.payload.Id
            })
            return { ...state , tasks: updatedTaskList};
        default:
            return state;
    }
}
export default reducer