import { Store, applyMiddleware, combineReducers, createStore } from "redux"
import sagaMiddleware from "./rootSaga";
import authReducer from './auth/reducer'
import { rootSaga } from "./rootSaga";

// export const config = {
//     key: 'root',
//     storage: storage
// };

// const rootReducer = combineReducers({
//     auth: authReducer,
//     tasks : taskReducer,
// });

// const persisted = persistReducer(config, authReducer);
// const store = createStore(persisted, applyMiddleware(sagaMiddleware));

// const store  = createStore<RootState, TaskActions|AuthActions>(rootReducer, applyMiddleware(sagaMiddleware))
const store  = createStore(authReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof authReducer>  