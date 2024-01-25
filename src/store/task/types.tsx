import { Action } from "redux";

export interface ITask{
    Id: number,
    Description: string
}

export type IAppState = {
    tasks: ITask[];
}

interface TaskAddAction extends Action{
    type: string,
    payload: ITask
}
interface TypeDeleteAction extends Action{
    type: string,
    payload: ITask
}

export type TaskActions = 
    | TaskAddAction
    | TypeDeleteAction