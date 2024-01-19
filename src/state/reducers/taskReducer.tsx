import Task from "../Task"

const initialState: Task[] = [{
    Id:1,
    Description:"Description"
}]

export const taskReducer = (state:Task[] = initialState, action: any) : Task[] =>{
    if(action.type === 'addTask')
        return[...state, action.payload]
    else if(action.type ==='deleteTask') 
        return state.filter((task)=> task.Id !== action.payload)
    return state
}
