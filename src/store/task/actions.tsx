import {ADD_TASK, DELETE_TASK} from '../actionTypes'
import { TaskActions, ITask} from './types'


export const addTask = (task: string) : TaskActions =>({
    type : ADD_TASK,
    payload : { Id: 0,  Description: task }
})

export const deleteTask = (task: ITask) : TaskActions=>({
    type : DELETE_TASK,
    payload : task
})