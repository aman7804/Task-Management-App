import {ADD_TASK, DELETE_TASK} from './actionTypes'
import { ActionTypes, ITask} from './types'


export const addTask = (task: string) : ActionTypes =>({
    type : ADD_TASK,
    payload : { Id: 0,  Description: task }
})

export const deleteTask = (task: ITask) : ActionTypes=>({
    type : DELETE_TASK,
    payload : task
})