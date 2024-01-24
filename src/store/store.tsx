import { Store, applyMiddleware, combineReducers, createStore } from "redux"
// import taskReducer from "./task/reducer"
import sagaMiddleware from "./rootSaga";
import authReducer from './auth/reducer'
import { rootSaga } from "./rootSaga";
import taskReducer from "./task/reducer";
import { TaskActions } from "./task/types";
import { AuthActions } from "./auth/types";

// const rootReducer = combineReducers({
//     auth: authReducer,
//     tasks : taskReducer,
// });

// const store  = createStore<RootState, TaskActions|AuthActions>(rootReducer, applyMiddleware(sagaMiddleware))
const store  = createStore(authReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof authReducer>  