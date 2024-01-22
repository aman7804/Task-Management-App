import { Store, combineReducers, createStore } from "redux"
import reducer from "./reducer"
import storage from "redux-persist/lib/storage";
// import { ActionTypes, TaskState } from "./types"
import { persistStore, persistReducer } from 'redux-persist'
import { IAppState } from "./types";

const persistConfig = {
    key: 'root',
    storage,
}

// const rootReducer = combineReducers<IAppState>({
//     tasks : reducer
// });
// type typeOfRootReducer = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, reducer)
const store: Store  = createStore(persistedReducer)

// const store = createStore(rootReducer)
const persistor = persistStore(store)
export {store, persistor}