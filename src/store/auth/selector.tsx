import { createSelector } from "reselect";
import{ RootState } from '../store'

const getPending = (state:RootState)=> state.pending
const getError = (state:RootState) => state.error
const getToken = (state:RootState)=> state.token

const getAuthSelector = createSelector( getToken, (token)=>token )
const getErrorSelector = createSelector( getError, (error)=>error)
const getPendingSelector = createSelector( getPending, (pending)=>pending )
 
export {getAuthSelector, getErrorSelector, getPendingSelector}