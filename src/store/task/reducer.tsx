import { TaskActions, ITask } from "./types";
import { ADD_TASK, DELETE_TASK } from "../actionTypes";

const initialState: ITask[] = [{
        Id: 1,
        Description: "Buy groceries",
    }]


const taskReducer = ( state = initialState, action: TaskActions ) : ITask[] =>{
    switch(action.type){
        case ADD_TASK:
            const newTask: ITask = action.payload;
            return [...state, newTask]
        case DELETE_TASK:
            return state.filter(task=>(task.Id !== action.payload.Id))
        default:
            return state;
    }
}
export default taskReducer